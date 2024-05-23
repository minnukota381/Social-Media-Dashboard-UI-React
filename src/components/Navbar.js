import React, { useState } from 'react';
import { BiHome,BiCog, BiBook } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import profilePic from '../Assets/minnu.JPG';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="header" style={{ backgroundColor: 'navy' }}>
      <div className="header-left">
        <h2>NeptunE</h2>
        <span className="material-icons-outlined menu-icon" onClick={toggleNavbar}>
          menu
        </span>
        <span className="material-icons-outlined">search</span>
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="header-right">
        <span className="material-icons-outlined" onClick={toggleDarkMode}>
          {darkMode ? 'brightness_7' : 'brightness_4'}
        </span>
        <span className="material-icons-outlined">notifications</span>
        <span className="material-icons-outlined">email</span>
        <div className="header-user">
          <img src={profilePic} alt="User" className="user-avatar" />
          <button className="logout-button">Logout</button>
        </div>
      </div>
      <nav className={`navbar ${navbarOpen ? 'navbar-open' : ''}`}>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <a href="#">
              <BiHome /> Dashboard
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#">
              <FaUserFriends /> Followers
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#">
                <BiBook/>Posts</a>
          </li>
          <li className="navbar-list-item">
            <a href="#">
              <BiCog /> Settings
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
