import React from 'react';
import styled, { useTheme } from 'styled-components';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { 
  FaExclamationTriangle, FaShieldAlt, FaUserShield, 
  FaLock, FaNetworkWired, FaServer 
} from 'react-icons/fa';

const dummyMaturityData = {
  maturityCategories: [
    { name: 'Security', unmitigated: 8, mitigated: 5, inProgress: 3, icon: <FaShieldAlt />, color: 'security' },
    { name: 'Privacy', unmitigated: 6, mitigated: 4, inProgress: 2, icon: <FaUserShield />, color: 'highlight' },
    { name: 'Infrastructure', unmitigated: 5, mitigated: 3, inProgress: 2, icon: <FaServer />, color: 'contingencies' },
    { name: 'Authentication', unmitigated: 7, mitigated: 3, inProgress: 4, icon: <FaLock />, color: 'primary' },
    { name: 'Network', unmitigated: 4, mitigated: 2, inProgress: 2, icon: <FaNetworkWired />, color: 'analytics' },
  ],
  topMitigations: [
    { risk: 'SQL Injection Vulnerability', category: 'Security', mitigation: 'Implemented parameterized queries and input validation', impact: 'High', completionDate: '2024-04-15' },
    { risk: 'Clear-Text Password Storage', category: 'Authentication', mitigation: 'Added password hashing with bcrypt and salting', impact: 'High', completionDate: '2024-04-18' },
    { risk: 'Unprotected API Endpoints', category: 'Security', mitigation: 'Added JWT authentication to all endpoints', impact: 'Medium', completionDate: '2024-04-22' },
    { risk: 'Outdated Dependencies', category: 'Infrastructure', mitigation: 'Implemented dependency scanning and auto-updates', impact: 'Medium', completionDate: '2024-04-25' },
  ],
  pendingMitigations: [
    { risk: 'Insufficient Rate Limiting', category: 'Security', mitigation: 'Implement API rate limiting and throttling', impact: 'Medium', targetDate: '2024-05-15' },
    { risk: 'Weak Password Requirements', category: 'Authentication', mitigation: 'Enforce stronger password policy', impact: 'Medium', targetDate: '2024-05-20' },
    { risk: 'Missing Data Backup Strategy', category: 'Infrastructure', mitigation: 'Implement automated backup and verification', impact: 'High', targetDate: '2024-06-01' },
  ],
  lastUpdated: '2024-05-06 15:00',
};

// Styled components for the roadmap
const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  font-size: 1.75rem;
  margin-right: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin: 1.5rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const ChartContainer = styled.div`
  margin-bottom: 2rem;
`;

const TablesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TableCard = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 1rem;
  padding: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;

const TableRow = styled.tr`
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
`;

const TableCell = styled.td`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.text};
`;

const ImpactTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  background: ${({ impact, theme }) => {
    switch (impact) {
      case 'High': return 'rgba(255, 107, 87, 0.15)';
      case 'Medium': return 'rgba(255, 224, 102, 0.2)';
      case 'Low': return 'rgba(182, 226, 211, 0.15)';
      default: return 'rgba(0, 0, 0, 0.05)';
    }
  }};
  color: ${({ impact, theme }) => {
    switch (impact) {
      case 'High': return theme.colors.feature;
      case 'Medium': return '#D4AC0D';
      case 'Low': return '#27AE60';
      default: return theme.colors.text;
    }
  }};
`;

const LastUpdated = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`;



const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  font-size: 0.85rem;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
  margin-right: 0.5rem;
  border-radius: 2px;
`;

export default function MaturityMitigationRoadmap() {
  const theme = useTheme();
  const { maturityCategories, topMitigations, pendingMitigations, lastUpdated } = dummyMaturityData;
  
  // Transform data for the stacked bar chart
  const chartData = maturityCategories.map(category => ({
    name: category.name,
    Mitigated: category.mitigated,
    "In Progress": category.inProgress,
    Unmitigated: category.unmitigated - category.mitigated - category.inProgress,
    icon: category.icon,
    color: category.color
  }));
  
  return (
    <Card>
      <Header>
        <IconContainer>
          <FaExclamationTriangle />
        </IconContainer>
        <Title>Risk Mitigation Roadmap</Title>
      </Header>
      
      <ChartContainer>
        <SectionTitle>Risk Mitigation Status by Category</SectionTitle>
        
        <LegendContainer>
          <LegendItem>
            <LegendColor color={theme.colors.primary} />
            Mitigated
          </LegendItem>
          <LegendItem>
            <LegendColor color={theme.colors.accent} />
            In Progress
          </LegendItem>
          <LegendItem>
            <LegendColor color="#D6D6D6" />
            Unmitigated
          </LegendItem>
        </LegendContainer>
        
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barGap={0}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              tickLine={false}
            />
            <YAxis 
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Bar dataKey="Mitigated" stackId="a" fill={theme.colors.primary} />
            <Bar dataKey="In Progress" stackId="a" fill={theme.colors.accent} />
            <Bar dataKey="Unmitigated" stackId="a" fill="#D6D6D6" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      
      <TablesContainer>
        <TableCard>
          <SectionTitle>
            <FaShieldAlt style={{ color: theme.colors.security }} />
            Completed Mitigations
          </SectionTitle>
          <Table>
            <thead>
              <tr>
                <TableHeader>Risk</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>Impact</TableHeader>
                <TableHeader>Date</TableHeader>
              </tr>
            </thead>
            <tbody>
              {topMitigations.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.risk}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell><ImpactTag impact={item.impact}>{item.impact}</ImpactTag></TableCell>
                  <TableCell>{item.completionDate}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableCard>
        
        <TableCard>
          <SectionTitle>
            <FaUserShield style={{ color: theme.colors.highlight }} />
            Pending Mitigations
          </SectionTitle>
          <Table>
            <thead>
              <tr>
                <TableHeader>Risk</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>Impact</TableHeader>
                <TableHeader>Target Date</TableHeader>
              </tr>
            </thead>
            <tbody>
              {pendingMitigations.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.risk}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell><ImpactTag impact={item.impact}>{item.impact}</ImpactTag></TableCell>
                  <TableCell>{item.targetDate}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableCard>
      </TablesContainer>
      
      <LastUpdated>Last updated: {lastUpdated}</LastUpdated>
    </Card>
  );
}