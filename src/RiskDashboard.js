import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList,
  PieChart, Pie, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { 
  FaPencilRuler, FaFilter, FaCodeBranch, FaCogs, FaRocket,
  FaExclamationTriangle, FaShieldAlt, FaChartLine, FaCheck
} from 'react-icons/fa';

const dummyRiskData = {
  overallScore: 72, // out of 100
  phaseScores: [
    { phase: 'Design', score: 80, phaseName: 'Design' },
    { phase: 'Refine', score: 60, phaseName: 'Refine' },
    { phase: 'Develop', score: 70, phaseName: 'Develop' },
    { phase: 'Stabilize', score: 75, phaseName: 'Stabilize' },
    { phase: 'Deploy', score: 65, phaseName: 'Deploy' },
  ],
  riskCategories: [
    { name: 'Security', value: 65, fullMark: 100 },
    { name: 'Compliance', value: 80, fullMark: 100 },
    { name: 'Infrastructure', value: 75, fullMark: 100 },
    { name: 'Process', value: 68, fullMark: 100 },
    { name: 'Team', value: 85, fullMark: 100 },
  ],
  riskSeverity: [
    { name: 'High', value: 4, color: '#ff4136' },
    { name: 'Medium', value: 7, color: '#ff851b' },
    { name: 'Low', value: 13, color: '#2ecc40' },
  ],
  topRisks: [
    'Release pipeline lacks automation (30-40 min builds)',
    'Android: 103 SDKs, iOS: 44 SDKs - update risks',
    'Configuration management prone to errors',
    'Native-WebView data sharing complexity',
    'Legacy code removal challenges',
    'Manual App/Play Store uploads required',
  ],
  mitigatedRisks: [
    'Outdated dependencies with security vulnerabilities',
    'Missing automated testing in CI pipeline',
    'Inadequate error handling',
    'Poor password policy requirements',
    'Configuration drift across environments',
    'Manual release process inefficiencies'
  ],
  lastUpdated: '2024-05-06 15:00',
};

const phaseIcons = [
  { phase: 'Design', icon: <FaPencilRuler size={24} />, color: 'text' },
  { phase: 'Refine', icon: <FaFilter size={24} />, color: 'feature' },
  { phase: 'Develop', icon: <FaCodeBranch size={24} />, color: 'develop' },
  { phase: 'Stabilize', icon: <FaCogs size={24} />, color: 'stabilize' },
  { phase: 'Deploy', icon: <FaRocket size={24} />, color: 'deploy' },
];

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;



const HeaderContent = styled.div`
  flex: 1;
`;



const Score = styled.div`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ color }) => color};
  margin-bottom: 0.5rem;
`;

const ScoreLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 0.5rem 0 1.5rem 0;
`;

const IconCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const RiskList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;

const RiskItem = styled.li`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: ${({ theme, iconColor }) => theme.colors[iconColor] || theme.colors.text};
  }
`;

const LastUpdated = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`;

const PhaseLabel = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.25rem;
`;

const TabButtons = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ active, theme }) => active ? theme.fonts.weights.medium : theme.fonts.weights.regular};
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus {
    outline: none;
  }
`;

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
`;

function getRiskColor(score, theme) {
  if (score >= 75) return '#2ecc40'; // green
  if (score >= 60) return theme.colors.accent; // orange
  return '#ff4136'; // red
}

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  return (
    <g>
      <text x={x + width / 2} y={y - 10} fill="#333" textAnchor="middle" dominantBaseline="middle">
        {value}
      </text>
    </g>
  );
};

export default function RiskDashboard() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  
  const { 
    overallScore, phaseScores, riskCategories, riskSeverity,
    topRisks, mitigatedRisks, lastUpdated 
  } = dummyRiskData;
  
  const riskColor = getRiskColor(overallScore, theme);

  return (
    <Card>
      <Header>
        <HeaderContent>
          <div>Comprehensive view of project risk factors and mitigation status</div>
        </HeaderContent>
      </Header>
      
      <TabButtons>
        <TabButton 
          active={activeTab === 'overview' ? 'true' : 'false'} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </TabButton>
        <TabButton 
          active={activeTab === 'details' ? 'true' : 'false'} 
          onClick={() => setActiveTab('details')}
        >
          Detailed Analysis
        </TabButton>
      </TabButtons>
      
      {activeTab === 'overview' ? (
        <>
          <ChartTitle>
            <FaChartLine style={{ color: theme.colors.primary }} />
            Overall Risk Assessment
          </ChartTitle>
          
          <DashboardContent>
            <ChartContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Score color={riskColor}>{overallScore}</Score>
              <ScoreLabel>Overall Risk Score</ScoreLabel>
              
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={phaseScores} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <XAxis dataKey="phase" tick={{ fontSize: 14 }} />
                    <YAxis domain={[0, 100]} hide />
                    <Tooltip />
                    <Bar dataKey="score">
                      {phaseScores.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={getRiskColor(entry.score, theme)} />
                      ))}
                      <LabelList dataKey="score" position="top" style={{ fontSize: 14, fontWeight: 600 }} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                
                <IconRow>
                  {phaseIcons.map(({ phase, icon, color }) => (
                    <IconCol key={phase}>
                      {React.cloneElement(icon, { color: theme.colors[color] })}
                      <PhaseLabel>{phase}</PhaseLabel>
                    </IconCol>
                  ))}
                </IconRow>
            </ChartContainer>
            
            <ChartContainer>
              <ChartTitle>
                <FaExclamationTriangle style={{ color: theme.colors.accent }} />
                Top Risks
              </ChartTitle>
              <RiskList>
                {topRisks.map((risk, idx) => (
                  <RiskItem key={idx}>
                    <FaExclamationTriangle size={14} style={{ color: theme.colors.accent }} />
                    {risk}
                  </RiskItem>
                ))}
              </RiskList>
              
              <ChartTitle style={{ marginTop: '1.5rem' }}>
                <FaCheck style={{ color: theme.colors.primary }} />
                Recently Mitigated
              </ChartTitle>
              <RiskList>
                {mitigatedRisks.map((risk, idx) => (
                  <RiskItem key={idx}>
                    <FaCheck size={14} style={{ color: theme.colors.primary }} />
                    {risk}
                  </RiskItem>
                ))}
              </RiskList>
            </ChartContainer>
          </DashboardContent>
        </>
      ) : (
        <DashboardContent>
          <ChartContainer>
            <ChartTitle>
              <FaShieldAlt style={{ color: theme.colors.security }} />
              Risk Severity Distribution
            </ChartTitle>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={riskSeverity}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskSeverity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          
          <ChartContainer>
            <ChartTitle>
              <FaChartLine style={{ color: theme.colors.primary }} />
              Risk Category Assessment
            </ChartTitle>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart cx="50%" cy="50%" outerRadius={80} data={riskCategories}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Risk Score"
                  dataKey="value"
                  stroke={theme.colors.primary}
                  fill={theme.colors.primary}
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </DashboardContent>
      )}
      
      <LastUpdated>Last updated: {lastUpdated}</LastUpdated>
    </Card>
  );
}