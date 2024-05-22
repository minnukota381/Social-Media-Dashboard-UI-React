import React from 'react';

const Sidebar = ({ open, closeSidebar }) => (
  <aside id="sidebar" className={open ? 'sidebar-responsive' : ''}>
    <div className="sidebar-title">
      <div className="sidebar-brand">
        <span className="material-icons-outlined">mood</span>NEPTUNE
      </div>
      <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
    </div>
    <ul className="sidebar-list">
      <li className="sidebar-list-item">
        <a href="#">
          <span className="material-icons-outlined">dashboard</span> Dashboard
        </a>
      </li>
      <li className="sidebar-list-item">
        <a href="#">
          <span className="material-icons-outlined">person</span> Followers
        </a>
      </li>
      <li className="sidebar-list-item">
        <a href="#">
          <span className="material-icons-outlined">inventory</span> Posts
        </a>
      </li>
      <li className="sidebar-list-item">
        <a href="#">
          <span className="material-icons-outlined">settings</span> Settings
        </a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
