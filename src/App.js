import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './Header';
import Homepage from './Homepage';
import DesignPage from './pages/DesignPage';
import RefinePage from './pages/RefinePage';
import DevelopPage from './pages/DevelopPage';
import StabilizePage from './pages/StabilizePage';
import DeployPage from './pages/DeployPage';
import MaturityDashboard from './MaturityDashboard';
import MaturityMitigationRoadmap from './MaturityMitigationRoadmap';
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
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/design" component={DesignPage} />
            <Route path="/refine" component={RefinePage} />
            <Route path="/develop" component={DevelopPage} />
            <Route path="/stabilize" component={StabilizePage} />
            <Route path="/deploy" component={DeployPage} />
            <Route path="/maturity-dashboard" component={MaturityDashboard} />
            <Route path="/mitigation-roadmap" component={MaturityMitigationRoadmap} />
          </Switch>
        </Container>
        <Footer />
        {/* Toast notifications for user feedback */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: '#4aed88',
              },
            },
            error: {
              duration: 5000,
              theme: {
                primary: '#ff6b6b',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
