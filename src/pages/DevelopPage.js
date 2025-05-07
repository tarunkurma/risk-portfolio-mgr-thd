import React from 'react';
import styled from 'styled-components';
import { 
  FaCodeBranch, FaArrowLeft, FaShieldAlt, FaCode, FaServer, FaCheckSquare,
  FaBook, FaRegListAlt, FaComments, FaClipboardCheck, FaTools, FaBullseye
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
  color: ${({ theme }) => theme.colors.develop};
  border: 2px solid ${({ theme }) => theme.colors.develop};
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

const SectionDivider = styled.div`
  width: 100%;
  margin: 3rem 0 1.5rem 0;
`;

const SectionGroupTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
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

export default function DevelopPage() {
  return (
    <PageContainer>
      <BreadcrumbNav>
        <BackLink to="/">
          <FaArrowLeft /> Back to Home Page
        </BackLink>
      </BreadcrumbNav>
      
      <PageHeader>
        <IconContainer>
          <FaCodeBranch />
        </IconContainer>
        <HeaderContent>
          <PageTitle>Develop Phase</PageTitle>
          <PageDescription>
            Building robust, maintainable, and secure code for your application
          </PageDescription>
        </HeaderContent>
      </PageHeader>
      
      <SectionDivider>
        <SectionGroupTitle>Development Standards</SectionGroupTitle>
      </SectionDivider>
      
      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaShieldAlt /></SectionIcon>
            <SectionTitle>Security Standards</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Implementing security best practices throughout the development process.
            <SectionList>
              <SectionListItem>Input validation and sanitization</SectionListItem>
              <SectionListItem>Secure authentication protocols</SectionListItem>
              <SectionListItem>Sensitive data encryption</SectionListItem>
              <SectionListItem>OWASP vulnerability prevention</SectionListItem>
              <SectionListItem>Security code reviews</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaCode /></SectionIcon>
            <SectionTitle>Branching Strategy</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Organized approach to source code management and collaboration.
            <SectionList>
              <SectionListItem>Feature branch workflow</SectionListItem>
              <SectionListItem>Pull request processes</SectionListItem>
              <SectionListItem>Branch protection rules</SectionListItem>
              <SectionListItem>Merge conflict resolution</SectionListItem>
              <SectionListItem>Release branch management</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaServer /></SectionIcon>
            <SectionTitle>Infra - Local | EUT</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Setting up development and testing infrastructure for efficient workflows.
            <SectionList>
              <SectionListItem>Local development environments</SectionListItem>
              <SectionListItem>Containerization (Docker)</SectionListItem>
              <SectionListItem>Environment uniformity</SectionListItem>
              <SectionListItem>End-user testing environments</SectionListItem>
              <SectionListItem>Environment configuration management</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaCheckSquare /></SectionIcon>
            <SectionTitle>Test Coverage</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Comprehensive testing approach to ensure code quality and reliability.
            <SectionList>
              <SectionListItem>Unit testing frameworks</SectionListItem>
              <SectionListItem>Integration testing</SectionListItem>
              <SectionListItem>Code coverage metrics</SectionListItem>
              <SectionListItem>Test-driven development</SectionListItem>
              <SectionListItem>Automated regression testing</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
      </SectionGrid>
      
      <SectionDivider>
        <SectionGroupTitle>Code Quality</SectionGroupTitle>
      </SectionDivider>
      
      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaBook /></SectionIcon>
            <SectionTitle>Readability</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Making code easy to understand, maintain, and extend.
            <SectionList>
              <SectionListItem>Linters</SectionListItem>
              <SectionListItem>Patterns</SectionListItem>
              <SectionListItem>Tasks</SectionListItem>
              <SectionListItem>Docs</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaRegListAlt /></SectionIcon>
            <SectionTitle>Review Process</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Multi-faceted review approach to ensure high quality code.
            <SectionList>
              <SectionListItem>Architecture review</SectionListItem>
              <SectionListItem>Design review</SectionListItem>
              <SectionListItem>Code review</SectionListItem>
              <SectionListItem>Technical review</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
      </SectionGrid>
      
      <SectionDivider>
        <SectionGroupTitle>Testing & Tooling</SectionGroupTitle>
      </SectionDivider>
      
      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaBullseye /></SectionIcon>
            <SectionTitle>Test Strategy</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Comprehensive testing approach across multiple levels.
            <SectionList>
              <SectionListItem>Unit testing</SectionListItem>
              <SectionListItem>Integration testing</SectionListItem>
              <SectionListItem>Data - Mock & Synthetic</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionHeader>
            <SectionIcon color="develop"><FaTools /></SectionIcon>
            <SectionTitle>Tools</SectionTitle>
          </SectionHeader>
          <SectionContent>
            Essential tools for monitoring, analysis and deployment.
            <SectionList>
              <SectionListItem>Observability</SectionListItem>
              <SectionListItem>Feature Flagging</SectionListItem>
              <SectionListItem>Code Analysis</SectionListItem>
              <SectionListItem>Crash Reporting</SectionListItem>
              <SectionListItem>User Analytics</SectionListItem>
              <SectionListItem>Alerting (pager & on-call)</SectionListItem>
            </SectionList>
          </SectionContent>
        </Section>
      </SectionGrid>
    </PageContainer>
  );
}