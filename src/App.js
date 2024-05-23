import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="grid-container">
      <Sidebar open={sidebarOpen} closeSidebar={closeSidebar} />
      <Header openSidebar={openSidebar} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main />
    </div>
  );
};

export default App;
