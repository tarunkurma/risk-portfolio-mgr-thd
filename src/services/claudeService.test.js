// Mock fetch globally
global.fetch = jest.fn();

// We need to test the actual implementation, not the mock
jest.unmock('./claudeService');
const { claudeService } = require('./claudeService');

describe('claudeService', () => {
  let consoleWarnSpy;
  let consoleErrorSpy;
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    
    // Reset environment
    process.env = { ...originalEnv };
    process.env.REACT_APP_CLAUDE_API_KEY = 'test-api-key';
    
    // Reset fetch mock
    global.fetch.mockReset();
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    process.env = originalEnv;
  });

  describe('constructor', () => {
    it('should initialize with API key from environment', () => {
      expect(claudeService.apiKey).toBe('test-api-key');
      expect(claudeService.baseUrl).toBe('https://api.anthropic.com/v1/messages');
    });

    it('should warn when API key is missing', () => {
      delete process.env.REACT_APP_CLAUDE_API_KEY;
      
      // Create new instance to trigger constructor
      const ClaudeService = claudeService.constructor;
      new ClaudeService();
      
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Claude API key not found. AI features will be disabled.'
      );
    });
  });

  describe('callClaude', () => {
    const mockResponse = {
      content: [{ text: 'Claude response' }],
      usage: { total_tokens: 150 },
      model: 'claude-3-sonnet-20240229'
    };

    beforeEach(() => {
      global.fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse)
      });
    });

    it('should make successful API call', async () => {
      const result = await claudeService.callClaude({
        prompt: 'Test prompt',
        model: 'claude-3-sonnet-20240229',
        maxTokens: 1000
      });

      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.anthropic.com/v1/messages',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'test-api-key',
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 1000,
            messages: [{
              role: 'user',
              content: 'Test prompt'
            }]
          })
        })
      );

      expect(result).toEqual({
        content: 'Claude response',
        usage: { total_tokens: 150 },
        model: 'claude-3-sonnet-20240229'
      });
    });

    it('should use default model and maxTokens', async () => {
      await claudeService.callClaude({ prompt: 'Test prompt' });

      const callBody = JSON.parse(global.fetch.mock.calls[0][1].body);
      expect(callBody.model).toBe('claude-3-sonnet-20240229');
      expect(callBody.max_tokens).toBe(1000);
    });

    it('should throw error when API key is not configured', async () => {
      claudeService.apiKey = null;

      await expect(
        claudeService.callClaude({ prompt: 'Test' })
      ).rejects.toThrow('Claude API key not configured');
    });

    it('should handle API error responses', async () => {
      const errorResponse = {
        error: { message: 'Invalid request' }
      };

      global.fetch.mockResolvedValue({
        ok: false,
        status: 400,
        json: jest.fn().mockResolvedValue(errorResponse)
      });

      await expect(
        claudeService.callClaude({ prompt: 'Test' })
      ).rejects.toThrow('Claude API Error: 400 - Invalid request');
    });

    it('should handle network errors', async () => {
      global.fetch.mockRejectedValue(new Error('Network error'));

      await expect(
        claudeService.callClaude({ prompt: 'Test' })
      ).rejects.toThrow('Network error');

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Claude API call failed:',
        expect.any(Error)
      );
    });

    it('should handle malformed error responses', async () => {
      global.fetch.mockResolvedValue({
        ok: false,
        status: 500,
        json: jest.fn().mockRejectedValue(new Error('Invalid JSON'))
      });

      await expect(
        claudeService.callClaude({ prompt: 'Test' })
      ).rejects.toThrow('Claude API Error: 500 - Unknown error');
    });
  });

  describe('analyzeAssessmentProgress', () => {
    const mockAssessmentData = {
      criteria: {
        security: { auth: true, encryption: false }
      },
      scores: { security: 75 }
    };

    it('should analyze assessment and return structured data', async () => {
      const mockAnalysis = {
        progressSummary: {
          completionPercentage: 50,
          strongestAreas: ['Authentication'],
          weakestAreas: ['Encryption'],
          criticalGaps: ['No encryption']
        },
        nextSteps: [],
        contextualQuestions: [],
        riskInsights: {
          identifiedRisks: [],
          hiddenProblems: [],
          mitigationRecommendations: []
        }
      };

      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: JSON.stringify(mockAnalysis)
      });

      const result = await claudeService.analyzeAssessmentProgress(mockAssessmentData);

      expect(claudeService.callClaude).toHaveBeenCalledWith({
        prompt: expect.stringContaining('You are an expert software maturity assessment consultant'),
        maxTokens: 1500
      });

      expect(result).toEqual(mockAnalysis);
    });

    it('should handle JSON parsing errors gracefully', async () => {
      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: 'Invalid JSON response'
      });

      const result = await claudeService.analyzeAssessmentProgress(mockAssessmentData);

      expect(result).toEqual({
        rawResponse: 'Invalid JSON response',
        error: 'Failed to parse structured response'
      });

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Failed to parse Claude response as JSON, returning raw text'
      );
    });

    it('should include assessment data in prompt', async () => {
      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: '{}'
      });

      await claudeService.analyzeAssessmentProgress(mockAssessmentData);

      const callArgs = claudeService.callClaude.mock.calls[0][0];
      expect(callArgs.prompt).toContain(JSON.stringify(mockAssessmentData, null, 2));
    });
  });

  describe('generateImprovementSuggestions', () => {
    const criteriaCategory = 'security';
    const currentAnswers = { auth: true, encryption: false };

    it('should generate suggestions successfully', async () => {
      const mockSuggestions = {
        suggestions: [
          {
            item: 'encryption',
            recommendation: 'Implement AES-256',
            importance: 'Critical',
            effort: 'Medium',
            tools: ['OpenSSL'],
            successCriteria: ['All data encrypted']
          }
        ]
      };

      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: JSON.stringify(mockSuggestions)
      });

      const result = await claudeService.generateImprovementSuggestions(
        criteriaCategory,
        currentAnswers
      );

      expect(claudeService.callClaude).toHaveBeenCalledWith({
        prompt: expect.stringContaining('As a software maturity expert'),
        maxTokens: 1200
      });

      expect(result).toEqual(mockSuggestions);
    });

    it('should include category and answers in prompt', async () => {
      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: '{}'
      });

      await claudeService.generateImprovementSuggestions(
        criteriaCategory,
        currentAnswers
      );

      const callArgs = claudeService.callClaude.mock.calls[0][0];
      expect(callArgs.prompt).toContain('Category: security');
      expect(callArgs.prompt).toContain(JSON.stringify(currentAnswers, null, 2));
    });

    it('should handle parsing errors', async () => {
      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: 'Not valid JSON'
      });

      const result = await claudeService.generateImprovementSuggestions(
        criteriaCategory,
        currentAnswers
      );

      expect(result).toEqual({
        rawResponse: 'Not valid JSON',
        error: 'Failed to parse structured response'
      });
    });
  });

  describe('error handling', () => {
    it('should handle API rate limiting', async () => {
      global.fetch.mockResolvedValue({
        ok: false,
        status: 429,
        json: jest.fn().mockResolvedValue({
          error: { message: 'Rate limit exceeded' }
        })
      });

      await expect(
        claudeService.callClaude({ prompt: 'Test' })
      ).rejects.toThrow('Claude API Error: 429 - Rate limit exceeded');
    });

    it('should handle authentication errors', async () => {
      global.fetch.mockResolvedValue({
        ok: false,
        status: 401,
        json: jest.fn().mockResolvedValue({
          error: { message: 'Invalid API key' }
        })
      });

      await expect(
        claudeService.callClaude({ prompt: 'Test' })
      ).rejects.toThrow('Claude API Error: 401 - Invalid API key');
    });
  });

  describe('prompt formatting', () => {
    it('should format assessment analysis prompt correctly', async () => {
      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: '{}'
      });

      await claudeService.analyzeAssessmentProgress({ criteria: {} });

      const prompt = claudeService.callClaude.mock.calls[0][0].prompt;
      
      expect(prompt).toContain('PROGRESS_SUMMARY');
      expect(prompt).toContain('NEXT_STEPS');
      expect(prompt).toContain('CONTEXTUAL_QUESTIONS');
      expect(prompt).toContain('RISK_INSIGHTS');
      expect(prompt).toContain('Format your response as valid JSON');
    });

    it('should format improvement suggestions prompt correctly', async () => {
      claudeService.callClaude = jest.fn().mockResolvedValue({
        content: '{}'
      });

      await claudeService.generateImprovementSuggestions('test', {});

      const prompt = claudeService.callClaude.mock.calls[0][0].prompt;
      
      expect(prompt).toContain('software maturity expert');
      expect(prompt).toContain('actionable improvement suggestions');
      expect(prompt).toContain('Format as JSON');
    });
  });
});