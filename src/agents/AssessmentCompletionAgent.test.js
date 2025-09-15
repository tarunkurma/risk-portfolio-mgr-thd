import { AssessmentCompletionAgent } from './AssessmentCompletionAgent';
import { claudeService } from '../services/claudeService';
import toast from 'react-hot-toast';

jest.mock('../services/claudeService');
jest.mock('react-hot-toast');

describe('AssessmentCompletionAgent', () => {
  let agent;
  
  beforeEach(() => {
    jest.clearAllMocks();
    agent = new AssessmentCompletionAgent();
  });

  describe('constructor', () => {
    it('should initialize with correct name and timeout', () => {
      expect(agent.name).toBe('AssessmentCompletion');
      expect(agent.config.timeout).toBe(45000);
    });
  });

  describe('_performExecution', () => {
    const mockAssessmentData = {
      criteria: {
        security: { auth: true, encryption: false },
        testing: { unit: true, integration: true }
      },
      scores: { security: 50, testing: 100 }
    };

    describe('analyze action', () => {
      it('should analyze assessment progress successfully', async () => {
        const mockAnalysis = {
          progressSummary: {
            completionPercentage: 75,
            strongestAreas: ['Testing'],
            weakestAreas: ['Security'],
            criticalGaps: ['Encryption not implemented']
          },
          nextSteps: [
            { category: 'security', priority: 'high', item: 'Enable encryption' }
          ]
        };
        
        claudeService.analyzeAssessmentProgress.mockResolvedValue(mockAnalysis);
        
        const result = await agent._performExecution({
          assessmentData: mockAssessmentData,
          phase: 'develop',
          action: 'analyze'
        });
        
        expect(claudeService.analyzeAssessmentProgress).toHaveBeenCalledWith(mockAssessmentData);
        expect(result).toHaveProperty('progressSummary');
        expect(result).toHaveProperty('calculatedMetrics');
        expect(result).toHaveProperty('recommendations');
        expect(toast.success).toHaveBeenCalledWith('Assessment analysis completed!');
      });

      it('should throw error when assessment data is missing', async () => {
        await expect(
          agent._performExecution({ action: 'analyze' })
        ).rejects.toThrow('Assessment data is required for analysis');
      });

      it('should handle analysis failure', async () => {
        claudeService.analyzeAssessmentProgress.mockRejectedValue(new Error('API error'));
        
        await expect(
          agent._performExecution({
            assessmentData: mockAssessmentData,
            action: 'analyze'
          })
        ).rejects.toThrow('Analysis failed: API error');
      });
    });

    describe('suggest action', () => {
      it('should generate suggestions successfully', async () => {
        const mockSuggestions = {
          suggestions: [
            {
              item: 'encryption',
              recommendation: 'Implement AES-256',
              effort: 'Medium',
              tools: ['OpenSSL'],
              successCriteria: ['All data encrypted at rest']
            }
          ]
        };
        
        claudeService.generateImprovementSuggestions.mockResolvedValue(mockSuggestions);
        
        const result = await agent._performExecution({
          assessmentData: mockAssessmentData,
          phase: 'develop',
          action: 'suggest'
        }, {
          category: 'security',
          currentAnswers: { auth: true, encryption: false }
        });
        
        expect(claudeService.generateImprovementSuggestions).toHaveBeenCalledWith(
          'security',
          { auth: true, encryption: false }
        );
        expect(result).toHaveProperty('suggestions');
        expect(result).toHaveProperty('implementationPlan');
        expect(toast.success).toHaveBeenCalledWith('Generated 1 improvement suggestions');
      });

      it('should throw error when category is missing', async () => {
        await expect(
          agent._performExecution({
            assessmentData: mockAssessmentData,
            action: 'suggest'
          }, {})
        ).rejects.toThrow('Category and current answers are required for suggestions');
      });
    });

    describe('validate action', () => {
      it('should validate assessment completeness', async () => {
        const result = await agent._performExecution({
          assessmentData: mockAssessmentData,
          phase: 'develop',
          action: 'validate'
        });
        
        expect(result).toHaveProperty('completionStatus');
        expect(result).toHaveProperty('missingRequired');
        expect(result).toHaveProperty('qualityScore');
        expect(result).toHaveProperty('recommendations');
      });
    });

    it('should throw error for unknown action', async () => {
      await expect(
        agent._performExecution({
          assessmentData: mockAssessmentData,
          action: 'unknown'
        })
      ).rejects.toThrow('Unknown action: unknown');
    });
  });

  describe('_calculateMetrics', () => {
    it('should calculate correct metrics', () => {
      const assessmentData = {
        criteria: {
          security: { auth: true, encryption: false, logging: true },
          testing: { unit: true, integration: true }
        }
      };
      
      const metrics = agent._calculateMetrics(assessmentData);
      
      expect(metrics.overall.total).toBe(5);
      expect(metrics.overall.completed).toBe(4);
      expect(metrics.overall.percentage).toBe(80);
      expect(metrics.byCategory).toHaveLength(2);
      expect(metrics.strengths).toHaveLength(1); // testing at 100%
      expect(metrics.weaknesses).toHaveLength(0); // security at 66% (not < 50%)
    });

    it('should handle empty assessment data', () => {
      const metrics = agent._calculateMetrics({ criteria: {} });
      
      expect(metrics.overall.total).toBe(0);
      expect(metrics.overall.completed).toBe(0);
      expect(metrics.overall.percentage).toBe(0);
      expect(metrics.byCategory).toEqual([]);
    });
  });

  describe('_prioritizeRecommendations', () => {
    it('should sort recommendations by priority', () => {
      const recommendations = [
        { priority: 'low', item: 'Documentation' },
        { priority: 'high', item: 'Security fix' },
        { priority: 'medium', item: 'Performance' },
        { priority: 'high', item: 'Critical bug' }
      ];
      
      const sorted = agent._prioritizeRecommendations(recommendations);
      
      expect(sorted[0].priority).toBe('high');
      expect(sorted[1].priority).toBe('high');
      expect(sorted[2].priority).toBe('medium');
      expect(sorted[3].priority).toBe('low');
    });
  });

  describe('_createImplementationPlan', () => {
    it('should create structured implementation plan', () => {
      const suggestions = [
        { item: 'Quick fix 1', effort: 'Low' },
        { item: 'Quick fix 2', effort: 'Low' },
        { item: 'Medium task 1', effort: 'Medium' },
        { item: 'Medium task 2', effort: 'Medium' },
        { item: 'Big project', effort: 'High' }
      ];
      
      const plan = agent._createImplementationPlan(suggestions);
      
      expect(plan.immediate).toHaveLength(2); // 2 quick wins
      expect(plan.shortTerm).toHaveLength(2); // 2 medium efforts
      expect(plan.longTerm).toHaveLength(1); // 1 high effort
      expect(plan.timeline.week1).toHaveLength(1);
      expect(plan.timeline.week2_4).toHaveLength(2);
      expect(plan.timeline.month2_3).toHaveLength(2);
    });
  });

  describe('_calculateCompletionStatus', () => {
    it('should calculate weighted completion status', () => {
      const assessmentData = {
        criteria: {
          security: { auth: true, encryption: true },
          testing: { unit: true, integration: false }
        },
        scores: {
          security: 80,
          testing: 60,
          performance: ''
        }
      };
      
      const status = agent._calculateCompletionStatus(assessmentData);
      
      expect(status.overall).toBeGreaterThan(0);
      expect(status.overall).toBeLessThanOrEqual(100);
      expect(status.criteria).toHaveProperty('percentage');
      expect(status.scores).toHaveProperty('percentage');
      expect(['complete', 'mostly-complete', 'in-progress', 'just-started'])
        .toContain(status.status);
    });
  });

  describe('_findMissingRequired', () => {
    it('should identify missing required items', () => {
      const assessmentData = {
        criteria: {
          securityStandards: { authenticationProtocols: false },
          infrastructure: {},
          testCoverage: { unitTestingFrameworks: true }
        }
      };
      
      const missing = agent._findMissingRequired(assessmentData);
      
      expect(missing).toContainEqual(
        expect.objectContaining({
          category: 'securityStandards',
          item: 'inputValidation',
          priority: 'required'
        })
      );
    });
  });

  describe('_calculateQualityScore', () => {
    it('should calculate quality score with all factors', () => {
      const assessmentData = {
        criteria: {
          securityStandards: { auth: true, encryption: true },
          infrastructure: { docker: true, kubernetes: true },
          testCoverage: { unit: true, integration: true }
        }
      };
      
      const quality = agent._calculateQualityScore(assessmentData);
      
      expect(quality.overall).toBeGreaterThan(0);
      expect(quality.overall).toBeLessThanOrEqual(100);
      expect(quality.factors).toHaveProperty('completion');
      expect(quality.factors).toHaveProperty('consistency');
      expect(quality.factors).toHaveProperty('coverage');
      expect(['excellent', 'good', 'fair', 'needs-improvement'])
        .toContain(quality.rating);
    });
  });

  describe('public helper methods', () => {
    it('should provide quickAnalysis method', async () => {
      const mockData = { criteria: {} };
      agent.execute = jest.fn().mockResolvedValue({ success: true });
      
      await agent.quickAnalysis(mockData, 'develop');
      
      expect(agent.execute).toHaveBeenCalledWith(
        { assessmentData: mockData, phase: 'develop', action: 'analyze' }
      );
    });

    it('should provide getSuggestions method', async () => {
      const mockData = { criteria: {} };
      agent.execute = jest.fn().mockResolvedValue({ suggestions: [] });
      
      await agent.getSuggestions(mockData, 'security', { auth: true }, 'develop');
      
      expect(agent.execute).toHaveBeenCalledWith(
        { assessmentData: mockData, phase: 'develop', action: 'suggest' },
        { category: 'security', currentAnswers: { auth: true } }
      );
    });

    it('should provide validateAssessment method', async () => {
      const mockData = { criteria: {} };
      agent.execute = jest.fn().mockResolvedValue({ valid: true });
      
      await agent.validateAssessment(mockData, 'develop');
      
      expect(agent.execute).toHaveBeenCalledWith(
        { assessmentData: mockData, phase: 'develop', action: 'validate' }
      );
    });
  });

  describe('edge cases', () => {
    it('should handle null assessment data gracefully', () => {
      const metrics = agent._calculateMetrics({ criteria: null });
      expect(metrics.overall.total).toBe(0);
    });

    it('should handle undefined categories', () => {
      const assessmentData = {
        criteria: {
          security: undefined,
          testing: { unit: true }
        }
      };
      
      const metrics = agent._calculateMetrics(assessmentData);
      expect(metrics.byCategory).toHaveLength(1);
    });

    it('should handle empty suggestions list', () => {
      const plan = agent._createImplementationPlan([]);
      
      expect(plan.immediate).toEqual([]);
      expect(plan.shortTerm).toEqual([]);
      expect(plan.longTerm).toEqual([]);
    });
  });
});