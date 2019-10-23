import React from 'react';
import './App.css';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

function App() {
  return (
    <div className="App">
      <SongList />
      <br />
      <SongDetails />
    </div>
  );
}

export default App;
