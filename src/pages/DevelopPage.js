import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCodeBranch, FaArrowLeft, FaShieldAlt, FaCode, FaServer, FaCheckSquare,
  FaExclamationTriangle, FaClipboardCheck, FaChevronDown, FaChevronRight,
  FaArrowUp, FaArrowDown, FaMinus, FaEdit, FaLightbulb, FaClock, FaLink,
  FaChevronUp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AgentAssistant from '../components/AgentAssistant';
import AgentDemo from '../components/AgentDemo';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-right: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.develop};
  border: 2px solid ${({ theme }) => theme.colors.develop};
  border-radius: 50%;
  font-size: 2rem;
  margin-right: 1.5rem;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const PageDescription = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;



const Section = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.colors.background};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

const StickySectionHeader = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  z-index: 20;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;



const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};
`;

const SectionHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SectionIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  background: ${({ theme, color }) => theme.colors[color] || theme.colors.primary}15;
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: 1.2;
  display: flex;
  align-items: center;
`;

const SectionDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin: 0.75rem 0 1rem 0;
  line-height: 1.5;
  text-align: center;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionContent = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`;



const AssessmentSection = styled.div`
  margin-bottom: 3rem;
`;

const AssessmentTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
  }
`;

const AssessmentDivider = styled.div`
  height: 2px;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.primary}20 0%, 
    ${({ theme }) => theme.colors.primary} 50%, 
    ${({ theme }) => theme.colors.primary}20 100%);
  margin: 3rem 0;
  border-radius: 1px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.primary}30;
    transform: translateX(4px);
  }
`;

const Checkbox = styled.input`
  margin-right: 1rem;
  transform: scale(1.3);
  accent-color: ${({ theme }) => theme.colors.primary};
`;

const CheckboxLabel = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  line-height: 1.4;
`;

const ScoreItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 0.5rem;
  border-left: 4px solid ${({ score, theme }) => {
    if (score >= 80) return '#2ecc40';
    if (score >= 60) return '#ff851b';
    return '#ff4136';
  }};
  overflow: hidden;
`;

const ScoreHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;



const slideDown = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    max-height: 500px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`;

const ExpandIcon = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  transition: transform 0.3s ease;
  transform: rotate(${({ expanded }) => expanded ? '180deg' : '0deg'});
`;

const TrendIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: ${({ trend, theme }) => {
    if (trend === 'up') return '#2ecc40';
    if (trend === 'down') return '#ff4136';
    return theme.colors.text;
  }};
`;

const ScoreDetails = styled.div`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  animation: ${({ expanded }) => expanded ? slideDown : slideUp} 0.3s ease;
  overflow: hidden;
`;

const RiskBulletList = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
`;

const RiskBulletItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ActionItem = styled.div`
  background: ${({ theme }) => theme.colors.primary}10;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  font-size: 0.85rem;
`;

const CorrelationMatrix = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 0.5rem;
`;

const CorrelationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.25rem;
`;

const TimelineView = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 0.5rem;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.25rem;
  font-size: 0.85rem;
`;

const EditableScore = styled.input`
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ score, theme }) => {
    if (score >= 80) return '#2ecc40';
    if (score >= 60) return '#ff851b';
    return '#ff4136';
  }};
  width: 60px;
  text-align: center;
  
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 0.25rem;
    padding: 0.25rem;
  }
`;

const OverallScoreContainer = styled.div`
  background: linear-gradient(135deg, ${({ score, theme }) => {
    if (score >= 80) return '#2ecc40';
    if (score >= 60) return '#ff851b';
    return '#ff4136';
  }}15, ${({ score, theme }) => {
    if (score >= 80) return '#2ecc40';
    if (score >= 60) return '#ff851b';
    return '#ff4136';
  }}05);
  border: 2px solid ${({ score, theme }) => {
    if (score >= 80) return '#2ecc40';
    if (score >= 60) return '#ff851b';
    return '#ff4136';
  }};
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const OverallScoreHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const OverallScoreValue = styled.div`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ score, theme }) => {
    if (score >= 80) return '#2ecc40';
    if (score >= 60) return '#ff851b';
    return '#ff4136';
  }};
  margin-bottom: 0.25rem;
`;

const OverallScoreLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const ScoreStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ score, theme }) => {
    if (score >= 80) return '#2ecc40';
    if (score >= 60) return '#ff851b';
    return '#ff4136';
  }};
  color: white;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;

const ScoreBreakdown = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.background};
`;

const BreakdownItem = styled.div`
  text-align: center;
  font-size: 0.85rem;
`;

const BreakdownValue = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const BreakdownLabel = styled.div`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  font-size: 0.75rem;
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  z-index: 10;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  margin: 0 -1rem 1rem -1rem;
`;

const ExpandCollapseButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ExpandCollapseButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}dd;
  }
  
  &:focus {
    outline: none;
  }
`;

const ScoreLabel = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;

const ScoreValue = styled.span`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  min-width: 1.5rem;
  text-align: center;
  display: inline-block;
`;

export default function DevelopPage() {
  const [expandedScores, setExpandedScores] = useState({});
  const [editingScore, setEditingScore] = useState(null);
  const [assessmentCriteria, setAssessmentCriteria] = React.useState({
    securityStandards: {
      inputValidation: false,
      authenticationProtocols: false,
      dataEncryption: false,
      owaspPrevention: false,
      securityReviews: false
    },
    branchingStrategy: {
      featureBranchWorkflow: false,
      pullRequestProcesses: false,
      branchProtectionRules: false,
      mergeConflictResolution: false,
      releaseBranchManagement: false
    },
    infrastructure: {
      localDevelopmentEnvironments: false,
      containerization: false,
      environmentUniformity: false,
      endUserTestingEnvironments: false,
      environmentConfigurationManagement: false
    },
    testCoverage: {
      unitTestingFrameworks: false,
      integrationTesting: false,
      codeCoverageMetrics: false,
      testDrivenDevelopment: false,
      automatedRegressionTesting: false
    },
    readability: {
      linters: false,
      patterns: false,
      tasks: false,
      docs: false
    },
    reviewProcess: {
      architectureReview: false,
      designReview: false,
      codeReview: false,
      technicalReview: false
    },
    testStrategy: {
      unitTesting: false,
      integrationTesting: false,
      dataMockSynthetic: false
    },
    tools: {
      observability: false,
      featureFlagging: false,
      codeAnalysis: false,
      crashReporting: false,
      userAnalytics: false,
      alerting: false
    }
  });

  const [maintainabilityScores, setMaintainabilityScores] = React.useState({
    releasePipelineAutomation: 'M',
    sdkManagementComplexity: 'L',
    configurationManagement: 'M',
    nativeWebviewDataSharing: 'M',
    legacyCodeRemoval: 'L'
  });



  const handleCheckboxChange = (category, item) => {
    setAssessmentCriteria(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: !prev[category][item]
      }
    }));
  };

  const handleScoreChange = (item, value) => {
    setMaintainabilityScores(prev => ({
      ...prev,
      [item]: value
    }));
  };

  const toggleScoreExpansion = (key) => {
    setExpandedScores(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleScoreEdit = (key, value) => {
    setMaintainabilityScores(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const startScoreEdit = (key) => {
    setEditingScore(key);
  };

  const finishScoreEdit = () => {
    setEditingScore(null);
  };

  const expandAll = () => {
    const allKeys = ['releasePipelineAutomation', 'sdkManagementComplexity', 'configurationManagement', 'nativeWebviewDataSharing', 'legacyCodeRemoval'];
    setExpandedScores(
      allKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
  };

  const collapseAll = () => {
    setExpandedScores({});
  };

  // Calculate overall average score
  const getScoreValue = (score) => {
    switch(score) {
      case 'H': return 3;
      case 'M': return 2;
      case 'L': return 1;
      default: return 2;
    }
  };

  const getScoreColor = (score) => {
    switch(score) {
      case 'H': return '#28a745';
      case 'M': return '#ffc107';
      case 'L': return '#dc3545';
      case 'High': return '#28a745';
      case 'Medium': return '#ffc107';
      case 'Low': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getAverageScoreLabel = (averageValue) => {
    if (averageValue >= 2.5) return 'High';
    if (averageValue >= 1.5) return 'Medium';
    return 'Low';
  };

  const averageScore = Math.round(
    Object.values(maintainabilityScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
    Object.values(maintainabilityScores).length
  );

  const averageScoreLabel = getAverageScoreLabel(averageScore);
  return (
    <PageContainer>
      <BreadcrumbNav>
        <BackLink to="/">
          <FaArrowLeft /> Back to Home Page
        </BackLink>
      </BreadcrumbNav>
      
      <PageHeader>
        <IconContainer>
          <FaCodeBranch />
        </IconContainer>
        <HeaderContent>
          <PageTitle>Develop Phase</PageTitle>
          <PageDescription>
            Building robust, maintainable, and secure code for your application
          </PageDescription>
        </HeaderContent>
      </PageHeader>
      
      {/* AI Agent Demo/Information */}
      <AgentDemo 
        assessmentData={{
          criteria: assessmentCriteria,
          scores: { maintainability: maintainabilityScores }
        }}
      />
      
      {/* Assessment Criteria Section */}
      <AssessmentSection>
        <AssessmentTitle>
          <FaClipboardCheck />
          Assessment Criteria
        </AssessmentTitle>
        
        <SectionGrid>
          <Section>
            <SectionHeader>
              <SectionHeaderLeft>
                <SectionIcon color="develop"><FaCode /></SectionIcon>
                <SectionTitle>Dev Standards</SectionTitle>
              </SectionHeaderLeft>
            </SectionHeader>
            <SectionDescription>
              Core development practices and architectural standards for building robust, maintainable applications.
            </SectionDescription>
            <SectionContent>
              {Object.entries({
                architectureReview: 'Architecture review',
                branchingStrategy: 'Branching Strategy',
                codeAnalysis: 'Code Analysis',
                featureFlagging: 'Feature Flagging',
                observability: 'Observability'
              }).map(([key, label]) => (
                <CheckboxItem key={key}>
                  <Checkbox
                    type="checkbox"
                    checked={assessmentCriteria.branchingStrategy[key]}
                    onChange={() => handleCheckboxChange('branchingStrategy', key)}
                  />
                  <CheckboxLabel>{label}</CheckboxLabel>
                </CheckboxItem>
              ))}
            </SectionContent>
          </Section>
          
          <Section>
            <SectionHeader>
              <SectionHeaderLeft>
                <SectionIcon color="develop"><FaServer /></SectionIcon>
                <SectionTitle>Infra - Local | EUT</SectionTitle>
              </SectionHeaderLeft>
            </SectionHeader>
            <SectionDescription>
              IAC practices for local and provisioned environments for efficient workflows.
            </SectionDescription>
            <SectionContent>
              {Object.entries({
                localStack: 'Local Stack',
                containerization: 'Containerization',
                environmentUniformity: 'Environment uniformity',
                endUserTestingSetup: 'End-user testing setup',
                environmentConfigurationManagement: 'Configuration management'
              }).map(([key, label]) => (
                <CheckboxItem key={key}>
                  <Checkbox
                    type="checkbox"
                    checked={assessmentCriteria.infrastructure[key]}
                    onChange={() => handleCheckboxChange('infrastructure', key)}
                  />
                  <CheckboxLabel>{label}</CheckboxLabel>
                </CheckboxItem>
              ))}
            </SectionContent>
          </Section>
          
          <Section>
            <SectionHeader>
              <SectionIcon color="develop"><FaShieldAlt /></SectionIcon>
              <SectionTitle>Security Standards</SectionTitle>
            </SectionHeader>
            <SectionDescription>
              Security protocols and best practices to protect applications and data from vulnerabilities.
            </SectionDescription>
            <SectionContent>
              {Object.entries({
                inputValidation: 'Input validation and sanitization',
                authenticationProtocols: 'Secure authentication protocols',
                dataEncryption: 'Sensitive data encryption',
                owaspPrevention: 'OWASP vulnerability prevention',
                securityReviews: 'Security code reviews'
              }).map(([key, label]) => (
                <CheckboxItem key={key}>
                  <Checkbox
                    type="checkbox"
                    checked={assessmentCriteria.securityStandards[key]}
                    onChange={() => handleCheckboxChange('securityStandards', key)}
                  />
                  <CheckboxLabel>{label}</CheckboxLabel>
                </CheckboxItem>
              ))}
            </SectionContent>
          </Section>
          
          <Section>
            <SectionHeader>
              <SectionHeaderLeft>
                <SectionIcon color="develop"><FaCheckSquare /></SectionIcon>
                <SectionTitle>Code Quality</SectionTitle>
              </SectionHeaderLeft>
            </SectionHeader>
            <SectionDescription>
              Testing frameworks and quality assurance practices to ensure reliable, well-tested code.
            </SectionDescription>
            <SectionContent>
              {Object.entries({
                unitTestingFrameworks: 'Unit testing frameworks',
                integrationTesting: 'Integration testing',
                codeCoverageMetrics: 'Code coverage metrics',
                testDrivenDevelopment: 'Test-driven development',
                automatedRegressionTesting: 'Automated regression testing'
              }).map(([key, label]) => (
                <CheckboxItem key={key}>
                  <Checkbox
                    type="checkbox"
                    checked={assessmentCriteria.testCoverage[key]}
                    onChange={() => handleCheckboxChange('testCoverage', key)}
                  />
                  <CheckboxLabel>{label}</CheckboxLabel>
                </CheckboxItem>
              ))}
                        </SectionContent>
          </Section>
        </SectionGrid>
      </AssessmentSection>
      
      <AssessmentDivider />
      
      {/* Assessment Results Section */}
      <AssessmentSection>
        <AssessmentTitle>
          <FaExclamationTriangle />
          Assessment Results
        </AssessmentTitle>
        
        <SectionGrid>
          {/* Dev Standards Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaCode /></SectionIcon>
                  <SectionTitle>Dev Standards</SectionTitle>
                </SectionHeaderLeft>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
                Dev Standards assessment container - coming soon
              </div>
            </SectionContent>
          </Section>

          {/* Infra - Local | EUT Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaServer /></SectionIcon>
                  <SectionTitle>Infra - Local | EUT</SectionTitle>
                </SectionHeaderLeft>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
                Infrastructure assessment container - coming soon
              </div>
            </SectionContent>
          </Section>

          {/* Maintainability Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="security"><FaExclamationTriangle /></SectionIcon>
                  <SectionTitle>Maintainability</SectionTitle>
                </SectionHeaderLeft>
                <ExpandCollapseButtons>
                  <ExpandCollapseButton onClick={expandAll} title="Expand All">
                    <FaChevronDown />
                  </ExpandCollapseButton>
                  <ExpandCollapseButton onClick={collapseAll} title="Collapse All">
                    <FaChevronUp />
                  </ExpandCollapseButton>
                </ExpandCollapseButtons>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              {Object.entries({
                releasePipelineAutomation: {
                  label: 'Release Pipeline Automation',
                  trend: 'down',
                  risks: [
                    'App has planned releases every 2 weeks (10 business days)',
                    '3 of those 10 days are devoted to preparing for the release',
                    'Build Release Pipelines lack automation unit test coverage',
                    'Engineers must manually input the values for App and Build versions',
                    'Builds typically run for 30-40 minutes before complete'
                  ],
                  actions: [
                    'Implement automated CI/CD pipeline with unit test coverage',
                    'Add automated uploads to App/Play Stores',
                    'Reduce build time through parallel processing',
                    'Implement automated version management'
                  ],
                  correlations: ['sdkManagementComplexity', 'configurationManagement'],
                  timeline: [
                    { date: '2024-01-15', event: 'Identified manual release process bottleneck' },
                    { date: '2024-03-20', event: 'Started CI/CD pipeline planning' },
                    { date: '2024-05-01', event: 'Pilot automated testing implementation' }
                  ]
                },
                sdkManagementComplexity: {
                  label: 'SDK Management Complexity',
                  trend: 'stable',
                  risks: [
                    'Android has 103 SDKs; iOS has 44',
                    'Updating SDKs when required is risky',
                    'SDK updates typically introduce bugs',
                    'Complex dependency management across platforms'
                  ],
                  actions: [
                    'Implement automated SDK update testing',
                    'Create SDK compatibility matrix',
                    'Establish SDK update review process',
                    'Implement gradual rollout strategy'
                  ],
                  correlations: ['releasePipelineAutomation', 'configurationManagement'],
                  timeline: [
                    { date: '2024-02-10', event: 'Documented SDK inventory' },
                    { date: '2024-04-05', event: 'Created update testing framework' }
                  ]
                },
                configurationManagement: {
                  label: 'Configuration Management',
                  trend: 'down',
                  risks: [
                    'Configuration values prone to errors',
                    'Feature switches difficult to maintain',
                    'Challenges maintaining configs across environments',
                    'Manual configuration deployment process'
                  ],
                  actions: [
                    'Implement configuration as code',
                    'Create centralized configuration management',
                    'Add configuration validation and testing',
                    'Implement environment-specific config validation'
                  ],
                  correlations: ['releasePipelineAutomation', 'nativeWebviewDataSharing'],
                  timeline: [
                    { date: '2024-01-20', event: 'Identified configuration drift issues' },
                    { date: '2024-03-15', event: 'Started configuration audit' }
                  ]
                },
                nativeWebviewDataSharing: {
                  label: 'Native-WebView Data Sharing',
                  trend: 'up',
                  risks: [
                    'Increased complexity of data sharing between native and WebView',
                    'Maintaining source of truth for data is challenging',
                    'Synchronization issues between components',
                    'Complex state management across platforms'
                  ],
                  actions: [
                    'Implement unified data layer',
                    'Create data synchronization protocols',
                    'Add data validation and error handling',
                    'Implement data versioning strategy'
                  ],
                  correlations: ['configurationManagement', 'legacyCodeRemoval'],
                  timeline: [
                    { date: '2024-02-25', event: 'Identified data sharing complexity' },
                    { date: '2024-04-10', event: 'Started unified data layer design' }
                  ]
                },
                legacyCodeRemoval: {
                  label: 'Legacy Code Removal',
                  trend: 'stable',
                  risks: [
                    'Legacy code is intertwined with new implementation',
                    'Difficult to remove legacy code safely',
                    'Risk of breaking existing functionality',
                    'Complex dependency analysis required'
                  ],
                  actions: [
                    'Create comprehensive dependency mapping',
                    'Implement gradual legacy code removal strategy',
                    'Add extensive testing for each removal step',
                    'Establish rollback procedures'
                  ],
                  correlations: ['nativeWebviewDataSharing'],
                  timeline: [
                    { date: '2024-01-30', event: 'Started legacy code audit' },
                    { date: '2024-03-25', event: 'Created removal roadmap' }
                  ]
                }
              }).map(([key, item]) => (
                <ScoreItem key={key} score={maintainabilityScores[key]}>
                  <ScoreHeader onClick={() => toggleScoreExpansion(key)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ScoreLabel>{item.label}</ScoreLabel>
                      <TrendIndicator trend={item.trend}>
                        {item.trend === 'up' && <FaArrowUp />}
                        {item.trend === 'down' && <FaArrowDown />}
                        {item.trend === 'stable' && <FaMinus />}
                      </TrendIndicator>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {editingScore === key ? (
                        <select
                          value={maintainabilityScores[key]}
                          onChange={(e) => handleScoreEdit(key, e.target.value)}
                          onBlur={finishScoreEdit}
                          style={{
                            padding: '0.25rem 0.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.875rem',
                            backgroundColor: 'white',
                            color: getScoreColor(maintainabilityScores[key])
                          }}
                          autoFocus
                        >
                          <option value="H">H</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      ) : (
                        <ScoreValue 
                          score={maintainabilityScores[key]}
                          onClick={() => startScoreEdit(key)}
                          style={{ cursor: 'pointer', color: getScoreColor(maintainabilityScores[key]) }}
                        >
                          {maintainabilityScores[key]}
                        </ScoreValue>
                      )}
                      <FaEdit 
                        size={12} 
                        style={{ cursor: 'pointer', opacity: 0.7 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          startScoreEdit(key);
                        }}
                      />
                      <ExpandIcon expanded={expandedScores[key]}>
                        {expandedScores[key] ? <FaChevronDown /> : <FaChevronRight />}
                      </ExpandIcon>
                    </div>
                  </ScoreHeader>
                  {expandedScores[key] && (
                    <ScoreDetails expanded={expandedScores[key]}>
                      <StickyHeader>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <FaLightbulb style={{ color: '#ff851b' }} />
                          <strong>Maturity Factors</strong>
                        </div>
                      </StickyHeader>
                      <RiskBulletList>
                        {item.risks.map((risk, idx) => (
                          <RiskBulletItem key={idx}>{risk}</RiskBulletItem>
                        ))}
                      </RiskBulletList>
                      
                      <div style={{ marginTop: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <FaLightbulb style={{ color: '#2ecc40' }} />
                          <strong>Recommended Actions</strong>
                        </div>
                        {item.actions.map((action, idx) => (
                          <ActionItem key={idx}>
                            {action}
                          </ActionItem>
                        ))}
                      </div>
                      
                      <div style={{ marginTop: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <FaLink style={{ color: '#0074d9' }} />
                          <strong>Maturity Correlations</strong>
                        </div>
                        <CorrelationMatrix>
                          {item.correlations.map((correlation, idx) => (
                            <CorrelationItem key={idx}>
                              <FaLink size={10} />
                              {correlation.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </CorrelationItem>
                          ))}
                        </CorrelationMatrix>
                      </div>
                      
                      <div style={{ marginTop: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <FaClock style={{ color: '#85144b' }} />
                          <strong>Timeline</strong>
                        </div>
                        <TimelineView>
                          {item.timeline.map((event, idx) => (
                            <TimelineItem key={idx}>
                              <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                                {new Date(event.date).toLocaleDateString()}
                              </div>
                              <div>{event.event}</div>
                            </TimelineItem>
                          ))}
                        </TimelineView>
                      </div>
                    </ScoreDetails>
                  )}
                </ScoreItem>
              ))}
              
              <OverallScoreContainer score={averageScore}>
                <OverallScoreHeader>
                  Overall Maintainability
                </OverallScoreHeader>
                
                <OverallScoreValue score={averageScore} style={{ color: getScoreColor(averageScoreLabel) }}>
                  {averageScoreLabel}
                </OverallScoreValue>
              </OverallScoreContainer>
            </SectionContent>
          </Section>

          {/* Security Standards Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
                          <SectionHeader>
              <SectionHeaderLeft>
                <SectionIcon color="security"><FaShieldAlt /></SectionIcon>
                <SectionTitle>Security Standards</SectionTitle>
              </SectionHeaderLeft>
            </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
                Security Standards assessment container - coming soon
              </div>
            </SectionContent>
          </Section>

          {/* Code Quality Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaCheckSquare /></SectionIcon>
                  <SectionTitle>Code Quality</SectionTitle>
                </SectionHeaderLeft>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
                Code Quality assessment container - coming soon
              </div>
            </SectionContent>
          </Section>
        </SectionGrid>
      </AssessmentSection>
      
      {/* AI Agent Assistant */}
      <AgentAssistant 
        assessmentData={{
          criteria: assessmentCriteria,
          scores: { maintainability: maintainabilityScores },
          phase: 'develop',
          completionStatus: Object.values(assessmentCriteria).reduce((total, category) => {
            const completed = Object.values(category).filter(Boolean).length;
            const totalItems = Object.keys(category).length;
            return total + (totalItems > 0 ? completed / totalItems : 0);
          }, 0) / Object.keys(assessmentCriteria).length,
          lastUpdated: new Date().toISOString()
        }}
        phase="develop"
      />
    </PageContainer>
  );
}