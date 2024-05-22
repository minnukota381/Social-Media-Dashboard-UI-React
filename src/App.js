import React, { useState } from 'react';
import './styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="grid-container">
      <Sidebar open={sidebarOpen} closeSidebar={closeSidebar} />
      <Header openSidebar={openSidebar} />
      <Main />
    </div>
  );
};

export default App;
