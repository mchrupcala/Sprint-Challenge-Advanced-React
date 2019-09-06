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
    <div className="content">
      <div className="nav-bar">
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        <div 
        data-testid="toggle-background-div"
        className="toggle-div">
            <div className="dark-mode-toggle">
              <div 
              data-testid="toggle-button"
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}>

              </div>
          </div>
        </div>
      </div>

      <div className="App">
      <div>
        <h1>Player List!</h1>

        <PlayerList />
      </div>
      </div>
    </div>
  );
}

export default App;
