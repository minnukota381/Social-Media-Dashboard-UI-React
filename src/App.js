import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import SocialAccounts from './components/SocialAccounts';
import PostScheduler from './components/PostScheduler';
import AnalyticsView from './components/AnalyticsView';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Social Media Dashboard</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/accounts">Accounts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/scheduler">Post Scheduler</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/analytics">Analytics</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/accounts">
            <SocialAccounts />
          </Route>
          <Route path="/scheduler">
            <PostScheduler />
          </Route>
          <Route path="/analytics">
            <AnalyticsView />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;