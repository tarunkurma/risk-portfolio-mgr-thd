import React from 'react';
import styled from 'styled-components';
import { FaPencilRuler, FaArrowLeft, FaLightbulb, FaAccessibleIcon, FaUsers, FaChartLine } from 'react-icons/fa';
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
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.text};
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

export default function DesignPage() {
  return (
    <PageContainer>
      <BreadcrumbNav>
        <BackLink to="/">
          <FaArrowLeft /> Back to Home Page
        </BackLink>
      </BreadcrumbNav>
      
      <PageHeader>
        <IconContainer>
          <FaPencilRuler />
        </IconContainer>
        <HeaderContent>
          <PageTitle>Design Phase</PageTitle>
          <PageDescription>
            The foundation of successful software projects starts with thoughtful design
          </PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionIcon color="text"><FaLightbulb /></SectionIcon>
            <SectionTitle>UX Research</SectionTitle>
          </SectionHeader>
          <SectionContent>
            User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.
            <SectionList>
              <SectionListItem>User interviews and surveys</SectionListItem>
              <SectionListItem>Personas and user journey mapping</SectionListItem>
              <SectionListItem>Competitive analysis</SectionListItem>
              <SectionListItem>Usability testing</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="text"><FaAccessibleIcon /></SectionIcon>
            <SectionTitle>Accessibility</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Designing for all users enhances product reach and compliance with legal standards.
            <SectionList>
              <SectionListItem>WCAG compliance</SectionListItem>
              <SectionListItem>Screen reader compatibility</SectionListItem>
              <SectionListItem>Color contrast and readability</SectionListItem>
              <SectionListItem>Keyboard navigation support</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="text"><FaChartLine /></SectionIcon>
            <SectionTitle>A/B Testing</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Data-driven design decisions lead to optimized user experiences and better business outcomes.
            <SectionList>
              <SectionListItem>Test hypothesis formation</SectionListItem>
              <SectionListItem>Statistical significance planning</SectionListItem>
              <SectionListItem>Multivariate testing</SectionListItem>
              <SectionListItem>Iterative design improvements</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="text"><FaUsers /></SectionIcon>
            <SectionTitle>Wireframes</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Visual blueprints that guide development and align stakeholder expectations.
            <SectionList>
              <SectionListItem>Low-fidelity sketches</SectionListItem>
              <SectionListItem>Interactive prototypes</SectionListItem>
              <SectionListItem>Information architecture</SectionListItem>
              <SectionListItem>User flow diagrams</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
      </SectionGrid>
    </PageContainer>
  );
}