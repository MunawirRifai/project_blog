import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa'; // hamburger icon
import logo from '../assets/logo.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // tutup menu setelah klik
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' 
      onClick={() => document.getElementById('home').scrollIntoView({behavior:'smooth'})} />

      {/* Hamburger icon (mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </div>

      {/* Menu */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('research')}>Research</button>
        <button onClick={() => scrollToSection('member')}>Member</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
