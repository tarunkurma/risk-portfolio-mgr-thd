import React from 'react';
import styled from 'styled-components';
import { 
  FaRocket, FaArrowLeft, FaFlag, FaChartLine, 
  FaExclamationTriangle, FaSearchPlus
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
  color: ${({ theme }) => theme.colors.deploy};
  border: 2px solid ${({ theme }) => theme.colors.deploy};
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
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.deploy};
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

export default function DeployPage() {
  return (
    <PageContainer>
      <BreadcrumbNav>
        <BackLink to="/">
          <FaArrowLeft /> Back to Home Page
        </BackLink>
      </BreadcrumbNav>
      
      <PageHeader>
        <IconContainer>
          <FaRocket />
        </IconContainer>
        <HeaderContent>
          <PageTitle>Deploy Phase</PageTitle>
          <PageDescription>
            Safely delivering your software to production and ensuring operational excellence
          </PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionIcon><FaFlag /></SectionIcon>
            <SectionTitle>Feature Rollouts</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Controlled introduction of new capabilities to minimize risk and maximize feedback.
            <SectionList>
              <SectionListItem>Progressive delivery strategies</SectionListItem>
              <SectionListItem>Canary deployments</SectionListItem>
              <SectionListItem>Blue/Green deployments</SectionListItem>
              <SectionListItem>Feature flags and toggles</SectionListItem>
              <SectionListItem>Early user feedback loops</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon><FaSearchPlus /></SectionIcon>
            <SectionTitle>Observability</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Comprehensive monitoring to understand system behavior and troubleshoot issues.
            <SectionList>
              <SectionListItem>Security Monitors & Alerts</SectionListItem>
              <SectionListItem>Allow/Block list</SectionListItem>
              <SectionListItem>Application Performance Monitoring</SectionListItem>
              <SectionListItem>Distributed tracing</SectionListItem>
              <SectionListItem>Logging strategies</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon><FaExclamationTriangle /></SectionIcon>
            <SectionTitle>Contingencies</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Planning for failures and ensuring business continuity in all scenarios.
            <SectionList>
              <SectionListItem>Rollback/Rollforward strategies</SectionListItem>
              <SectionListItem>Emergency response planning</SectionListItem>
              <SectionListItem>Disaster recovery procedures</SectionListItem>
              <SectionListItem>Incident management workflows</SectionListItem>
              <SectionListItem>On-call rotation and escalation</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon><FaChartLine /></SectionIcon>
            <SectionTitle>Analytics</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Leveraging data to inform product decisions and business strategy.
            <SectionList>
              <SectionListItem>User behavior tracking</SectionListItem>
              <SectionListItem>Conversion and funnel analysis</SectionListItem>
              <SectionListItem>Feature adoption metrics</SectionListItem>
              <SectionListItem>Business impact measurement</SectionListItem>
              <SectionListItem>Predictive usage modeling</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon><FaRocket /></SectionIcon>
            <SectionTitle>Continuous Improvement</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Evolving delivery processes through regular feedback and adaptation.
            <SectionList>
              <SectionListItem>Post-deployment reviews</SectionListItem>
              <SectionListItem>Release process optimization</SectionListItem>
              <SectionListItem>Deployment frequency metrics</SectionListItem>
              <SectionListItem>Cycle time reduction</SectionListItem>
              <SectionListItem>DevOps maturity assessments</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
      </SectionGrid>
    </PageContainer>
  );
}