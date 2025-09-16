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
import { transformTHDDataForDashboard, getCategoryInsights } from './services/thdAssessmentData';

// Get real THD assessment data
const thdMaturityData = transformTHDDataForDashboard();
const categoryInsights = getCategoryInsights();

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

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;

const ItemListItem = styled.li`
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

export default function MaturityDashboard() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  
  const {
    overallScore, phaseScores, maturityCategories, maturitySeverity,
    improvementAreas, completedImprovements, lastUpdated 
  } = thdMaturityData;
  
  const riskColor = getRiskColor(overallScore, theme);

  return (
    <Card>
      <Header>
        <HeaderContent>
          <div>Comprehensive view of project maturity levels and improvement progress</div>
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
            Overall Capability Maturity Assessment
          </ChartTitle>
          
          <DashboardContent>
            <ChartContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Score color={riskColor}>{overallScore}</Score>
              <ScoreLabel>Overall Maturity Score</ScoreLabel>
              
              <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '4px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem', textAlign: 'center', maxWidth: '400px' }}>
                <strong>THD Assessment Overview:</strong> Based on 30 detailed metrics across 6 capability areas from The Home Depot's development maturity evaluation.
              </div>
              
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
                <FaShieldAlt style={{ color: theme.colors.primary }} />
                THD Capability Assessment Categories
              </ChartTitle>
              <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '4px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                <strong>Assessment Areas:</strong> Six key capability domains covering The Home Depot's mobile app development maturity.
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {Object.entries(categoryInsights).map(([category, insight]) => {
                  const categoryData = maturityCategories.find(cat => cat.name.toLowerCase().includes(category));
                  return (
                    <div key={category} style={{ 
                      padding: '0.75rem', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: `2px solid ${insight.color}20`,
                      borderLeft: `4px solid ${insight.color}`,
                      borderRadius: '0.5rem' 
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem' 
                      }}>
                        <strong style={{ color: insight.color, textTransform: 'capitalize' }}>
                          {category === 'developmentPractices' ? 'Dev Practices' : category}
                        </strong>
                        <span style={{ 
                          fontSize: '1.2rem', 
                          fontWeight: 'bold', 
                          color: insight.color 
                        }}>
                          {categoryData?.value || 'N/A'}%
                        </span>
                      </div>
                      <div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                        <strong>Challenge:</strong> {insight.highlight}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#666', fontStyle: 'italic' }}>
                        {insight.trend}
                      </div>
                      <div style={{ 
                        marginTop: '0.5rem', 
                        padding: '0.25rem 0.5rem', 
                        background: insight.urgency === 'High' ? 'rgba(220, 53, 69, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: insight.urgency === 'High' ? '#dc3545' : '#ffc107'
                      }}>
                        Priority: {insight.urgency}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ChartContainer>
            
            <ChartContainer>
              <ChartTitle>
                <FaExclamationTriangle style={{ color: theme.colors.accent }} />
                THD Priority Improvement Areas
              </ChartTitle>
              <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(220, 53, 69, 0.1)', borderLeft: '4px solid #dc3545', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                <strong>Focus Areas:</strong> Items scored 'L' (Low) require immediate attention for capability maturity improvement.
              </div>
              <ItemList>
                {improvementAreas.map((item, idx) => (
                  <ItemListItem key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <FaExclamationTriangle size={14} style={{ color: '#dc3545', marginTop: '0.2rem', flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      {item}
                      {item.includes('manual') && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', fontStyle: 'italic' }}>
                          🤖 High priority: Automation opportunity
                        </div>
                      )}
                      {item.includes('crash') && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', fontStyle: 'italic' }}>
                          📊 SLA impact: Affects customer experience
                        </div>
                      )}
                      {item.includes('accessibility') && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', fontStyle: 'italic' }}>
                          👥 Cross-team blocker: Limits collaboration
                        </div>
                      )}
                      {item.includes('device') && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', fontStyle: 'italic' }}>
                          📱 Market opportunity: Tablet, watch, auto support missing
                        </div>
                      )}
                    </div>
                  </ItemListItem>
                ))}
              </ItemList>
              
              <ChartTitle style={{ marginTop: '1.5rem' }}>
                <FaCheck style={{ color: theme.colors.primary }} />
                THD Progress & Completed Initiatives
              </ChartTitle>
              <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(40, 167, 69, 0.1)', borderLeft: '4px solid #28a745', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
                <strong>Foundation Established:</strong> Key infrastructure and processes already in place supporting capability maturity growth.
              </div>
              <ItemList>
                {completedImprovements.map((item, idx) => (
                  <ItemListItem key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <FaCheck size={14} style={{ color: theme.colors.primary, marginTop: '0.2rem', flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      {item}
                      {item.includes('Embrace') && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', fontStyle: 'italic' }}>
                          📈 Reliability tracking: iOS 99.85%, Android 99.8%
                        </div>
                      )}
                      {item.includes('80%') && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', fontStyle: 'italic' }}>
                          ✅ Standard established: JUnit (Android), XCTest (iOS)
                        </div>
                      )}
                      {item.includes('Swift') && (
                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem', fontStyle: 'italic' }}>
                          🔄 Migration progress: Swift 63%, SwiftUI 15%, Kotlin 59%, Jetpack Compose 7%
                        </div>
                      )}
                    </div>
                  </ItemListItem>
                ))}
              </ItemList>
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
                  data={maturitySeverity}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {maturitySeverity.map((entry, index) => (
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
              Category Capability Maturity Assessment
            </ChartTitle>
            <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(0, 123, 255, 0.1)', borderLeft: '4px solid #007bff', borderRadius: '0.25rem', fontSize: '0.9rem' }}>
              <strong>THD Assessment Categories:</strong> Radar chart showing relative maturity across six key capability domains. Outer edge represents 100% maturity.
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart cx="50%" cy="50%" outerRadius={80} data={maturityCategories}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Radar
                  name="Capability Maturity %"
                  dataKey="value"
                  stroke={theme.colors.primary}
                  fill={theme.colors.primary}
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Capability Maturity']} />
              </RadarChart>
            </ResponsiveContainer>
            <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '0.25rem', fontSize: '0.85rem', textAlign: 'center' }}>
              <strong>Scoring:</strong> H=100%, M=67%, L=33% | <strong>Current Range:</strong> {Math.min(...maturityCategories.map(c => c.value))}% - {Math.max(...maturityCategories.map(c => c.value))}%
            </div>
          </ChartContainer>
        </DashboardContent>
      )}
      
      <LastUpdated>Last updated: {new Date(lastUpdated).toLocaleString()}</LastUpdated>
    </Card>
  );
}