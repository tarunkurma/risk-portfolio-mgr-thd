import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaFilter, FaPencilRuler, FaCodeBranch, FaCogs, FaRocket } from 'react-icons/fa';

const phases = [
  { key: 'design', label: 'Design', color: 'text', icon: <FaPencilRuler />, path: '/design' },
  { key: 'refine', label: 'Refine', color: 'feature', icon: <FaFilter />, path: '/refine' },
  { key: 'develop', label: 'Develop', color: 'develop', icon: <FaCodeBranch />, path: '/develop' },
  { key: 'stabilize', label: 'Stabilize', color: 'stabilize', icon: <FaCogs />, path: '/stabilize' },
  { key: 'deploy', label: 'Deploy', color: 'deploy', icon: <FaRocket />, path: '/deploy' },
];

const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  overflow-x: auto;
`;

const PhaseBubble = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme, color, selected }) => selected ? theme.colors[color] : theme.colors.secondaryBackground};
  color: ${({ theme, color, selected }) => selected ? '#fff' : theme.colors[color]};
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: ${({ selected }) => selected ? '0 4px 16px rgba(47,72,196,0.10)' : 'none'};
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  margin-bottom: 0.5rem;
`;

const PhaseLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme, color, selected }) => selected ? theme.colors[color] : theme.colors.text};
`;

export default function LifecycleTimeline({ onSelect, selectedPhase }) {
  const [selected, setSelected] = useState(selectedPhase || phases[0].key);
  const history = useHistory();

  const handleSelect = (key, path) => {
    setSelected(key);
    if (onSelect) onSelect(key);
    
    // Navigate to the corresponding page
    if (path) {
      history.push(path);
    }
  };

  return (
    <TimelineContainer>
      {phases.map(phase => (
        <div key={phase.key} style={{ textAlign: 'center' }}>
          <PhaseBubble
            color={phase.color}
            selected={selected === phase.key}
            onClick={() => handleSelect(phase.key, phase.path)}
            aria-label={phase.label}
          >
            {phase.icon}
          </PhaseBubble>
          <PhaseLabel color={phase.color} selected={selected === phase.key}>{phase.label}</PhaseLabel>
        </div>
      ))}
    </TimelineContainer>
  );
}

LifecycleTimeline.propTypes = {
  onSelect: PropTypes.func,
  selectedPhase: PropTypes.string
}; 