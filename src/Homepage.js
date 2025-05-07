import React from 'react';
import styled from 'styled-components';
import skLogo from './sk-logo-dark.svg';
import LifecycleTimeline from './LifecycleTimeline';
import RiskDashboard from './RiskDashboard';
import { FaPencilRuler, FaFilter, FaCodeBranch, FaCogs, FaRocket, FaTools } from 'react-icons/fa';

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding: 4rem 2rem 2rem 2rem;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  overflow: hidden;
`;

const Watermark = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 40vw;
  max-width: 500px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
  transform: translateX(-50%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 8px rgba(47, 72, 196, 0.08);
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const Section = styled.section`
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Subsection = styled.div`
  flex: 1 1 0;
  margin-bottom: 0;
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.04);
  min-width: 0;
`;

const SubsectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${({ color, theme }) => theme.colors[color]};
  margin-bottom: 0.75rem;
`;

const SubsectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const SubsectionLabel = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  display: flex;
  align-items: center;
  height: 2rem;
`;

const PhasesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const PhaseList = styled.ul`
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  text-align: left;
  align-items: flex-start;
`;

const PhaseListItem = styled.li`
  margin-bottom: 0.4rem;
`;

const CrossPhaseContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CrossPhaseContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CrossPhaseIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CrossPhaseText = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

export default function Homepage() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <Title>Software Lifecycle Risk Evaluation</Title>
          <Subtitle>Assess risk across every phase of your software development lifecycle</Subtitle>
        </HeroContent>
        <Watermark src={skLogo} alt="Watermark" />
      </HeroSection>
      <Section>
        <SectionTitle>Lifecycle Phases</SectionTitle>
        <LifecycleTimeline />
        <PhasesContainer>
          <Subsection id="phase-design">
            <SubsectionRow>
              <SubsectionIcon id="icon-design" color="text"><FaPencilRuler /></SubsectionIcon>
              <SubsectionLabel>Design</SubsectionLabel>
            </SubsectionRow>
            <PhaseList>
              <PhaseListItem>UX Research</PhaseListItem>
              <PhaseListItem>Accessibility</PhaseListItem>
              <PhaseListItem>A/B Testing</PhaseListItem>
              <PhaseListItem>Wireframes</PhaseListItem>
            </PhaseList>
          </Subsection>
          <Subsection id="phase-refine">
            <SubsectionRow>
              <SubsectionIcon id="icon-refine" color="feature"><FaFilter /></SubsectionIcon>
              <SubsectionLabel>Refine</SubsectionLabel>
            </SubsectionRow>
            <PhaseList>
              <PhaseListItem>Product Roadmap</PhaseListItem>
              <PhaseListItem>ROI Hypothesis</PhaseListItem>
              <PhaseListItem>Feature 360</PhaseListItem>
              <PhaseListItem>Story Curation</PhaseListItem>
            </PhaseList>
          </Subsection>
          <Subsection id="phase-develop">
            <SubsectionRow>
              <SubsectionIcon id="icon-develop" color="develop"><FaCodeBranch /></SubsectionIcon>
              <SubsectionLabel>Develop</SubsectionLabel>
            </SubsectionRow>
            <PhaseList>
              <PhaseListItem>Security Standards</PhaseListItem>
              <PhaseListItem>Branching Strategy</PhaseListItem>
              <PhaseListItem>Infra - Local | EUT</PhaseListItem>
              <PhaseListItem>Test Coverage</PhaseListItem>
            </PhaseList>
          </Subsection>
          <Subsection id="phase-stabilize">
            <SubsectionRow>
              <SubsectionIcon id="icon-stabilize" color="stabilize"><FaCogs /></SubsectionIcon>
              <SubsectionLabel>Stabilize</SubsectionLabel>
            </SubsectionRow>
            <PhaseList>
              <PhaseListItem>STLC</PhaseListItem>
              <PhaseListItem>Data Management</PhaseListItem>
              <PhaseListItem>CICD - Stage Gates</PhaseListItem>
              <PhaseListItem>Resilience Testing</PhaseListItem>
            </PhaseList>
          </Subsection>
          <Subsection id="phase-deploy">
            <SubsectionRow>
              <SubsectionIcon id="icon-deploy" color={undefined} style={{ color: '#2ecc40' }}><FaRocket /></SubsectionIcon>
              <SubsectionLabel>Deploy</SubsectionLabel>
            </SubsectionRow>
            <PhaseList>
              <PhaseListItem>Feature rollouts</PhaseListItem>
              <PhaseListItem>Observability</PhaseListItem>
              <PhaseListItem>Contingencies</PhaseListItem>
              <PhaseListItem>Analytics</PhaseListItem>
            </PhaseList>
          </Subsection>
        </PhasesContainer>
        
        <CrossPhaseContainer id="cross-phase-ttt">
          <CrossPhaseContent>
            <CrossPhaseIcon>
              <FaTools />
            </CrossPhaseIcon>
            <CrossPhaseText>Tools, Tech & Talent</CrossPhaseText>
          </CrossPhaseContent>
        </CrossPhaseContainer>
      </Section>
      <Section>
        <SectionTitle>Risk Dashboard</SectionTitle>
        <RiskDashboard />
      </Section>
    </>
  );
} 