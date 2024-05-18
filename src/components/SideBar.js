// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCalendarPlus, FaChartBar } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Social Media Dashboard</h3>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <FaHome className="mr-2" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/accounts">
            <FaUsers className="mr-2" />
            <span>Accounts</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/scheduler">
            <FaCalendarPlus className="mr-2" />
            <span>Post Scheduler</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/analytics">
            <FaChartBar className="mr-2" />
            <span>Analytics</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;