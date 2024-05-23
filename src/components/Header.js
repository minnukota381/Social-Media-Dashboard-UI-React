import React from 'react';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="material-icons-outlined">search</span>
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="header-right">
        <span
          className="material-icons-outlined dark-mode-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'brightness_7' : 'brightness_4'}
        </span>
        <span className="material-icons-outlined">notifications</span>
        <span className="material-icons-outlined">email</span>
        <span className="material-icons-outlined">account_circle</span>
      </div>
    </header>
  );
};

export default Header;
