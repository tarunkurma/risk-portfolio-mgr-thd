import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import DesignPage from './pages/DesignPage';
import RefinePage from './pages/RefinePage';
import DevelopPage from './pages/DevelopPage';
import StabilizePage from './pages/StabilizePage';
import DeployPage from './pages/DeployPage';
import RiskDashboard from './RiskDashboard';
import RiskMitigationRoadmap from './RiskMitigationRoadmap';
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
    <Router>
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
            <Route path="/risk-dashboard" component={RiskDashboard} />
            <Route path="/risk-mitigation" component={RiskMitigationRoadmap} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
