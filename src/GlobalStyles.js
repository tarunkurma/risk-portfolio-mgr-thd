import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5 {
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(47, 72, 196, 0.08);
    transition: background 0.2s;
  }
  button:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

 