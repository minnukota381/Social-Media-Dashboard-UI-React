import React, { useState, useEffect } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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