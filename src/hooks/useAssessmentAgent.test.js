import { renderHook, act, waitFor } from '@testing-library/react';
import { useAssessmentAgent } from './useAssessmentAgent';
import { AssessmentCompletionAgent } from '../agents/AssessmentCompletionAgent';

// Mock the AssessmentCompletionAgent
jest.mock('../agents/AssessmentCompletionAgent');

describe('useAssessmentAgent', () => {
  let mockAgent;

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Create mock agent instance
    mockAgent = {
      quickAnalysis: jest.fn(),
      getSuggestions: jest.fn(),
      validateAssessment: jest.fn(),
      getStatus: jest.fn().mockReturnValue({
        name: 'AssessmentCompletion',
        isActive: false,
        totalExecutions: 0
      })
    };
    
    AssessmentCompletionAgent.mockImplementation(() => mockAgent);
  });

  describe('initialization', () => {
    it('should initialize with default state', () => {
      const { result } = renderHook(() => useAssessmentAgent());
      
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.analysis).toBeNull();
      expect(result.current.suggestions).toBeNull();
      expect(result.current.validation).toBeNull();
      expect(result.current.agentStatus).toEqual({
        name: 'AssessmentCompletion',
        isActive: false,
        totalExecutions: 0
      });
    });

    it('should create agent instance on mount', () => {
      renderHook(() => useAssessmentAgent());
      
      expect(AssessmentCompletionAgent).toHaveBeenCalledTimes(1);
    });
  });

  describe('analyzeAssessment', () => {
    const mockAssessmentData = {
      criteria: { security: { auth: true } },
      phase: 'develop'
    };

    const mockAnalysisResult = {
      progressSummary: {
        completionPercentage: 75,
        strongestAreas: ['Security']
      },
      calculatedMetrics: {
        overall: { percentage: 75 }
      }
    };

    it('should analyze assessment successfully', async () => {
      mockAgent.quickAnalysis.mockResolvedValue(mockAnalysisResult);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        await result.current.analyzeAssessment(mockAssessmentData);
      });
      
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.analysis).toEqual(mockAnalysisResult);
      expect(mockAgent.quickAnalysis).toHaveBeenCalledWith(
        mockAssessmentData,
        'develop'
      );
    });

    it('should set loading state during analysis', async () => {
      let resolveAnalysis;
      const analysisPromise = new Promise(resolve => {
        resolveAnalysis = resolve;
      });
      mockAgent.quickAnalysis.mockReturnValue(analysisPromise);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      act(() => {
        result.current.analyzeAssessment(mockAssessmentData);
      });
      
      expect(result.current.loading).toBe(true);
      
      await act(async () => {
        resolveAnalysis(mockAnalysisResult);
        await analysisPromise;
      });
      
      expect(result.current.loading).toBe(false);
    });

    it('should handle analysis errors', async () => {
      const error = new Error('Analysis failed');
      mockAgent.quickAnalysis.mockRejectedValue(error);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        await result.current.analyzeAssessment(mockAssessmentData);
      });
      
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('Analysis failed');
      expect(result.current.analysis).toBeNull();
    });

    it('should use default phase when not provided', async () => {
      mockAgent.quickAnalysis.mockResolvedValue(mockAnalysisResult);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        await result.current.analyzeAssessment({ criteria: {} });
      });
      
      expect(mockAgent.quickAnalysis).toHaveBeenCalledWith(
        { criteria: {} },
        'develop'
      );
    });
  });

  describe('getSuggestions', () => {
    const mockSuggestionsResult = {
      suggestions: [
        {
          item: 'encryption',
          recommendation: 'Implement AES-256',
          effort: 'Medium'
        }
      ],
      implementationPlan: {
        immediate: [],
        shortTerm: [],
        longTerm: []
      }
    };

    it('should get suggestions successfully', async () => {
      mockAgent.getSuggestions.mockResolvedValue(mockSuggestionsResult);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        await result.current.getSuggestions(
          { criteria: {} },
          'security',
          { auth: true },
          'develop'
        );
      });
      
      expect(result.current.suggestions).toEqual(mockSuggestionsResult);
      expect(mockAgent.getSuggestions).toHaveBeenCalledWith(
        { criteria: {} },
        'security',
        { auth: true },
        'develop'
      );
    });

    it('should handle suggestions errors', async () => {
      const error = new Error('Suggestions failed');
      mockAgent.getSuggestions.mockRejectedValue(error);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        await result.current.getSuggestions({}, 'security', {});
      });
      
      expect(result.current.error).toBe('Suggestions failed');
      expect(result.current.suggestions).toBeNull();
    });
  });

  describe('validateAssessment', () => {
    const mockValidationResult = {
      completionStatus: {
        overall: 80,
        status: 'mostly-complete'
      },
      missingRequired: [],
      qualityScore: {
        overall: 75,
        rating: 'good'
      }
    };

    it('should validate assessment successfully', async () => {
      mockAgent.validateAssessment.mockResolvedValue(mockValidationResult);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        await result.current.validateAssessment({ criteria: {} }, 'develop');
      });
      
      expect(result.current.validation).toEqual(mockValidationResult);
      expect(mockAgent.validateAssessment).toHaveBeenCalledWith(
        { criteria: {} },
        'develop'
      );
    });

    it('should handle validation errors', async () => {
      const error = new Error('Validation failed');
      mockAgent.validateAssessment.mockRejectedValue(error);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        await result.current.validateAssessment({});
      });
      
      expect(result.current.error).toBe('Validation failed');
      expect(result.current.validation).toBeNull();
    });
  });

  describe('resetState', () => {
    it('should reset all state to initial values', async () => {
      mockAgent.quickAnalysis.mockResolvedValue({ data: 'test' });
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      // First set some state
      await act(async () => {
        await result.current.analyzeAssessment({ criteria: {} });
      });
      
      expect(result.current.analysis).not.toBeNull();
      
      // Then reset
      act(() => {
        result.current.resetState();
      });
      
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.analysis).toBeNull();
      expect(result.current.suggestions).toBeNull();
      expect(result.current.validation).toBeNull();
    });
  });

  describe('getAgentStatus', () => {
    it('should return current agent status', () => {
      const mockStatus = {
        name: 'AssessmentCompletion',
        isActive: true,
        totalExecutions: 5,
        successRate: 80
      };
      
      mockAgent.getStatus.mockReturnValue(mockStatus);
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      act(() => {
        result.current.getAgentStatus();
      });
      
      expect(result.current.agentStatus).toEqual(mockStatus);
    });
  });

  describe('concurrent operations', () => {
    it('should handle multiple concurrent operations', async () => {
      mockAgent.quickAnalysis.mockResolvedValue({ analysis: 'data' });
      mockAgent.getSuggestions.mockResolvedValue({ suggestions: [] });
      mockAgent.validateAssessment.mockResolvedValue({ valid: true });
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      await act(async () => {
        // Start all operations concurrently
        const promises = [
          result.current.analyzeAssessment({ criteria: {} }),
          result.current.getSuggestions({}, 'test', {}),
          result.current.validateAssessment({})
        ];
        
        await Promise.all(promises);
      });
      
      expect(result.current.analysis).toEqual({ analysis: 'data' });
      expect(result.current.suggestions).toEqual({ suggestions: [] });
      expect(result.current.validation).toEqual({ valid: true });
      expect(result.current.error).toBeNull();
    });
  });

  describe('cleanup', () => {
    it('should cleanup on unmount', () => {
      const { unmount } = renderHook(() => useAssessmentAgent());
      
      expect(AssessmentCompletionAgent).toHaveBeenCalledTimes(1);
      
      unmount();
      
      // Verify no memory leaks or hanging promises
      expect(mockAgent.quickAnalysis).not.toHaveBeenCalled();
    });

    it('should handle cleanup during pending operation', async () => {
      let resolveAnalysis;
      const analysisPromise = new Promise(resolve => {
        resolveAnalysis = resolve;
      });
      mockAgent.quickAnalysis.mockReturnValue(analysisPromise);
      
      const { result, unmount } = renderHook(() => useAssessmentAgent());
      
      act(() => {
        result.current.analyzeAssessment({ criteria: {} });
      });
      
      expect(result.current.loading).toBe(true);
      
      unmount();
      
      // Resolve after unmount - should not cause errors
      await act(async () => {
        resolveAnalysis({ data: 'test' });
        await analysisPromise;
      });
    });
  });

  describe('error recovery', () => {
    it('should clear error on successful operation', async () => {
      const error = new Error('Initial error');
      mockAgent.quickAnalysis
        .mockRejectedValueOnce(error)
        .mockResolvedValueOnce({ data: 'success' });
      
      const { result } = renderHook(() => useAssessmentAgent());
      
      // First operation fails
      await act(async () => {
        await result.current.analyzeAssessment({});
      });
      
      expect(result.current.error).toBe('Initial error');
      
      // Second operation succeeds
      await act(async () => {
        await result.current.analyzeAssessment({});
      });
      
      expect(result.current.error).toBeNull();
      expect(result.current.analysis).toEqual({ data: 'success' });
    });
  });
});