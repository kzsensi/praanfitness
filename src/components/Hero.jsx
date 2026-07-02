import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <>
      <section className="hero-desktop">
        <img 
          src="/hero.webp" 
          alt="Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
        <div style={{ position: 'absolute', left: '6%', top: '78%', display: 'flex', gap: '1.5rem', zIndex: 10 }}>
          <a href="#join" style={{ 
            backgroundColor: '#7ab536', 
            color: '#111', 
            padding: '1rem 2rem', 
            fontSize: '1rem', 
            fontWeight: '700', 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase', 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            borderRadius: '4px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            START YOUR JOURNEY
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#programs" style={{ 
            backgroundColor: 'transparent', 
            border: '1.5px solid #333', 
            color: '#333', 
            padding: '1rem 2rem', 
            fontSize: '1rem', 
            fontWeight: '700', 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase', 
            textDecoration: 'none', 
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#333'; e.currentTarget.style.color = '#fff'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#333'}}>
            EXPLORE PROGRAMS
          </a>
        </div>
      </section>

      <section className="hero-mobile">
        <div className="hero-mobile-content">
          <h1>Human<br />performance,<br />rebuilt<span className="dot">.</span></h1>
          <p>Fitness, medicine, and AI in one system.</p>
        </div>
        
        <div className="hero-mobile-ctas">
          <a href="#join" style={{ 
            backgroundColor: '#7ab536', 
            color: '#111', 
            padding: '1.2rem 2rem', 
            fontSize: '0.9rem', 
            fontWeight: '800', 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase', 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            borderRadius: '4px'
          }}>
            START YOUR JOURNEY
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#programs" style={{ 
            backgroundColor: 'transparent', 
            border: '1.5px solid #111', 
            color: '#111', 
            padding: '1.2rem 2rem', 
            fontSize: '0.9rem', 
            fontWeight: '800', 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase', 
            textDecoration: 'none', 
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
          }}>
            EXPLORE PROGRAMS
          </a>
        </div>

        <img src="/hero-bg-svg-mob.webp" alt="Hero Mobile" className="hero-mobile-img" />
      </section>
    </>
  );
}
