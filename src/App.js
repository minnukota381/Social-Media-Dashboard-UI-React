import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS file
import Dashboard from './components/Dashboard';
import SocialAccounts from './components/SocialAccounts';
import PostScheduler from './components/PostScheduler';
import AnalyticsView from './components/AnalyticsView';
import Sidebar from './components/SideBar'; // Update this line
function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/accounts" element={<SocialAccounts />} />
            <Route path="/scheduler" element={<PostScheduler />} />
            <Route path="/analytics" element={<AnalyticsView />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;