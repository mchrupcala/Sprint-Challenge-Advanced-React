import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './components/PlayerList';
import useDarkMode from './components/useDarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <>
    <div className="App">
      <h1>Player List!</h1>
        <div className="nav-bar">
          <div className="dark-mode-toggle">
            on
            <div 
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}>

            </div>
        </div>
      </div>

      <PlayerList />
    </div>
    </>
  );
}

export default App;
