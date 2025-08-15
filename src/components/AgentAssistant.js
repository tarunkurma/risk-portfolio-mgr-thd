/**
 * Agent Assistant Component - Floating AI assistant for assessment guidance
 */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaRobot, FaChevronUp, FaChevronDown, FaSpinner, FaLightbulb, 
  FaCheckCircle, FaExclamationTriangle, FaChartLine, FaTimes 
} from 'react-icons/fa';
import { useAssessmentAgent } from '../hooks/useAssessmentAgent';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Styled Components
const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const AgentTrigger = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(47, 72, 196, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(47, 72, 196, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }

  ${({ isActive }) => isActive && `
    animation: ${pulse} 2s infinite;
  `}
`;

const AgentPanel = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 400px;
  max-height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease;
  
  @media (max-width: 480px) {
    width: 350px;
    right: -20px;
  }
`;

const PanelHeader = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1.1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const PanelContent = styled.div`
  padding: 20px;
  max-height: 500px;
  overflow-y: auto;
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 8px;
  background: white;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBackground};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 8px;
  margin-bottom: 15px;
  
  svg {
    animation: ${spin} 1s linear infinite;
  }
`;

const ResultSection = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 8px;
  border-left: 4px solid ${({ theme, type }) => {
    switch (type) {
      case 'success': return theme.colors.primary;
      case 'warning': return theme.colors.accent;
      case 'error': return '#dc3545';
      default: return theme.colors.primary;
    }
  }};
`;

const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const ResultContent = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  transition: width 0.3s ease;
  width: ${({ percentage }) => percentage}%;
`;

const RecommendationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`;

const RecommendationItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  font-size: 0.85rem;
  line-height: 1.3;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  }
`;

const PriorityBadge = styled.span`
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  background: ${({ priority, theme }) => {
    switch (priority) {
      case 'high': return '#dc3545';
      case 'medium': return '#ffc107';
      case 'low': return theme.colors.primary;
      default: return theme.colors.secondaryBackground;
    }
  }};
  color: white;
  text-transform: uppercase;
`;

export const AgentAssistant = ({ assessmentData, phase = 'develop' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  
  const {
    analysis,
    suggestions,
    validation,
    isAnalyzing,
    isGettingSuggestions,
    isValidating,
    isAnyActionRunning,
    analysisError,
    runAnalysis,
    getSuggestions,
    validateAssessment
  } = useAssessmentAgent(assessmentData, phase);

  const handleQuickAnalysis = async () => {
    setActiveAction('analysis');
    try {
      await runAnalysis();
    } catch (error) {
      console.error('Quick analysis failed:', error);
    } finally {
      setActiveAction(null);
    }
  };

  const handleGetSuggestions = async () => {
    if (!assessmentData?.criteria) return;
    
    setActiveAction('suggestions');
    try {
      // Get suggestions for the first incomplete category
      const firstIncompleteCategory = Object.entries(assessmentData.criteria)
        .find(([_, items]) => Object.values(items).some(val => !val));
      
      if (firstIncompleteCategory) {
        await getSuggestions(firstIncompleteCategory[0], firstIncompleteCategory[1]);
      }
    } catch (error) {
      console.error('Get suggestions failed:', error);
    } finally {
      setActiveAction(null);
    }
  };

  const handleValidation = async () => {
    setActiveAction('validation');
    try {
      await validateAssessment();
    } catch (error) {
      console.error('Validation failed:', error);
    } finally {
      setActiveAction(null);
    }
  };

  const renderAnalysisResult = () => {
    if (!analysis) return null;

    const { progressSummary, nextSteps, calculatedMetrics } = analysis;
    const completionPercentage = calculatedMetrics?.overall?.percentage || 0;

    return (
      <ResultSection type="success">
        <ResultHeader>
          <FaChartLine />
          Analysis Complete
        </ResultHeader>
        <ResultContent>
          <div>
            <strong>Progress: {completionPercentage}%</strong>
            <ProgressBar>
              <ProgressFill percentage={completionPercentage} />
            </ProgressBar>
          </div>
          
          {nextSteps && nextSteps.length > 0 && (
            <div style={{ marginTop: '15px' }}>
              <strong>Next Steps:</strong>
              <RecommendationList>
                {nextSteps.slice(0, 3).map((step, index) => (
                  <RecommendationItem key={index}>
                    <PriorityBadge priority={step.priority}>
                      {step.priority}
                    </PriorityBadge>
                    <div>
                      <div><strong>{step.item}</strong></div>
                      <div style={{ opacity: 0.8 }}>{step.importance}</div>
                    </div>
                  </RecommendationItem>
                ))}
              </RecommendationList>
            </div>
          )}
        </ResultContent>
      </ResultSection>
    );
  };

  const renderSuggestionsResult = () => {
    if (!suggestions?.suggestions) return null;

    return (
      <ResultSection type="success">
        <ResultHeader>
          <FaLightbulb />
          Improvement Suggestions
        </ResultHeader>
        <ResultContent>
          <RecommendationList>
            {suggestions.suggestions.slice(0, 3).map((suggestion, index) => (
              <RecommendationItem key={index}>
                <PriorityBadge priority={suggestion.effort?.toLowerCase()}>
                  {suggestion.effort}
                </PriorityBadge>
                <div>
                  <div><strong>{suggestion.item}</strong></div>
                  <div style={{ opacity: 0.8 }}>{suggestion.recommendation}</div>
                </div>
              </RecommendationItem>
            ))}
          </RecommendationList>
        </ResultContent>
      </ResultSection>
    );
  };

  const renderValidationResult = () => {
    if (!validation) return null;

    const { completionStatus, qualityScore, recommendations } = validation;
    const hasIssues = recommendations && recommendations.length > 0;

    return (
      <ResultSection type={hasIssues ? 'warning' : 'success'}>
        <ResultHeader>
          {hasIssues ? <FaExclamationTriangle /> : <FaCheckCircle />}
          Validation {hasIssues ? 'Issues Found' : 'Passed'}
        </ResultHeader>
        <ResultContent>
          <div>
            <strong>Completion: {completionStatus?.overall || 0}%</strong>
            <strong style={{ marginLeft: '20px' }}>
              Quality: {qualityScore?.overall || 0}/100
            </strong>
          </div>
          
          {hasIssues && (
            <RecommendationList>
              {recommendations.slice(0, 3).map((rec, index) => (
                <RecommendationItem key={index}>
                  <PriorityBadge priority={rec.priority}>
                    {rec.priority}
                  </PriorityBadge>
                  <div>{rec.message}</div>
                </RecommendationItem>
              ))}
            </RecommendationList>
          )}
        </ResultContent>
      </ResultSection>
    );
  };

  const renderError = () => {
    if (!analysisError) return null;

    return (
      <ResultSection type="error">
        <ResultHeader>
          <FaExclamationTriangle />
          Error
        </ResultHeader>
        <ResultContent>
          {analysisError.message || 'An unexpected error occurred'}
        </ResultContent>
      </ResultSection>
    );
  };

  return (
    <FloatingContainer>
      {isOpen && (
        <AgentPanel>
          <PanelHeader>
            <HeaderTitle>
              <FaRobot />
              Assessment Assistant
            </HeaderTitle>
            <CloseButton onClick={() => setIsOpen(false)}>
              <FaTimes />
            </CloseButton>
          </PanelHeader>
          
          <PanelContent>
            <QuickActions>
              <ActionButton
                onClick={handleQuickAnalysis}
                disabled={isAnyActionRunning}
              >
                <FaChartLine />
                {isAnalyzing ? 'Analyzing...' : 'Quick Analysis'}
              </ActionButton>
              
              <ActionButton
                onClick={handleGetSuggestions}
                disabled={isAnyActionRunning || !assessmentData?.criteria}
              >
                <FaLightbulb />
                {isGettingSuggestions ? 'Getting...' : 'Get Suggestions'}
              </ActionButton>
              
              <ActionButton
                onClick={handleValidation}
                disabled={isAnyActionRunning}
              >
                <FaCheckCircle />
                {isValidating ? 'Validating...' : 'Validate'}
              </ActionButton>
            </QuickActions>

            {isAnyActionRunning && (
              <LoadingIndicator>
                <FaSpinner />
                <span>Agent is thinking...</span>
              </LoadingIndicator>
            )}

            {renderError()}
            {renderAnalysisResult()}
            {renderSuggestionsResult()}
            {renderValidationResult()}
          </PanelContent>
        </AgentPanel>
      )}
      
      <AgentTrigger
        onClick={() => setIsOpen(!isOpen)}
        isActive={isAnyActionRunning}
        title="Open Assessment Assistant"
      >
        {isAnyActionRunning ? <FaSpinner /> : <FaRobot />}
      </AgentTrigger>
    </FloatingContainer>
  );
};

export default AgentAssistant;
