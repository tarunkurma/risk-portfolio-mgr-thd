/**
 * Custom hook for integrating Assessment Completion Agent with React components
 * Simplified version without React Query for compatibility
 */
import { useState, useCallback, useEffect } from 'react';
import { AssessmentCompletionAgent } from '../agents/AssessmentCompletionAgent';
import toast from 'react-hot-toast';

// Global agent instance
let agentInstance = null;

const getAgentInstance = () => {
  if (!agentInstance) {
    agentInstance = new AssessmentCompletionAgent();
  }
  return agentInstance;
};

export const useAssessmentAgent = (assessmentData, phase = 'develop', options = {}) => {
  const agent = getAgentInstance();
  
  const {
    autoAnalyze = false,
    onSuccess,
    onError
  } = options;

  // State management
  const [analysis, setAnalysis] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [validation, setValidation] = useState(null);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGettingSuggestions, setIsGettingSuggestions] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  
  const [analysisError, setAnalysisError] = useState(null);
  const [suggestionsError, setSuggestionsError] = useState(null);
  const [validationError, setValidationError] = useState(null);

  // Auto-analyze on data changes
  useEffect(() => {
    if (autoAnalyze && assessmentData && !isAnalyzing) {
      runAnalysis();
    }
  }, [assessmentData, phase, autoAnalyze]); // eslint-disable-line react-hooks/exhaustive-deps

  // Analysis function
  const runAnalysis = useCallback(async (data = null) => {
    if (isAnalyzing) return;
    
    setIsAnalyzing(true);
    setAnalysisError(null);
    
    try {
      const result = await agent.quickAnalysis(data || assessmentData, phase);
      setAnalysis(result);
      
      if (onSuccess) onSuccess(result);
      toast.success('Assessment analysis completed!');
      
      return result;
    } catch (error) {
      const errorMessage = error.message || 'Analysis failed';
      setAnalysisError(error);
      
      if (onError) onError(error);
      toast.error(`Analysis failed: ${errorMessage}`);
      
      throw error;
    } finally {
      setIsAnalyzing(false);
    }
  }, [agent, assessmentData, phase, onSuccess, onError, isAnalyzing]);

  // Suggestions function
  const getSuggestions = useCallback(async (category, currentAnswers) => {
    if (isGettingSuggestions) return;
    
    setIsGettingSuggestions(true);
    setSuggestionsError(null);
    
    try {
      const result = await agent.getSuggestions(assessmentData, category, currentAnswers, phase);
      setSuggestions(result);
      
      toast.success(`Generated ${result.suggestions?.length || 0} suggestions!`);
      return result;
    } catch (error) {
      const errorMessage = error.message || 'Failed to get suggestions';
      setSuggestionsError(error);
      toast.error(`Failed to get suggestions: ${errorMessage}`);
      throw error;
    } finally {
      setIsGettingSuggestions(false);
    }
  }, [agent, assessmentData, phase, isGettingSuggestions]);

  // Validation function
  const validateAssessment = useCallback(async (data = null) => {
    if (isValidating) return;
    
    setIsValidating(true);
    setValidationError(null);
    
    try {
      const result = await agent.validateAssessment(data || assessmentData, phase);
      setValidation(result);
      
      toast.success('Assessment validation completed!');
      return result;
    } catch (error) {
      const errorMessage = error.message || 'Validation failed';
      setValidationError(error);
      toast.error(`Validation failed: ${errorMessage}`);
      throw error;
    } finally {
      setIsValidating(false);
    }
  }, [agent, assessmentData, phase, isValidating]);

  // Refresh function
  const refreshAnalysis = useCallback(() => {
    if (analysis) {
      runAnalysis();
    }
  }, [analysis, runAnalysis]);

  // Reset functions
  const resetSuggestions = useCallback(() => {
    setSuggestions(null);
    setSuggestionsError(null);
  }, []);

  const resetValidation = useCallback(() => {
    setValidation(null);
    setValidationError(null);
  }, []);

  const resetAnalysis = useCallback(() => {
    setAnalysis(null);
    setAnalysisError(null);
  }, []);

  // Agent statistics
  const agentStats = agent.getStats();

  return {
    // Data
    analysis,
    suggestions,
    validation,
    agentStats,

    // Loading states
    isAnalyzing,
    isGettingSuggestions,
    isValidating,
    isAnyActionRunning: isAnalyzing || isGettingSuggestions || isValidating,

    // Error states
    analysisError,
    suggestionsError,
    validationError,
    hasAnyError: !!(analysisError || suggestionsError || validationError),

    // Actions
    runAnalysis,
    getSuggestions,
    validateAssessment,
    refreshAnalysis,

    // Reset methods
    resetSuggestions,
    resetValidation,
    resetAnalysis,
    
    // Utilities
    clearAgentHistory: () => agent.clearHistory()
  };
};

// Hook for agent status and management
export const useAgentStatus = () => {
  const [isConnected, setIsConnected] = useState(true);
  const agent = getAgentInstance();

  useEffect(() => {
    // Check if Claude API is available
    const checkConnection = async () => {
      try {
        // Simple connectivity test - just check if we have an API key
        const hasApiKey = !!process.env.REACT_APP_CLAUDE_API_KEY;
        setIsConnected(hasApiKey);
      } catch (error) {
        setIsConnected(false);
      }
    };

    checkConnection();
  }, []);

  const stats = agent.getStats();

  return {
    isConnected,
    agentActive: agent.isActive,
    stats,
    lastExecution: agent.lastExecution
  };
};

// Hook for batch operations
export const useBatchAssessmentAgent = () => {
  const [batchResults, setBatchResults] = useState([]);
  const [isRunningBatch, setIsRunningBatch] = useState(false);
  const agent = getAgentInstance();

  const runBatchAnalysis = useCallback(async (assessmentBatch) => {
    setIsRunningBatch(true);
    const results = [];

    try {
      for (const { assessmentData, phase, id } of assessmentBatch) {
        try {
          const result = await agent.quickAnalysis(assessmentData, phase);
          results.push({ id, phase, success: true, data: result });
          toast.success(`Completed analysis for ${phase} phase`);
        } catch (error) {
          results.push({ id, phase, success: false, error: error.message });
          toast.error(`Failed analysis for ${phase}: ${error.message}`);
        }
      }

      setBatchResults(results);
      return results;
    } finally {
      setIsRunningBatch(false);
    }
  }, [agent]);

  const clearBatchResults = useCallback(() => {
    setBatchResults([]);
  }, []);

  return {
    batchResults,
    isRunningBatch,
    runBatchAnalysis,
    clearBatchResults
  };
};

export default useAssessmentAgent;