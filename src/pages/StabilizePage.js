import React from 'react';
import styled from 'styled-components';
import { 
  FaCogs, FaArrowLeft, FaFileAlt, FaDatabase, 
  FaRocket, FaBomb, FaSyncAlt
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
  color: ${({ theme }) => theme.colors.stabilize};
  border: 2px solid ${({ theme }) => theme.colors.stabilize};
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

export default function StabilizePage() {
  return (
    <PageContainer>
      <BreadcrumbNav>
        <BackLink to="/">
          <FaArrowLeft /> Back to Home Page
        </BackLink>
      </BreadcrumbNav>
      
      <PageHeader>
        <IconContainer>
          <FaCogs />
        </IconContainer>
        <HeaderContent>
          <PageTitle>Stabilize Phase</PageTitle>
          <PageDescription>
            Ensuring your software is reliable, robust, and ready for production deployment
          </PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionIcon color="stabilize"><FaFileAlt /></SectionIcon>
            <SectionTitle>STLC</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Structured Software Testing Life Cycle that ensures comprehensive coverage.
            <SectionList>
              <SectionListItem>Test planning and strategy</SectionListItem>
              <SectionListItem>Test case development</SectionListItem>
              <SectionListItem>Test environment preparation</SectionListItem>
              <SectionListItem>Test execution and reporting</SectionListItem>
              <SectionListItem>Test closure and lessons learned</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="stabilize"><FaDatabase /></SectionIcon>
            <SectionTitle>Data Management</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Robust handling of data throughout testing and stabilization processes.
            <SectionList>
              <SectionListItem>Test data generation and management</SectionListItem>
              <SectionListItem>Data migration validation</SectionListItem>
              <SectionListItem>Database performance testing</SectionListItem>
              <SectionListItem>Data integrity checks</SectionListItem>
              <SectionListItem>Data backup and recovery verification</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="stabilize"><FaRocket /></SectionIcon>
            <SectionTitle>CICD - Stage Gates</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Automated quality gates that ensure only stable code progresses to production.
            <SectionList>
              <SectionListItem>Code quality gates (linting, static analysis)</SectionListItem>
              <SectionListItem>Automated testing gates</SectionListItem>
              <SectionListItem>Performance benchmarking gates</SectionListItem>
              <SectionListItem>Security scanning gates</SectionListItem>
              <SectionListItem>Approval workflows</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="stabilize"><FaBomb /></SectionIcon>
            <SectionTitle>Resilience Testing</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Verifying system stability under stress, unusual conditions, and component failures.
            <SectionList>
              <SectionListItem>Chaos engineering experiments</SectionListItem>
              <SectionListItem>Load and stress testing</SectionListItem>
              <SectionListItem>Failover and recovery testing</SectionListItem>
              <SectionListItem>Degraded service simulation</SectionListItem>
              <SectionListItem>Long-haul reliability testing</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="stabilize"><FaSyncAlt /></SectionIcon>
            <SectionTitle>Performance Optimization</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Monitoring and enhancing system performance to meet user expectations.
            <SectionList>
              <SectionListItem>Response time optimization</SectionListItem>
              <SectionListItem>Resource utilization analysis</SectionListItem>
              <SectionListItem>Database query optimization</SectionListItem>
              <SectionListItem>Network latency reduction</SectionListItem>
              <SectionListItem>Caching strategy implementation</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
      </SectionGrid>
    </PageContainer>
  );
}