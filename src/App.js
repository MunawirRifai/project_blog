import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Research from './sections/Research';
import Member from './sections/Member'
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <Home />
        <About />
        <Research />
        <Member />
        <Contact />
      </div>
    </div>
  );
}

export default App;
