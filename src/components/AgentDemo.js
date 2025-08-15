/**
 * Agent Demo Component - For testing agent functionality without Claude API key
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRobot, FaPlay, FaCheckCircle } from 'react-icons/fa';

const DemoContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  text-align: center;
`;

const DemoTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const DemoButton = styled.button`
  background: white;
  color: #667eea;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MockResponse = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const AgentDemo = ({ assessmentData }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [demoResult, setDemoResult] = useState(null);

  const runMockAnalysis = () => {
    setShowDemo(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockAnalysis = {
        progressSummary: {
          completionPercentage: 45,
          strongestAreas: ['Infrastructure Setup'],
          weakestAreas: ['Security Standards', 'Test Coverage'],
          criticalGaps: ['Input validation missing', 'Unit testing not configured']
        },
        nextSteps: [
          {
            category: 'securityStandards',
            item: 'inputValidation',
            priority: 'high',
            estimatedTime: '2-3 hours',
            importance: 'Critical for preventing injection attacks and data breaches'
          },
          {
            category: 'testCoverage',
            item: 'unitTestingFrameworks',
            priority: 'high', 
            estimatedTime: '4-6 hours',
            importance: 'Essential foundation for code quality and regression prevention'
          },
          {
            category: 'securityStandards',
            item: 'authenticationProtocols',
            priority: 'medium',
            estimatedTime: '3-4 hours',
            importance: 'Important for user data protection and access control'
          }
        ],
        riskInsights: {
          identifiedRisks: [
            'Lack of input validation creates vulnerability to injection attacks',
            'Missing unit tests increase risk of undetected regressions',
            'Incomplete security standards may expose sensitive data'
          ],
          mitigationRecommendations: [
            'Implement comprehensive input validation immediately',
            'Set up basic unit testing framework before adding more features',
            'Complete security assessment before production deployment'
          ]
        }
      };
      
      setDemoResult(mockAnalysis);
    }, 2000);
  };

  const runMockSuggestions = () => {
    setShowDemo(true);
    
    setTimeout(() => {
      const mockSuggestions = {
        category: 'securityStandards',
        suggestions: [
          {
            item: 'inputValidation',
            recommendation: 'Implement a comprehensive input validation layer using libraries like Joi or Yup for schema validation',
            importance: 'Prevents 80% of common web vulnerabilities including SQL injection and XSS attacks',
            effort: 'Medium',
            tools: ['Joi', 'express-validator', 'sanitize-html'],
            successCriteria: ['All user inputs validated', 'Schema definitions documented', 'Error handling implemented']
          },
          {
            item: 'dataEncryption',
            recommendation: 'Implement encryption for sensitive data at rest using AES-256 and in transit using TLS 1.3',
            importance: 'Essential for compliance with data protection regulations (GDPR, CCPA)',
            effort: 'High',
            tools: ['bcrypt', 'crypto-js', 'helmet.js'],
            successCriteria: ['All sensitive data encrypted', 'Key rotation implemented', 'Security audit passed']
          }
        ]
      };
      
      setDemoResult(mockSuggestions);
    }, 1500);
  };

  return (
    <DemoContainer>
      <DemoTitle>
        <FaRobot />
        Agent Demo Mode
        {process.env.REACT_APP_CLAUDE_API_KEY ? null : ' (No API Key)'}
      </DemoTitle>
      
      <p style={{ marginBottom: '20px', opacity: 0.9 }}>
        {process.env.REACT_APP_CLAUDE_API_KEY 
          ? 'Claude API configured! Try the real agent or run a demo.'
          : 'No Claude API key detected. Try the demo to see what the agent can do!'
        }
      </p>
      
      <div>
        <DemoButton onClick={runMockAnalysis} disabled={showDemo && !demoResult}>
          <FaPlay style={{ marginRight: '5px' }} />
          Demo Analysis
        </DemoButton>
        
        <DemoButton onClick={runMockSuggestions} disabled={showDemo && !demoResult}>
          <FaCheckCircle style={{ marginRight: '5px' }} />
          Demo Suggestions
        </DemoButton>
      </div>

      {showDemo && !demoResult && (
        <MockResponse>
          <strong>🤖 Agent is thinking...</strong><br />
          Analyzing your assessment data and generating recommendations...
        </MockResponse>
      )}

      {demoResult && demoResult.progressSummary && (
        <MockResponse>
          <strong>📊 Analysis Complete</strong><br />
          <br />
          <strong>Progress:</strong> {demoResult.progressSummary.completionPercentage}%<br />
          <strong>Strongest Areas:</strong> {demoResult.progressSummary.strongestAreas.join(', ')}<br />
          <strong>Needs Attention:</strong> {demoResult.progressSummary.weakestAreas.join(', ')}<br />
          <br />
          <strong>Top Priority Actions:</strong>
          <ul style={{ textAlign: 'left', marginLeft: '20px' }}>
            {demoResult.nextSteps.slice(0, 2).map((step, index) => (
              <li key={index}>
                <strong>{step.item}</strong> ({step.priority} priority)<br />
                <small>{step.importance}</small>
              </li>
            ))}
          </ul>
        </MockResponse>
      )}

      {demoResult && demoResult.suggestions && (
        <MockResponse>
          <strong>💡 Improvement Suggestions</strong><br />
          <br />
          {demoResult.suggestions.map((suggestion, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <strong>{suggestion.item}</strong> ({suggestion.effort} effort)<br />
              <small>{suggestion.recommendation}</small><br />
              <small><strong>Tools:</strong> {suggestion.tools.join(', ')}</small>
            </div>
          ))}
        </MockResponse>
      )}

      {demoResult && (
        <div style={{ marginTop: '15px' }}>
          <DemoButton onClick={() => { setShowDemo(false); setDemoResult(null); }}>
            Reset Demo
          </DemoButton>
        </div>
      )}
    </DemoContainer>
  );
};

export default AgentDemo;
