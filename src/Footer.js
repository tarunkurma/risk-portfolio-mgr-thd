import React from 'react';
import styled from 'styled-components';
import skLogo from './sk-logo-dark.svg';
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

const FooterBar = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 0.5rem 0;
  margin-top: 3rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
  margin-right: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  margin-top: 2rem;
  opacity: 0.7;
`;

export default function Footer() {
  return (
    <FooterBar>
      <FooterContainer>
        <Logo src={skLogo} alt="Stable Kernel Logo" />
        <Nav>
          <NavLink href="https://stablekernel.com/services" target="_blank" rel="noopener noreferrer">Services</NavLink>
          <NavLink href="https://stablekernel.com/case-studies" target="_blank" rel="noopener noreferrer">Case Studies</NavLink>
          <NavLink href="https://stablekernel.com/about-us" target="_blank" rel="noopener noreferrer">About Us</NavLink>
          <NavLink href="https://stablekernel.com/resources" target="_blank" rel="noopener noreferrer">Resources</NavLink>
          <NavLink href="https://stablekernel.com/book-a-consultation" target="_blank" rel="noopener noreferrer">Book a Consultation</NavLink>
          <NavLink href="https://stablekernel.com/about-us#careers" target="_blank" rel="noopener noreferrer">Careers</NavLink>
          <NavLink href="https://stablekernel.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</NavLink>
        </Nav>
        <Socials>
          <SocialIcon href="https://twitter.com/stablekernel" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)"><FaXTwitter /></SocialIcon>
          <SocialIcon href="https://www.facebook.com/stablekernel/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/stable-kernel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></SocialIcon>
        </Socials>
      </FooterContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} Stable Kernel. All rights reserved.
      </Copyright>
    </FooterBar>
  );
} 