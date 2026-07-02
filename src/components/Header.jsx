import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <img src="/white_logo_icon.png" alt="PraanFitness Logo Light" className="header-logo-img logo-scrolled" />
        </a>
        
        <div className="header-links">
          <a href="#training" className="header-link">Training</a>
          <a href="#nutrition" className="header-link">Nutrition</a>
          <a href="#performance" className="header-link">Performance</a>
          <a href="#about" className="header-link">About</a>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#training" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Training</a>
          <a href="#nutrition" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Nutrition</a>
          <a href="#performance" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Performance</a>
          <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</a>
        </div>
      </div>
    </nav>
  );
}
