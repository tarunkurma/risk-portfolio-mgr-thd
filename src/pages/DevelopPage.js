import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCodeBranch, FaArrowLeft, FaShieldAlt, FaCode, FaCheckSquare,
  FaExclamationTriangle, FaChevronDown, FaChevronRight,
  FaArrowUp, FaArrowDown, FaMinus, FaEdit, FaLightbulb, FaClock, FaLink,
  FaChevronUp, FaCogs
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  const [maintainabilityScores, setMaintainabilityScores] = React.useState({
    releaseCycleEfficiency: 'M',
    configurationManagement: 'M',
    sdkManagementComplexity: 'L',
    nativeWebviewDataSharing: 'M',
    buildPipelineAutomation: 'M',
    legacyCodeRemoval: 'L'
  });

  const [performanceScores, setPerformanceScores] = React.useState({
    appStartupPerformance: 'L',
    webViewLoadTime: 'M',
    coreWebVitals: 'L',
    cacheOptimization: 'M',
    networkBandwidthOptimization: 'L'
  });

  const [reliabilityScores, setReliabilityScores] = React.useState({
    iosCrashFreeRate: 'M',
    androidCrashFreeRate: 'M',
    crashReproducibility: 'L',
    crashImpactAnalysis: 'M',
    reliabilityTooling: 'M'
  });

  const [testingScores, setTestingScores] = React.useState({
    unitTestCoverage: 'M',
    endToEndTestFramework: 'M',
    testInfrastructure: 'M',
    crossTeamTestAccessibility: 'L',
    testToolOptimization: 'M'
  });

  const [technologyScores, setTechnologyScores] = React.useState({
    platformMigrationProgress: 'M',
    multiDeviceStrategy: 'L',
    modularArchitecture: 'L',
    codeHealthMetrics: 'M',
    technologyStackModernization: 'M'
  });

  const [developmentPracticesScores, setDevelopmentPracticesScores] = React.useState({
    cicdPipelineAutomation: 'L',
    codeQualityGates: 'L',
    buildArtifactManagement: 'M',
    manualProcessElimination: 'L',
    aiAssistedDevelopment: 'L'
  });





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
    const allKeys = ['releaseCycleEfficiency', 'configurationManagement', 'sdkManagementComplexity', 'nativeWebviewDataSharing', 'buildPipelineAutomation', 'legacyCodeRemoval'];
    setExpandedScores(
      allKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
  };

  const collapseAll = () => {
    setExpandedScores({});
  };

  const expandAllPerformance = () => {
    const allKeys = ['appStartupPerformance', 'webViewLoadTime', 'coreWebVitals', 'cacheOptimization', 'networkBandwidthOptimization'];
    setExpandedScores(prev => ({
      ...prev,
      ...allKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    }));
  };

  const collapseAllPerformance = () => {
    const performanceKeys = ['appStartupPerformance', 'webViewLoadTime', 'coreWebVitals', 'cacheOptimization', 'networkBandwidthOptimization'];
    setExpandedScores(prev => {
      const newState = { ...prev };
      performanceKeys.forEach(key => delete newState[key]);
      return newState;
    });
  };

  const expandAllReliability = () => {
    const allKeys = ['iosCrashFreeRate', 'androidCrashFreeRate', 'crashReproducibility', 'crashImpactAnalysis', 'reliabilityTooling'];
    setExpandedScores(prev => ({
      ...prev,
      ...allKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    }));
  };

  const collapseAllReliability = () => {
    const reliabilityKeys = ['iosCrashFreeRate', 'androidCrashFreeRate', 'crashReproducibility', 'crashImpactAnalysis', 'reliabilityTooling'];
    setExpandedScores(prev => {
      const newState = { ...prev };
      reliabilityKeys.forEach(key => delete newState[key]);
      return newState;
    });
  };

  const expandAllTesting = () => {
    const allKeys = ['unitTestCoverage', 'endToEndTestFramework', 'testInfrastructure', 'crossTeamTestAccessibility', 'testToolOptimization'];
    setExpandedScores(prev => ({
      ...prev,
      ...allKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    }));
  };

  const collapseAllTesting = () => {
    const testingKeys = ['unitTestCoverage', 'endToEndTestFramework', 'testInfrastructure', 'crossTeamTestAccessibility', 'testToolOptimization'];
    setExpandedScores(prev => {
      const newState = { ...prev };
      testingKeys.forEach(key => delete newState[key]);
      return newState;
    });
  };

  const expandAllTechnology = () => {
    const allKeys = ['platformMigrationProgress', 'multiDeviceStrategy', 'modularArchitecture', 'codeHealthMetrics', 'technologyStackModernization'];
    setExpandedScores(prev => ({
      ...prev,
      ...allKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    }));
  };

  const collapseAllTechnology = () => {
    const technologyKeys = ['platformMigrationProgress', 'multiDeviceStrategy', 'modularArchitecture', 'codeHealthMetrics', 'technologyStackModernization'];
    setExpandedScores(prev => {
      const newState = { ...prev };
      technologyKeys.forEach(key => delete newState[key]);
      return newState;
    });
  };

  const expandAllDevelopmentPractices = () => {
    const allKeys = ['cicdPipelineAutomation', 'codeQualityGates', 'buildArtifactManagement', 'manualProcessElimination', 'aiAssistedDevelopment'];
    setExpandedScores(prev => ({
      ...prev,
      ...allKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    }));
  };

  const collapseAllDevelopmentPractices = () => {
    const developmentPracticesKeys = ['cicdPipelineAutomation', 'codeQualityGates', 'buildArtifactManagement', 'manualProcessElimination', 'aiAssistedDevelopment'];
    setExpandedScores(prev => {
      const newState = { ...prev };
      developmentPracticesKeys.forEach(key => delete newState[key]);
      return newState;
    });
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
      
      
      {/* Assessment Results Section */}
      <AssessmentSection>
        <AssessmentTitle>
          <FaExclamationTriangle />
          Assessment Results
        </AssessmentTitle>
        
        <SectionGrid>
          {/* Maintainability Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaCogs /></SectionIcon>
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
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '4px solid #007bff', borderRadius: '0.25rem' }}>
                <strong>How might we make our app smaller, easier to maintain, with fewer SDKs, so that we can move faster without accruing tech debt?</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
                  The Home Depot would like to understand how the proposed approach would provide a more maintainable implementation that speeds up delivery time, improves development experience, and makes it easier to find and address bugs.
                </p>
              </div>
              
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', borderRadius: '0.25rem' }}>
                <strong>Current State Challenges</strong>
                <div style={{ marginTop: '0.75rem', display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Planned releases every 2 weeks (10 business days), 3 days devoted to release preparation
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Configuration values and feature switches prone to errors across environments
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • SDK complexity: Android 103 SDKs, iOS 44 SDKs - risky updates that introduce bugs
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Native-WebView data sharing complexity - maintaining source of truth increasingly challenging
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Build pipelines lack automation (30-40 min builds, manual uploads, manual version input)
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Legacy code intertwined with new modular implementation - difficult to remove safely
                  </div>
                </div>
              </div>

              {Object.entries({
                releaseCycleEfficiency: {
                  label: 'Release Cycle Efficiency',
                  trend: 'down',
                  currentState: 'App has planned releases every 2 weeks (10 business days). 3 of those 10 days are devoted to preparing for the release including: creating final build, running regression tests, bug hunts, uploading to App/Play Stores and awaiting approval.',
                  risks: [
                    '30% of release cycle (3/10 days) spent on manual release preparation',
                    'Manual build creation process introduces human error risk',
                    'Regression testing and bug hunts delay delivery timeline',
                    'Manual App/Play Store uploads and approval waiting creates bottlenecks'
                  ],
                  actions: [
                    'Implement automated build and release pipeline',
                    'Add automated regression testing and quality gates',
                    'Create automated App/Play Store upload processes',
                    'Establish continuous deployment with approval workflows'
                  ],
                  correlations: ['buildPipelineAutomation', 'configurationManagement'],
                  timeline: [
                    { date: '2024-01-15', event: 'Analyzed 2-week release cycle inefficiencies' },
                    { date: '2024-03-20', event: 'Started release automation planning' },
                    { date: '2024-05-01', event: 'Initiated automated pipeline proof of concept' }
                  ]
                },
                configurationManagement: {
                  label: 'Configuration Management',
                  trend: 'down',
                  currentState: 'Configuration values and feature switches are prone to errors. It has been a challenge to maintain these across all environments.',
                  risks: [
                    'Configuration values prone to errors across environments',
                    'Feature switches difficult to maintain consistently',
                    'Environment-specific configuration drift creates issues',
                    'Manual configuration deployment increases error likelihood'
                  ],
                  actions: [
                    'Implement configuration as code with version control',
                    'Create centralized configuration management system',
                    'Add automated configuration validation and testing',
                    'Establish environment parity monitoring and alerts'
                  ],
                  correlations: ['releaseCycleEfficiency', 'nativeWebviewDataSharing'],
                  timeline: [
                    { date: '2024-01-20', event: 'Identified configuration management as error source' },
                    { date: '2024-03-15', event: 'Started configuration audit across environments' }
                  ]
                },
                sdkManagementComplexity: {
                  label: 'SDK Management Complexity',
                  trend: 'stable',
                  currentState: 'Android has 103 SDKs; iOS has 44. Updating them when required is risky and typically introduces bugs.',
                  risks: [
                    'Android: 103 SDKs create significant maintenance overhead',
                    'iOS: 44 SDKs still substantial complexity to manage',
                    'SDK updates are risky and typically introduce bugs',
                    'Complex dependency management across platforms increases tech debt'
                  ],
                  actions: [
                    'Audit and reduce unnecessary SDK dependencies',
                    'Implement automated SDK update testing and validation',
                    'Create SDK compatibility matrix and update guidelines',
                    'Establish gradual SDK consolidation strategy'
                  ],
                  correlations: ['releaseCycleEfficiency', 'buildPipelineAutomation'],
                  timeline: [
                    { date: '2024-02-10', event: 'Documented complete SDK inventory (103 Android, 44 iOS)' },
                    { date: '2024-04-05', event: 'Started SDK reduction feasibility analysis' }
                  ]
                },
                nativeWebviewDataSharing: {
                  label: 'Native-WebView Data Sharing',
                  trend: 'up',
                  currentState: 'Increased complexity of data sharing and functionality between native and WebView. Maintaining a source of truth for the data has become an increasing challenge.',
                  risks: [
                    'Data sharing complexity between native and WebView components',
                    'Source of truth maintenance increasingly challenging',
                    'Synchronization issues cause data inconsistencies',
                    'Complex state management across hybrid architecture'
                  ],
                  actions: [
                    'Design unified data architecture with single source of truth',
                    'Implement standardized data sharing protocols',
                    'Add comprehensive data validation and error handling',
                    'Create data flow documentation and governance'
                  ],
                  correlations: ['configurationManagement', 'legacyCodeRemoval'],
                  timeline: [
                    { date: '2024-02-25', event: 'Identified data sharing as increasing complexity source' },
                    { date: '2024-04-10', event: 'Started unified data architecture design' }
                  ]
                },
                buildPipelineAutomation: {
                  label: 'Build Pipeline Automation',
                  trend: 'down',
                  currentState: 'Build Release Pipelines lack automation unit test coverage, code warning thresholds and automated uploads to App/Play Stores. Engineers must manually input values for App and Build versions. Builds typically run for 30-40 minutes before complete.',
                  risks: [
                    'No automation unit test coverage in build pipelines',
                    'Missing code warning thresholds and quality gates',
                    'Manual App and Build version input creates error risk',
                    '30-40 minute build times impact development velocity'
                  ],
                  actions: [
                    'Implement automated unit test coverage in build pipeline',
                    'Add code quality thresholds and automated warnings',
                    'Automate version management and App/Play Store uploads',
                    'Optimize build performance to reduce 30-40 minute runtime'
                  ],
                  correlations: ['releaseCycleEfficiency', 'sdkManagementComplexity'],
                  timeline: [
                    { date: '2024-01-30', event: 'Analyzed build pipeline automation gaps' },
                    { date: '2024-03-25', event: 'Started build optimization and automation planning' }
                  ]
                },
                legacyCodeRemoval: {
                  label: 'Legacy Code Removal',
                  trend: 'stable',
                  currentState: 'Legacy code is being replaced with a new modular implementation, however removing the legacy code is difficult as it is intertwined.',
                  risks: [
                    'Legacy code intertwined with new modular implementation',
                    'Difficult to remove legacy code safely without breaking functionality',
                    'Risk of introducing regressions during removal process',
                    'Complex dependency analysis required for safe removal'
                  ],
                  actions: [
                    'Create comprehensive dependency mapping for legacy components',
                    'Implement gradual legacy code removal with extensive testing',
                    'Establish clear boundaries between legacy and modular code',
                    'Develop rollback procedures for legacy removal steps'
                  ],
                  correlations: ['nativeWebviewDataSharing', 'buildPipelineAutomation'],
                  timeline: [
                    { date: '2024-01-30', event: 'Started legacy code intertwining analysis' },
                    { date: '2024-03-25', event: 'Created safe removal strategy framework' }
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
                          <strong>Current State</strong>
                        </div>
                      </StickyHeader>
                      <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '3px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                        {item.currentState}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaExclamationTriangle style={{ color: '#dc3545' }} />
                        <strong>Maintainability Challenges</strong>
                      </div>
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
                          <strong>Maintainability Correlations</strong>
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

          {/* Performance Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaClock /></SectionIcon>
                  <SectionTitle>Performance</SectionTitle>
                </SectionHeaderLeft>
                <ExpandCollapseButtons>
                  <ExpandCollapseButton onClick={expandAllPerformance} title="Expand All">
                    <FaChevronDown />
                  </ExpandCollapseButton>
                  <ExpandCollapseButton onClick={collapseAllPerformance} title="Collapse All">
                    <FaChevronUp />
                  </ExpandCollapseButton>
                </ExpandCollapseButtons>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', borderRadius: '0.25rem' }}>
                <strong>How might we measure and improve the true and perceived performance of the app for The Home Depot customers?</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
                  Customer feedback data tells us customers increasingly have a perception that our app is "slow" or "clunky".
                </p>
              </div>
              {Object.entries({
                appStartupPerformance: {
                  label: 'App Startup Performance',
                  trend: 'down',
                  currentState: 'App startup performance is dependent on network bandwidth',
                  risks: [
                    'Currently using embrace tooling (moments) to measure startup performance',
                    'Performance varies significantly based on network bandwidth',
                    'Startup times impact first impression of app quality',
                    'Need to optimize UX for low bandwidth usage'
                  ],
                  actions: [
                    'Implement app startup performance optimization strategies',
                    'Add progressive loading for critical first-screen content',
                    'Optimize initial bundle size and lazy load non-critical components',
                    'Implement offline-first startup experience'
                  ],
                  correlations: ['cacheOptimization', 'networkBandwidthOptimization'],
                  timeline: [
                    { date: '2024-01-15', event: 'Identified startup performance as customer pain point' },
                    { date: '2024-03-20', event: 'Implemented embrace tooling for measurement' },
                    { date: '2024-05-01', event: 'Started bandwidth optimization initiative' }
                  ]
                },
                webViewLoadTime: {
                  label: 'WebView Load Time',
                  trend: 'stable',
                  currentState: 'Load time for WebViews is WebView container load to WebView complete callback. Load time for Native screens is Native view container load to first interactable native element load time',
                  risks: [
                    'WebView container load to complete callback measurement may not reflect user experience',
                    'Native-WebView bridge communication delays',
                    'WebView initialization overhead impacts perceived performance',
                    'Inconsistent performance between WebView and native screens'
                  ],
                  actions: [
                    'Optimize WebView initialization and pre-loading',
                    'Implement WebView pooling for faster screen transitions',
                    'Enhance native-WebView bridge for faster data communication',
                    'Add progressive loading indicators for better perceived performance'
                  ],
                  correlations: ['cacheOptimization', 'appStartupPerformance'],
                  timeline: [
                    { date: '2024-02-10', event: 'Established WebView performance measurement baseline' },
                    { date: '2024-04-05', event: 'Started WebView bridge optimization' }
                  ]
                },
                coreWebVitals: {
                  label: 'Core Web Vitals (CWV)',
                  trend: 'down',
                  currentState: 'Core web vitals are measured against mobile web (on Android only)',
                  risks: [
                    'CWV measurements only on Android, no iOS coverage',
                    'WebView performance may not match mobile web expectations',
                    'Goal is to have WebViews with the same perceived performance as native',
                    'Missing comprehensive performance monitoring across platforms'
                  ],
                  actions: [
                    'Expand CWV measurement to iOS WebViews',
                    'Implement comprehensive performance monitoring framework',
                    'Optimize WebView rendering to meet native performance standards',
                    'Create performance budgets and alerts for CWV metrics'
                  ],
                  correlations: ['webViewLoadTime', 'cacheOptimization'],
                  timeline: [
                    { date: '2024-01-20', event: 'Started CWV measurement on Android WebViews' },
                    { date: '2024-03-15', event: 'Identified performance gap vs native' }
                  ]
                },
                cacheOptimization: {
                  label: 'Cache Optimization',
                  trend: 'up',
                  currentState: 'We cache select WebView static files and use native rendering UX to improve perceived performance. We manage a standard cache validation TTL (1-3 hours), but would like it to be smarter',
                  risks: [
                    'Standard cache TTL (1-3 hours) is not optimized for content types',
                    'Limited WebView caching to select screens only',
                    'Cache invalidation strategy needs improvement',
                    'Want to expand cached WebViews to more screens'
                  ],
                  actions: [
                    'Implement intelligent cache TTL based on content type and update frequency',
                    'Expand WebView caching to additional screens',
                    'Add cache preloading for frequently accessed content',
                    'Implement cache versioning and smart invalidation'
                  ],
                  correlations: ['webViewLoadTime', 'appStartupPerformance'],
                  timeline: [
                    { date: '2024-02-25', event: 'Implemented selective WebView static file caching' },
                    { date: '2024-04-10', event: 'Started smart cache TTL development' }
                  ]
                },
                networkBandwidthOptimization: {
                  label: 'Network Bandwidth Optimization',
                  trend: 'stable',
                  currentState: 'We want to optimize UX for low bandwidth usage. We have a native to JavaScript WebView bridge to communicate data that can be leveraged to improve performance',
                  risks: [
                    'Poor user experience on low bandwidth connections',
                    'Native-WebView bridge underutilized for performance optimization',
                    'Network requests not optimized for mobile conditions',
                    'Missing adaptive content delivery based on connection quality'
                  ],
                  actions: [
                    'Implement adaptive content delivery based on network conditions',
                    'Leverage native-WebView bridge for efficient data sharing',
                    'Add request batching and prioritization',
                    'Implement progressive image loading and compression'
                  ],
                  correlations: ['appStartupPerformance', 'cacheOptimization'],
                  timeline: [
                    { date: '2024-01-30', event: 'Identified low bandwidth UX issues' },
                    { date: '2024-03-25', event: 'Started native-WebView bridge optimization' }
                  ]
                }
              }).map(([key, item]) => (
                <ScoreItem key={key} score={performanceScores[key]}>
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
                          value={performanceScores[key]}
                          onChange={(e) => {
                            setPerformanceScores(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }));
                          }}
                          onBlur={finishScoreEdit}
                          style={{
                            padding: '0.25rem 0.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.875rem',
                            backgroundColor: 'white',
                            color: getScoreColor(performanceScores[key])
                          }}
                          autoFocus
                        >
                          <option value="H">H</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      ) : (
                        <ScoreValue 
                          score={performanceScores[key]}
                          onClick={() => startScoreEdit(key)}
                          style={{ cursor: 'pointer', color: getScoreColor(performanceScores[key]) }}
                        >
                          {performanceScores[key]}
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
                          <strong>Current State</strong>
                        </div>
                      </StickyHeader>
                      <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '3px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                        {item.currentState}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaExclamationTriangle style={{ color: '#dc3545' }} />
                        <strong>Performance Challenges</strong>
                      </div>
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
                          <strong>Performance Correlations</strong>
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
              
              <OverallScoreContainer score={Math.round(
                Object.values(performanceScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                Object.values(performanceScores).length
              )}>
                <OverallScoreHeader>
                  Overall Performance
                </OverallScoreHeader>
                
                <OverallScoreValue score={Math.round(
                  Object.values(performanceScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(performanceScores).length
                )} style={{ color: getScoreColor(getAverageScoreLabel(
                  Object.values(performanceScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(performanceScores).length
                )) }}>
                  {getAverageScoreLabel(
                    Object.values(performanceScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                    Object.values(performanceScores).length
                  )}
                </OverallScoreValue>
                
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '0.25rem', fontSize: '0.85rem' }}>
                  <strong>Assessment Framework Goal:</strong>
                  <p style={{ margin: '0.25rem 0 0 0' }}>
                    Seeking recommendations for a best-in-class app performance measurement framework and tooling for both WebView and native needs, considering organizational and operational complexity.
                  </p>
                </div>
              </OverallScoreContainer>
            </SectionContent>
          </Section>

          {/* Reliability Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaShieldAlt /></SectionIcon>
                  <SectionTitle>Reliability</SectionTitle>
                </SectionHeaderLeft>
                <ExpandCollapseButtons>
                  <ExpandCollapseButton onClick={expandAllReliability} title="Expand All">
                    <FaChevronDown />
                  </ExpandCollapseButton>
                  <ExpandCollapseButton onClick={collapseAllReliability} title="Collapse All">
                    <FaChevronUp />
                  </ExpandCollapseButton>
                </ExpandCollapseButtons>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(40, 167, 69, 0.1)', borderLeft: '4px solid #28a745', borderRadius: '0.25rem' }}>
                <strong>Current Reliability Tracking</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
                  We currently track this metric via Embrace tooling.
                </p>
                <div style={{ marginTop: '0.75rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(0, 123, 255, 0.1)', borderRadius: '0.25rem' }}>
                    <strong>iOS:</strong> 99.85% current (Goal: 99.9% for 2024)
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '0.25rem' }}>
                    <strong>Android:</strong> 99.8% current (Goal: 99.85% for 2024)
                  </div>
                </div>
              </div>
              {Object.entries({
                iosCrashFreeRate: {
                  label: 'iOS Crash-Free Rate',
                  trend: 'up',
                  currentState: 'Currently at 99.85% with a goal of 99.9% for 2024. Tracked via Embrace tooling.',
                  risks: [
                    'Currently at 99.85%, need to improve by 0.05% to meet 2024 goal',
                    'Small margin for error - even minor crashes impact SLA significantly',
                    'iOS-specific crashes may be harder to reproduce in development',
                    'Device fragmentation and iOS version compatibility issues'
                  ],
                  actions: [
                    'Implement proactive crash prevention strategies',
                    'Enhanced iOS-specific testing across device variants',
                    'Improve crash reproduction tools and processes',
                    'Create automated crash trend analysis and alerting'
                  ],
                  correlations: ['androidCrashFreeRate', 'crashReproducibility'],
                  timeline: [
                    { date: '2024-01-15', event: 'Set 99.9% crash-free rate goal for iOS' },
                    { date: '2024-03-20', event: 'Implemented enhanced iOS crash monitoring' },
                    { date: '2024-05-01', event: 'Started proactive crash prevention initiatives' }
                  ]
                },
                androidCrashFreeRate: {
                  label: 'Android Crash-Free Rate',
                  trend: 'stable',
                  currentState: 'Currently at 99.8% with a goal of 99.85% for 2024. Tracked via Embrace tooling.',
                  risks: [
                    'Currently at 99.8%, need to improve by 0.05% to meet 2024 goal',
                    'Android device fragmentation creates more crash scenarios',
                    'OS version compatibility across wide range of devices',
                    'Hardware variations impact app stability'
                  ],
                  actions: [
                    'Enhance Android device testing coverage',
                    'Implement crash clustering and root cause analysis',
                    'Develop Android-specific stability improvements',
                    'Create device-specific crash monitoring dashboards'
                  ],
                  correlations: ['iosCrashFreeRate', 'crashImpactAnalysis'],
                  timeline: [
                    { date: '2024-02-10', event: 'Set 99.85% crash-free rate goal for Android' },
                    { date: '2024-04-05', event: 'Enhanced Android fragmentation testing' }
                  ]
                },
                crashReproducibility: {
                  label: 'Crash Reproducibility',
                  trend: 'down',
                  currentState: 'Many crashes are difficult to reproduce, making root cause analysis and fixes challenging.',
                  risks: [
                    'Difficult to reproduce crashes lead to longer resolution times',
                    'Unable to validate fixes without reproduction',
                    'Customer impact continues while investigating elusive crashes',
                    'Engineering time wasted on unreproducible issues'
                  ],
                  actions: [
                    'Implement enhanced crash context capture (device state, user journey)',
                    'Create crash reproduction environment with varied device configurations',
                    'Add user session replay for crash scenarios',
                    'Develop crash simulation and testing frameworks'
                  ],
                  correlations: ['iosCrashFreeRate', 'androidCrashFreeRate'],
                  timeline: [
                    { date: '2024-01-20', event: 'Identified reproducibility as major challenge' },
                    { date: '2024-03-15', event: 'Started enhanced crash context capture project' }
                  ]
                },
                crashImpactAnalysis: {
                  label: 'Crash Impact Analysis',
                  trend: 'up',
                  currentState: 'A typical crash rarely impacts more than 0.05% of customers, but collectively all crashes add up to a crash-free rate below SLAs.',
                  risks: [
                    'Individual crashes seem minor but collectively miss SLA targets',
                    'Cumulative impact of small crashes creates significant reliability gap',
                    'Difficult to prioritize which crashes to fix first',
                    'Customer experience degradation from aggregate crash frequency'
                  ],
                  actions: [
                    'Implement crash impact scoring and prioritization matrix',
                    'Create cumulative impact dashboards and alerts',
                    'Develop crash frequency vs impact analysis tools',
                    'Establish crash remediation prioritization framework'
                  ],
                  correlations: ['androidCrashFreeRate', 'reliabilityTooling'],
                  timeline: [
                    { date: '2024-02-25', event: 'Analyzed cumulative crash impact on SLA' },
                    { date: '2024-04-10', event: 'Started crash prioritization framework development' }
                  ]
                },
                reliabilityTooling: {
                  label: 'Reliability Tooling',
                  trend: 'stable',
                  currentState: 'Currently using Embrace for reliability tracking. Seeking recommendations for best-in-class toolset.',
                  risks: [
                    'Single tool dependency may not provide comprehensive coverage',
                    'May be missing advanced reliability measurement capabilities',
                    'Limited integration with development and deployment workflows',
                    'Potential gaps in proactive reliability monitoring'
                  ],
                  actions: [
                    'Evaluate comprehensive reliability tooling options',
                    'Implement multi-layered reliability monitoring approach',
                    'Integrate reliability metrics into CI/CD pipeline',
                    'Create custom reliability dashboards and alerting'
                  ],
                  correlations: ['crashImpactAnalysis', 'crashReproducibility'],
                  timeline: [
                    { date: '2024-01-30', event: 'Started evaluation of reliability tooling options' },
                    { date: '2024-03-25', event: 'Initiated best-in-class tooling research' }
                  ]
                }
              }).map(([key, item]) => (
                <ScoreItem key={key} score={reliabilityScores[key]}>
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
                          value={reliabilityScores[key]}
                          onChange={(e) => {
                            setReliabilityScores(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }));
                          }}
                          onBlur={finishScoreEdit}
                          style={{
                            padding: '0.25rem 0.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.875rem',
                            backgroundColor: 'white',
                            color: getScoreColor(reliabilityScores[key])
                          }}
                          autoFocus
                        >
                          <option value="H">H</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      ) : (
                        <ScoreValue 
                          score={reliabilityScores[key]}
                          onClick={() => startScoreEdit(key)}
                          style={{ cursor: 'pointer', color: getScoreColor(reliabilityScores[key]) }}
                        >
                          {reliabilityScores[key]}
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
                          <strong>Current State</strong>
                        </div>
                      </StickyHeader>
                      <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '3px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                        {item.currentState}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaExclamationTriangle style={{ color: '#dc3545' }} />
                        <strong>Reliability Challenges</strong>
                      </div>
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
                          <strong>Reliability Correlations</strong>
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
              
              <OverallScoreContainer score={Math.round(
                Object.values(reliabilityScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                Object.values(reliabilityScores).length
              )}>
                <OverallScoreHeader>
                  Overall Reliability
                </OverallScoreHeader>
                
                <OverallScoreValue score={Math.round(
                  Object.values(reliabilityScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(reliabilityScores).length
                )} style={{ color: getScoreColor(getAverageScoreLabel(
                  Object.values(reliabilityScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(reliabilityScores).length
                )) }}>
                  {getAverageScoreLabel(
                    Object.values(reliabilityScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                    Object.values(reliabilityScores).length
                  )}
                </OverallScoreValue>
                
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.85rem' }}>
                  <strong>Tooling Assessment Goal:</strong>
                  <p style={{ margin: '0.25rem 0 0 0' }}>
                    Seeking recommendations for what a best-in-class toolset for reliability measurement would look like, beyond current Embrace implementation.
                  </p>
                </div>
              </OverallScoreContainer>
            </SectionContent>
          </Section>

          {/* Testing Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaCheckSquare /></SectionIcon>
                  <SectionTitle>Testing</SectionTitle>
                </SectionHeaderLeft>
                <ExpandCollapseButtons>
                  <ExpandCollapseButton onClick={expandAllTesting} title="Expand All">
                    <FaChevronDown />
                  </ExpandCollapseButton>
                  <ExpandCollapseButton onClick={collapseAllTesting} title="Collapse All">
                    <FaChevronUp />
                  </ExpandCollapseButton>
                </ExpandCollapseButtons>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '4px solid #007bff', borderRadius: '0.25rem' }}>
                <strong>What best practice methodologies and technologies should be put in place for ensuring quality in app?</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
                  How can we make creating, managing, and running tests as easy as possible for both the app team and other product teams who deliver capabilities through app?
                </p>
              </div>
              
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(40, 167, 69, 0.1)', borderLeft: '4px solid #28a745', borderRadius: '0.25rem' }}>
                <strong>Current Testing Infrastructure</strong>
                <div style={{ marginTop: '0.75rem', display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(0, 123, 255, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    <strong>Unit Tests:</strong> 80% branch coverage requirement - Android (JUnit), iOS (XCTest)
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    <strong>E2E Tests:</strong> Bugbear (WebDriverIO wrapper) for browser/app test reusability
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    <strong>Testbed:</strong> SauceLabs with virtual & physical devices
                  </div>
                </div>
              </div>

              {Object.entries({
                unitTestCoverage: {
                  label: 'Unit Test Coverage & Standards',
                  trend: 'up',
                  currentState: 'All new modules are expected to instrument a minimum of 80% branch unit test coverage. Android utilizes JUnit and iOS uses the XCTest framework.',
                  risks: [
                    '80% coverage requirement may not ensure quality if tests are not well-designed',
                    'Different frameworks (JUnit vs XCTest) create maintenance overhead',
                    'Branch coverage alone may miss edge cases and integration scenarios',
                    'Enforcement and monitoring of coverage standards needs improvement'
                  ],
                  actions: [
                    'Implement automated coverage reporting and enforcement in CI/CD',
                    'Add mutation testing to validate test quality beyond coverage metrics',
                    'Create shared testing standards and best practices across platforms',
                    'Implement test quality gates with meaningful assertions validation'
                  ],
                  correlations: ['endToEndTestFramework', 'crossTeamTestAccessibility'],
                  timeline: [
                    { date: '2024-01-15', event: 'Established 80% branch coverage requirement' },
                    { date: '2024-03-20', event: 'Implemented coverage monitoring tools' },
                    { date: '2024-05-01', event: 'Started test quality improvement initiative' }
                  ]
                },
                endToEndTestFramework: {
                  label: 'End-to-End Test Framework (Bugbear)',
                  trend: 'stable',
                  currentState: 'Regression Tests are written in The Home Depot custom tool called Bugbear. Bugbear is a wrapper around WebDriverIO that simplifies test writing, improves traceability, provides standardized configs, and enables test reusability between browser and app.',
                  risks: [
                    'Custom tool dependency creates maintenance burden and learning curve',
                    'Limited community support compared to mainstream testing frameworks',
                    'Potential technical debt if WebDriverIO evolves faster than Bugbear wrapper',
                    'May miss out on newer testing technologies and methodologies'
                  ],
                  actions: [
                    'Evaluate modern testing frameworks against Bugbear reusability benefits',
                    'Create comprehensive Bugbear documentation and training materials',
                    'Implement Bugbear version management and upgrade planning',
                    'Assess hybrid approach with multiple testing tools for different scenarios'
                  ],
                  correlations: ['testInfrastructure', 'testToolOptimization'],
                  timeline: [
                    { date: '2024-02-10', event: 'Completed Bugbear vs alternatives evaluation' },
                    { date: '2024-04-05', event: 'Enhanced Bugbear documentation and training' }
                  ]
                },
                testInfrastructure: {
                  label: 'Test Infrastructure (SauceLabs)',
                  trend: 'up',
                  currentState: 'The Home Depot currently utilizes SauceLabs to run End-to-End tests with a combination of virtual devices, public & private physical devices hosted in SauceLabs cloud.',
                  risks: [
                    'Cloud testing dependency may impact test reliability and speed',
                    'Cost scaling with increased test volume and device coverage',
                    'Limited control over test environment configuration and debugging',
                    'Potential vendor lock-in with SauceLabs platform'
                  ],
                  actions: [
                    'Implement hybrid testing infrastructure with local device farms',
                    'Optimize SauceLabs usage and cost management strategies',
                    'Evaluate alternative device cloud providers and capabilities',
                    'Create infrastructure monitoring and performance optimization'
                  ],
                  correlations: ['endToEndTestFramework', 'crossTeamTestAccessibility'],
                  timeline: [
                    { date: '2024-01-20', event: 'Expanded SauceLabs device coverage' },
                    { date: '2024-03-15', event: 'Implemented test infrastructure monitoring' }
                  ]
                },
                crossTeamTestAccessibility: {
                  label: 'Cross-Team Test Accessibility',
                  trend: 'down',
                  currentState: 'Need to make creating, managing, and running tests as easy as possible for both the app team and other product teams who deliver capabilities through the app.',
                  risks: [
                    'Complex test setup barriers prevent other product teams from contributing',
                    'Lack of self-service testing capabilities creates bottlenecks',
                    'Inconsistent testing practices across different product teams',
                    'Knowledge silos limit test maintenance and collaboration'
                  ],
                  actions: [
                    'Create self-service testing platform with guided workflows',
                    'Implement test-as-code with version control and collaboration features',
                    'Develop testing training programs and documentation for product teams',
                    'Build automated test generation tools and templates'
                  ],
                  correlations: ['unitTestCoverage', 'testToolOptimization'],
                  timeline: [
                    { date: '2024-02-25', event: 'Identified cross-team testing challenges' },
                    { date: '2024-04-10', event: 'Started self-service testing platform development' }
                  ]
                },
                testToolOptimization: {
                  label: 'Test Tool Evaluation & Optimization',
                  trend: 'stable',
                  currentState: 'There may be scenarios where reusability of tests may not be necessary or desired, and having a combination of tools may be preferable. There may also be better tools available that we are not aware of and didnt review.',
                  risks: [
                    'Over-reliance on single testing approach may miss optimal solutions',
                    'Lack of systematic evaluation of new testing technologies',
                    'Missing specialized tools for specific testing scenarios',
                    'Potential inefficiencies from suboptimal tool selection'
                  ],
                  actions: [
                    'Conduct comprehensive testing tool landscape analysis',
                    'Implement tool selection framework based on specific use cases',
                    'Create proof-of-concept evaluations for promising new tools',
                    'Develop hybrid testing strategy with multiple complementary tools'
                  ],
                  correlations: ['endToEndTestFramework', 'crossTeamTestAccessibility'],
                  timeline: [
                    { date: '2024-01-30', event: 'Started comprehensive testing tool research' },
                    { date: '2024-03-25', event: 'Initiated tool evaluation framework development' }
                  ]
                }
              }).map(([key, item]) => (
                <ScoreItem key={key} score={testingScores[key]}>
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
                          value={testingScores[key]}
                          onChange={(e) => {
                            setTestingScores(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }));
                          }}
                          onBlur={finishScoreEdit}
                          style={{
                            padding: '0.25rem 0.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.875rem',
                            backgroundColor: 'white',
                            color: getScoreColor(testingScores[key])
                          }}
                          autoFocus
                        >
                          <option value="H">H</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      ) : (
                        <ScoreValue 
                          score={testingScores[key]}
                          onClick={() => startScoreEdit(key)}
                          style={{ cursor: 'pointer', color: getScoreColor(testingScores[key]) }}
                        >
                          {testingScores[key]}
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
                          <strong>Current State</strong>
                        </div>
                      </StickyHeader>
                      <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '3px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                        {item.currentState}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaExclamationTriangle style={{ color: '#dc3545' }} />
                        <strong>Testing Challenges</strong>
                      </div>
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
                          <strong>Testing Correlations</strong>
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
              
              <OverallScoreContainer score={Math.round(
                Object.values(testingScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                Object.values(testingScores).length
              )}>
                <OverallScoreHeader>
                  Overall Testing Maturity
                </OverallScoreHeader>
                
                <OverallScoreValue score={Math.round(
                  Object.values(testingScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(testingScores).length
                )} style={{ color: getScoreColor(getAverageScoreLabel(
                  Object.values(testingScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(testingScores).length
                )) }}>
                  {getAverageScoreLabel(
                    Object.values(testingScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                    Object.values(testingScores).length
                  )}
                </OverallScoreValue>
                
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderRadius: '0.25rem', fontSize: '0.85rem' }}>
                  <strong>Testing Strategy Goals:</strong>
                  <div style={{ margin: '0.5rem 0 0 0' }}>
                    <div>• Ensure quality through best practice methodologies and technologies</div>
                    <div>• Make testing easy for app team and other product teams</div>
                    <div>• Evaluate combination of tools beyond current Bugbear/SauceLabs setup</div>
                  </div>
                </div>
              </OverallScoreContainer>
            </SectionContent>
          </Section>

          {/* Technology Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaCode /></SectionIcon>
                  <SectionTitle>Technology</SectionTitle>
                </SectionHeaderLeft>
                <ExpandCollapseButtons>
                  <ExpandCollapseButton onClick={expandAllTechnology} title="Expand All">
                    <FaChevronDown />
                  </ExpandCollapseButton>
                  <ExpandCollapseButton onClick={collapseAllTechnology} title="Collapse All">
                    <FaChevronUp />
                  </ExpandCollapseButton>
                </ExpandCollapseButtons>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '4px solid #007bff', borderRadius: '0.25rem' }}>
                <strong>How should we evolve and/or rebuild our technology and architecture to achieve and maintain a modern approach?</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
                  The Home Depot is interested in providing engaging experiences across all devices (phone, tablet, watch, auto, etc.) with flexibility and speed to market.
                </p>
              </div>
              
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', borderRadius: '0.25rem' }}>
                <strong>Current Technology Migration Status</strong>
                <div style={{ marginTop: '0.75rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderRadius: '0.25rem' }}>
                    <strong>iOS Progress:</strong>
                    <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      • Swift: 63%, Objective-C: 26%, Other: 11%
                      <br />• SwiftUI: 15%, UIKit: 85%
                      <br />• iPhone primary, iPad renders iPhone app
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '0.25rem' }}>
                    <strong>Android Progress:</strong>
                    <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      • Kotlin: 59%, Java: 29%, Other: 12%
                      <br />• Jetpack Compose: 7%, XML Fragments: 93%
                      <br />• Phone primary, no tablet/foldable support
                    </div>
                  </div>
                </div>
              </div>

              {Object.entries({
                platformMigrationProgress: {
                  label: 'Platform Migration Progress',
                  trend: 'up',
                  currentState: 'iOS migrating to Swift (63% complete) and SwiftUI (15% complete). Android migrating to Kotlin (59% complete) and Jetpack Compose (7% complete). Heavy utilization of WebViews with openness to technical direction changes.',
                  risks: [
                    'iOS: 37% still Objective-C, 85% still UIKit - significant legacy code remains',
                    'Android: 41% still Java, 93% still XML Fragments - early in UI modernization',
                    'Mixed technology stack creates maintenance complexity and knowledge silos',
                    'WebView dependency may limit performance and native platform capabilities'
                  ],
                  actions: [
                    'Accelerate Swift and Kotlin migration with automated conversion tools',
                    'Create SwiftUI and Jetpack Compose adoption roadmap with training programs',
                    'Implement mixed codebase management strategies and coding standards',
                    'Evaluate WebView vs native implementation trade-offs for key user journeys'
                  ],
                  correlations: ['technologyStackModernization', 'modularArchitecture'],
                  timeline: [
                    { date: '2024-01-15', event: 'Established migration baselines and targets' },
                    { date: '2024-03-20', event: 'Launched Swift/Kotlin training programs' },
                    { date: '2024-05-01', event: 'Started SwiftUI/Jetpack Compose pilot projects' }
                  ]
                },
                multiDeviceStrategy: {
                  label: 'Multi-Device Strategy & Support',
                  trend: 'down',
                  currentState: 'iPhone support primarily; iPad renders iPhone app with unfriendly UI; no Apple Watch app. Android phone support primarily; no explicit support for foldables; removed tablet download capability.',
                  risks: [
                    'Limited device support misses growing tablet, watch, and auto markets',
                    'iPad experience renders iPhone app creating poor user experience',
                    'No support for emerging form factors (foldables, automotive) limits future growth',
                    'Device-specific optimization opportunities are being missed'
                  ],
                  actions: [
                    'Develop comprehensive multi-device strategy and roadmap',
                    'Create responsive design system for tablets and large screens',
                    'Evaluate Apple Watch, Android Watch, and automotive platform opportunities',
                    'Implement adaptive UI frameworks for emerging form factors'
                  ],
                  correlations: ['modularArchitecture', 'technologyStackModernization'],
                  timeline: [
                    { date: '2024-02-10', event: 'Identified multi-device strategy gap' },
                    { date: '2024-04-05', event: 'Started device market opportunity analysis' }
                  ]
                },
                modularArchitecture: {
                  label: 'Modular Architecture Implementation',
                  trend: 'stable',
                  currentState: 'Future implementation should be modular to support reusability, collaboration, maintenance, readability, testing, faster fixes, easier updates, and refactoring. Isolated features as importable products adhering to cybersecurity requirements.',
                  risks: [
                    'Current monolithic architecture limits reusability and collaboration',
                    'Lack of clear module boundaries creates tight coupling and maintenance issues',
                    'No standardized approach for creating and sharing isolated feature modules',
                    'Cybersecurity requirements compliance across modular components needs framework'
                  ],
                  actions: [
                    'Design and implement modular architecture framework with clear boundaries',
                    'Create module development standards and reusability guidelines',
                    'Implement feature-as-a-product methodology with import/export capabilities',
                    'Establish cybersecurity compliance framework for modular components'
                  ],
                  correlations: ['codeHealthMetrics', 'platformMigrationProgress'],
                  timeline: [
                    { date: '2024-01-20', event: 'Defined modular architecture requirements and benefits' },
                    { date: '2024-03-15', event: 'Started modular framework design phase' }
                  ]
                },
                codeHealthMetrics: {
                  label: 'Code Health & Maintainability Metrics',
                  trend: 'up',
                  currentState: 'Need to establish measures to understand code health. Focus on making app smaller and more modular with clear separation of responsibilities for enhanced readability and maintainability.',
                  risks: [
                    'Lack of standardized code health metrics prevents quality assessment',
                    'App size and complexity growth without measurement and control',
                    'No visibility into technical debt accumulation and impact',
                    'Mixed technology stack makes health assessment challenging'
                  ],
                  actions: [
                    'Implement comprehensive code health monitoring and metrics dashboard',
                    'Establish app size budgets and modular complexity measurements',
                    'Create technical debt tracking and remediation prioritization system',
                    'Add automated code quality gates and continuous health monitoring'
                  ],
                  correlations: ['modularArchitecture', 'platformMigrationProgress'],
                  timeline: [
                    { date: '2024-02-25', event: 'Identified need for code health measurement framework' },
                    { date: '2024-04-10', event: 'Started code metrics and monitoring tool evaluation' }
                  ]
                },
                technologyStackModernization: {
                  label: 'Technology Stack Modernization',
                  trend: 'up',
                  currentState: 'Open to considering changes in technical direction to achieve goals. Heavy WebView utilization with migration to Swift/SwiftUI and Kotlin/Jetpack Compose in progress.',
                  risks: [
                    'WebView dependency may limit performance and platform-specific capabilities',
                    'Technology choices may not align with multi-device strategy requirements',
                    'Legacy stack components create maintenance burden and slow development',
                    'Rapid technology evolution requires continuous evaluation and adaptation'
                  ],
                  actions: [
                    'Conduct comprehensive technology stack evaluation against multi-device goals',
                    'Create technology roadmap balancing WebView benefits with native capabilities',
                    'Implement technology decision framework for future stack choices',
                    'Establish continuous technology monitoring and adoption processes'
                  ],
                  correlations: ['multiDeviceStrategy', 'platformMigrationProgress'],
                  timeline: [
                    { date: '2024-01-30', event: 'Started comprehensive technology stack assessment' },
                    { date: '2024-03-25', event: 'Initiated technology roadmap development' }
                  ]
                }
              }).map(([key, item]) => (
                <ScoreItem key={key} score={technologyScores[key]}>
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
                          value={technologyScores[key]}
                          onChange={(e) => {
                            setTechnologyScores(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }));
                          }}
                          onBlur={finishScoreEdit}
                          style={{
                            padding: '0.25rem 0.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.875rem',
                            backgroundColor: 'white',
                            color: getScoreColor(technologyScores[key])
                          }}
                          autoFocus
                        >
                          <option value="H">H</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      ) : (
                        <ScoreValue 
                          score={technologyScores[key]}
                          onClick={() => startScoreEdit(key)}
                          style={{ cursor: 'pointer', color: getScoreColor(technologyScores[key]) }}
                        >
                          {technologyScores[key]}
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
                          <strong>Current State</strong>
                        </div>
                      </StickyHeader>
                      <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '3px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                        {item.currentState}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaExclamationTriangle style={{ color: '#dc3545' }} />
                        <strong>Technology Challenges</strong>
                      </div>
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
                          <strong>Technology Correlations</strong>
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
              
              <OverallScoreContainer score={Math.round(
                Object.values(technologyScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                Object.values(technologyScores).length
              )}>
                <OverallScoreHeader>
                  Overall Technology Maturity
                </OverallScoreHeader>
                
                <OverallScoreValue score={Math.round(
                  Object.values(technologyScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(technologyScores).length
                )} style={{ color: getScoreColor(getAverageScoreLabel(
                  Object.values(technologyScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(technologyScores).length
                )) }}>
                  {getAverageScoreLabel(
                    Object.values(technologyScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                    Object.values(technologyScores).length
                  )}
                </OverallScoreValue>
                
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderRadius: '0.25rem', fontSize: '0.85rem' }}>
                  <strong>Technology Evolution Goals:</strong>
                  <div style={{ margin: '0.5rem 0 0 0' }}>
                    <div>• Enable flexibility and speed to market across all devices</div>
                    <div>• Achieve modular architecture with reusable, isolated features</div>
                    <div>• Establish code health measures and app size optimization</div>
                    <div>• Complete platform migrations (Swift, Kotlin, SwiftUI, Jetpack Compose)</div>
                  </div>
                </div>
              </OverallScoreContainer>
            </SectionContent>
          </Section>

          {/* Development Practices Container */}
          <Section style={{ position: 'relative' }}>
            <StickySectionHeader>
              <SectionHeader>
                <SectionHeaderLeft>
                  <SectionIcon color="develop"><FaCodeBranch /></SectionIcon>
                  <SectionTitle>Development Practices</SectionTitle>
                </SectionHeaderLeft>
                <ExpandCollapseButtons>
                  <ExpandCollapseButton onClick={expandAllDevelopmentPractices} title="Expand All">
                    <FaChevronDown />
                  </ExpandCollapseButton>
                  <ExpandCollapseButton onClick={collapseAllDevelopmentPractices} title="Collapse All">
                    <FaChevronUp />
                  </ExpandCollapseButton>
                </ExpandCollapseButtons>
              </SectionHeader>
            </StickySectionHeader>
            <SectionContent>
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '4px solid #007bff', borderRadius: '0.25rem' }}>
                <strong>Goal: Automated CI/CD state with comprehensive quality gates and AI assistance</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
                  Tests, code complexity scanning, duplication detection run automatically per PR. No code modification between dev and production builds.
                </p>
              </div>
              
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', borderRadius: '0.25rem' }}>
                <strong>Current State: Fully Manual Process</strong>
                <div style={{ marginTop: '0.75rem', display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Unit tests manually run locally by developers
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Quality engineering team manually performs application regressions
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • Manual UI end-to-end test triggering with Bugbear
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • GitHub release branches manually created by engineers
                  </div>
                  <div style={{ padding: '0.5rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                    • GitHub actions manually triggered (iOS: auto TestFlight, Android: manual Google Play)
                  </div>
                </div>
              </div>

              {Object.entries({
                cicdPipelineAutomation: {
                  label: 'CI/CD Pipeline Automation',
                  trend: 'down',
                  currentState: 'Currently manual process at every step: manual unit test runs, manual regression testing, manual GitHub release branch creation, manual GitHub actions triggering for builds.',
                  risks: [
                    'Fully manual process creates bottlenecks and delays in delivery',
                    'Human error risk at every manual step impacts reliability',
                    'Inconsistent process execution across different engineers and releases',
                    'Lack of automated gates allows quality issues to reach production'
                  ],
                  actions: [
                    'Implement fully automated CI/CD pipeline with trigger-based automation',
                    'Create automated PR validation with test execution and quality checks',
                    'Add automated release branch creation and build artifact generation',
                    'Implement progressive deployment automation with rollback capabilities'
                  ],
                  correlations: ['codeQualityGates', 'buildArtifactManagement'],
                  timeline: [
                    { date: '2024-01-15', event: 'Identified fully manual CI/CD process as major bottleneck' },
                    { date: '2024-03-20', event: 'Started CI/CD automation planning and tool evaluation' },
                    { date: '2024-05-01', event: 'Initiated automated pipeline proof of concept' }
                  ]
                },
                codeQualityGates: {
                  label: 'Automated Code Quality Gates',
                  trend: 'down',
                  currentState: 'No automated quality gates exist. Need automatic fail if code coverage change diff is less than (x)%. Tests, code complexity scanning, and duplication detection should run automatically for each PR.',
                  risks: [
                    'No automated coverage threshold enforcement allows quality regression',
                    'Missing code complexity and duplication scanning in PR process',
                    'Quality issues discovered late in process increase fix costs',
                    'Inconsistent code quality standards across development team'
                  ],
                  actions: [
                    'Implement automated code coverage diff analysis with configurable thresholds',
                    'Add code complexity and duplication scanning to PR pipeline',
                    'Create quality gates that automatically fail PRs below standards',
                    'Establish comprehensive code quality metrics dashboard and reporting'
                  ],
                  correlations: ['cicdPipelineAutomation', 'manualProcessElimination'],
                  timeline: [
                    { date: '2024-02-10', event: 'Defined code quality gate requirements and thresholds' },
                    { date: '2024-04-05', event: 'Started automated quality scanning tool integration' }
                  ]
                },
                buildArtifactManagement: {
                  label: 'Build Artifact Management',
                  trend: 'up',
                  currentState: 'iOS artifacts automatically published to TestFlight, but Android requires manual Google Play process. Goal is same binary tested should be published with no code modification between development and production builds.',
                  risks: [
                    'Manual Android publishing process creates deployment delays and errors',
                    'Different artifacts between testing and production environments',
                    'Code modifications between environments introduce untested changes',
                    'Inconsistent deployment processes between iOS and Android platforms'
                  ],
                  actions: [
                    'Automate Android Google Play publishing to match iOS TestFlight process',
                    'Implement single binary promotion from dev through production environments',
                    'Create artifact validation and signing automation',
                    'Establish consistent deployment processes across both platforms'
                  ],
                  correlations: ['cicdPipelineAutomation', 'manualProcessElimination'],
                  timeline: [
                    { date: '2024-01-20', event: 'Analyzed artifact management inconsistencies between platforms' },
                    { date: '2024-03-15', event: 'Started Android publishing automation development' }
                  ]
                },
                manualProcessElimination: {
                  label: 'Manual Process Elimination',
                  trend: 'down',
                  currentState: 'Comprehensive manual process elimination needed across entire development lifecycle. Should be automated as much as possible with pass/fail gates requiring human intervention only when necessary.',
                  risks: [
                    'Manual processes throughout development lifecycle create inefficiency',
                    'Human intervention required for routine tasks slows development velocity',
                    'Inconsistent process execution leads to quality variations',
                    'Manual bottlenecks limit team scaling and delivery capacity'
                  ],
                  actions: [
                    'Identify and prioritize all manual processes for automation',
                    'Implement smart pass/fail gates with human intervention only for exceptions',
                    'Create self-service development workflows and tooling',
                    'Establish process automation metrics and continuous improvement'
                  ],
                  correlations: ['cicdPipelineAutomation', 'aiAssistedDevelopment'],
                  timeline: [
                    { date: '2024-02-25', event: 'Conducted comprehensive manual process audit' },
                    { date: '2024-04-10', event: 'Started prioritized automation roadmap development' }
                  ]
                },
                aiAssistedDevelopment: {
                  label: 'AI-Assisted Development Integration',
                  trend: 'stable',
                  currentState: 'Interest in AI assisted development practices. No current implementation of AI tools in development workflow.',
                  risks: [
                    'Missing AI productivity opportunities in code generation and review',
                    'Competitive disadvantage without AI-assisted development capabilities',
                    'Manual code review and testing processes could benefit from AI augmentation',
                    'Lack of AI integration strategy for development workflow optimization'
                  ],
                  actions: [
                    'Evaluate and implement AI-powered code generation and completion tools',
                    'Integrate AI-assisted code review and quality analysis',
                    'Add AI-powered test case generation and bug detection capabilities',
                    'Create AI development assistant integration strategy and training'
                  ],
                  correlations: ['codeQualityGates', 'manualProcessElimination'],
                  timeline: [
                    { date: '2024-01-30', event: 'Identified AI-assisted development as strategic interest' },
                    { date: '2024-03-25', event: 'Started AI development tools evaluation and pilot planning' }
                  ]
                }
              }).map(([key, item]) => (
                <ScoreItem key={key} score={developmentPracticesScores[key]}>
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
                          value={developmentPracticesScores[key]}
                          onChange={(e) => {
                            setDevelopmentPracticesScores(prev => ({
                              ...prev,
                              [key]: e.target.value
                            }));
                          }}
                          onBlur={finishScoreEdit}
                          style={{
                            padding: '0.25rem 0.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.875rem',
                            backgroundColor: 'white',
                            color: getScoreColor(developmentPracticesScores[key])
                          }}
                          autoFocus
                        >
                          <option value="H">H</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      ) : (
                        <ScoreValue 
                          score={developmentPracticesScores[key]}
                          onClick={() => startScoreEdit(key)}
                          style={{ cursor: 'pointer', color: getScoreColor(developmentPracticesScores[key]) }}
                        >
                          {developmentPracticesScores[key]}
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
                          <strong>Current State</strong>
                        </div>
                      </StickyHeader>
                      <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '3px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                        {item.currentState}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FaExclamationTriangle style={{ color: '#dc3545' }} />
                        <strong>Development Practice Challenges</strong>
                      </div>
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
                          <strong>Practice Correlations</strong>
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
              
              <OverallScoreContainer score={Math.round(
                Object.values(developmentPracticesScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                Object.values(developmentPracticesScores).length
              )}>
                <OverallScoreHeader>
                  Overall Development Practices Maturity
                </OverallScoreHeader>
                
                <OverallScoreValue score={Math.round(
                  Object.values(developmentPracticesScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(developmentPracticesScores).length
                )} style={{ color: getScoreColor(getAverageScoreLabel(
                  Object.values(developmentPracticesScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                  Object.values(developmentPracticesScores).length
                )) }}>
                  {getAverageScoreLabel(
                    Object.values(developmentPracticesScores).reduce((sum, score) => sum + getScoreValue(score), 0) / 
                    Object.values(developmentPracticesScores).length
                  )}
                </OverallScoreValue>
                
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderRadius: '0.25rem', fontSize: '0.85rem' }}>
                  <strong>Development Practice Goals:</strong>
                  <div style={{ margin: '0.5rem 0 0 0' }}>
                    <div>• Achieve fully automated CI/CD with quality gates and coverage thresholds</div>
                    <div>• Eliminate manual processes with smart pass/fail automation</div>
                    <div>• Ensure same binary tested is published across environments</div>
                    <div>• Integrate AI-assisted development practices and tools</div>
                  </div>
                </div>
              </OverallScoreContainer>
            </SectionContent>
          </Section>

        </SectionGrid>
      </AssessmentSection>
    </PageContainer>
  );
}