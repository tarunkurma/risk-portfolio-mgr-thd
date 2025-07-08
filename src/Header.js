import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import skLogo from './sk-logo-dark.svg';

const HeaderBar = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px rgba(47, 72, 196, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-right: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.2s;
  position: relative;
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavButton = styled(Link)`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  margin-left: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(47, 72, 196, 0.08);
  transition: background 0.2s;
  display: inline-block;
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }
`;

const ExternalLink = styled.a`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.2s;
  position: relative;
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export default function Header() {
  return (
    <HeaderBar>
      <NavContainer>
        <Link to="/">
          <Logo src={skLogo} alt="Stable Kernel Logo" />
        </Link>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/risk-dashboard">Risk Dashboard</NavLink>
          <NavLink to="/risk-mitigation">Risk Mitigation</NavLink>
          <ExternalLink href="#resources">Resources</ExternalLink>
          <NavButton to="/risk-dashboard">View Risks</NavButton>
        </Nav>
      </NavContainer>
    </HeaderBar>
  );
} 