import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="header-logo-link">
          <img src="/logo_dark.png" alt="PraanFitness Logo Dark" className="header-logo-img logo-initial" />
          <img src="/logo.png" alt="PraanFitness Logo Light" className="header-logo-img logo-scrolled" />
        </a>
        
        <div className="header-links">
          <a href="#training" className="header-link">Training</a>
          <a href="#nutrition" className="header-link">Nutrition</a>
          <a href="#performance" className="header-link">Performance</a>
          <a href="#about" className="header-link">About</a>
        </div>
      </div>
    </nav>
  );
}
