// components/Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaCalendarPlus, FaChartBar, FaBars } from 'react-icons/fa';
import './styles.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Social Media Dashboard</h3>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              <FaHome className="mr-2" /> <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/accounts" activeClassName="active">
              <FaUsers className="mr-2" /> <span>Accounts</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/scheduler" activeClassName="active">
              <FaCalendarPlus className="mr-2" /> <span>Post Scheduler</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/analytics" activeClassName="active">
              <FaChartBar className="mr-2" /> <span>Analytics</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="toggler" onClick={toggleSidebar}>
        <FaBars />
      </div>
    </>
  );
}

export default Sidebar;