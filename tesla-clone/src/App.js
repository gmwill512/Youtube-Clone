import React from 'react';
import './App.css';
import Header from './components/header.js';
import Home from './components/Home.js';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
