import React from 'react';
import styled, { useTheme } from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { FaPencilRuler, FaFilter, FaCodeBranch, FaCogs, FaRocket } from 'react-icons/fa';

const dummyRiskData = {
  overallScore: 72, // out of 100
  phaseScores: [
    { phase: '', score: 80 },
    { phase: '', score: 60 },
    { phase: '', score: 70 },
    { phase: '', score: 75 },
    { phase: '', score: 65 },
  ],
  topRisks: [
    'No accessibility review in Design',
    'Insufficient feature definition in Refinement phase',
    'Missing test coverage in Develop phase',
    'Manual deployment process in Deploy',
  ],
  lastUpdated: '2024-05-06 15:00',
};

const phaseIcons = [
  { phase: 'Design', icon: <FaPencilRuler size={28} />, color: 'text' },
  { phase: 'Refine', icon: <FaFilter size={28} />, color: 'feature' },
  { phase: 'Develop', icon: <FaCodeBranch size={28} />, color: 'develop' },
  { phase: 'Stabilize', icon: <FaCogs size={28} />, color: 'stabilize' },
  { phase: 'Deploy', icon: <FaRocket size={28} />, color: 'deploy' },
];

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ChartTitle = styled.div`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
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
  margin: 1.5rem 0 0 0;
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
  font-size: 1rem;
`;

const LastUpdated = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1.5rem;
  opacity: 0.7;
`;

const PhaseLabel = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.25rem;
`;

function getRiskColor(score, theme) {
  if (score >= 75) return '#2ecc40'; // green
  if (score >= 60) return theme.colors.accent; // orange
  return '#ff4136'; // red
}

export default function RiskDashboard() {
  const theme = useTheme();
  const { overallScore, phaseScores, topRisks, lastUpdated } = dummyRiskData;
  const riskColor = getRiskColor(overallScore, theme);

  return (
    <Card>
      <Score color={riskColor}>{overallScore}</Score>
      <ScoreLabel>Overall Risk Score</ScoreLabel>
      <ChartTitle></ChartTitle>
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
      <ChartTitle>Top Risks</ChartTitle>
      <RiskList>
        {topRisks.map((risk, idx) => (
          <RiskItem key={idx}>{risk}</RiskItem>
        ))}
      </RiskList>
      <LastUpdated>Last updated: {lastUpdated}</LastUpdated>
    </Card>
  );
} 