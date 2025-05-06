import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Homepage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
