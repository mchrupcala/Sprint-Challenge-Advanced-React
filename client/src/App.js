import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './components/PlayerList'

function App() {

  return (
    <div className="App">
      <h1>Player List!</h1>
      <PlayerList />
    </div>
  );
}

export default App;
