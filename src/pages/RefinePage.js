import React from 'react';
import styled from 'styled-components';
import { FaFilter, FaArrowLeft, FaChartBar, FaPuzzlePiece, FaBook, FaMoneyBillWave } from 'react-icons/fa';
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
  color: ${({ theme }) => theme.colors.feature};
  border: 2px solid ${({ theme }) => theme.colors.feature};
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
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SectionIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  margin-right: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionContent = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`;

const SectionList = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`;

const SectionListItem = styled.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;

export default function RefinePage() {
  return (
    <PageContainer>
      <BreadcrumbNav>
        <BackLink to="/">
          <FaArrowLeft /> Back to Home Page
        </BackLink>
      </BreadcrumbNav>
      
      <PageHeader>
        <IconContainer>
          <FaFilter />
        </IconContainer>
        <HeaderContent>
          <PageTitle>Refine Phase</PageTitle>
          <PageDescription>
            Transform design concepts into well-defined requirements and implementation plans
          </PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionIcon color="feature"><FaChartBar /></SectionIcon>
            <SectionTitle>Product Roadmap</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Strategic planning that aligns development with business objectives and market needs.
            <SectionList>
              <SectionListItem>Feature prioritization</SectionListItem>
              <SectionListItem>Release planning</SectionListItem>
              <SectionListItem>Stakeholder alignment</SectionListItem>
              <SectionListItem>Milestone definition</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="feature"><FaMoneyBillWave /></SectionIcon>
            <SectionTitle>ROI Hypothesis</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Economic analysis to ensure development efforts yield meaningful business returns.
            <SectionList>
              <SectionListItem>Cost-benefit analysis</SectionListItem>
              <SectionListItem>Resource allocation planning</SectionListItem>
              <SectionListItem>Market opportunity assessment</SectionListItem>
              <SectionListItem>Success metrics definition</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="feature"><FaPuzzlePiece /></SectionIcon>
            <SectionTitle>Feature 360</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Comprehensive analysis of each feature from multiple perspectives to ensure completeness.
            <SectionList>
              <SectionListItem>User story development</SectionListItem>
              <SectionListItem>Edge case identification</SectionListItem>
              <SectionListItem>Acceptance criteria</SectionListItem>
              <SectionListItem>Integration requirements</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="feature"><FaBook /></SectionIcon>
            <SectionTitle>Story Curation</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Development of clear, complete user stories that capture requirements and acceptance criteria.
            <SectionList>
              <SectionListItem>Persona-based story writing</SectionListItem>
              <SectionListItem>Acceptance criteria definition</SectionListItem>
              <SectionListItem>Story prioritization</SectionListItem>
              <SectionListItem>Backlog management</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
      </SectionGrid>
    </PageContainer>
  );
}