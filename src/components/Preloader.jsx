import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Preloader.css';

export default function Preloader() {
  const [phase, setPhase] = useState('init'); // init, loading, logoOut, done

  useEffect(() => {
    const duration = 2; // seconds

    const t0 = setTimeout(() => {
      setPhase('loading');
    }, 50);

    const t1 = setTimeout(() => {
      setPhase('logoOut');
    }, duration * 1000 + 50);

    const t2 = setTimeout(() => {
      setPhase('done');
    }, duration * 1000 + 1600); // 1.6s buffer for the 5 staggered strips to finish

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'done') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Re-calculate GSAP scroll triggers after scroll is re-enabled
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [phase]);

  if (phase === 'done') return null;

  let logoTranslateY = 0;
  let logoOpacity = 1;
  let bgOpacity = 1;

  if (phase === 'init') {
    logoTranslateY = 80;
    logoOpacity = 0;
  } else if (phase === 'loading') {
    logoTranslateY = 0;
    logoOpacity = 1;
  } else if (phase === 'logoOut') {
    logoTranslateY = -80;
    logoOpacity = 0;
  }

  const isClosing = phase === 'logoOut';

  return (
    <div 
      className="preloader-wrapper"
      style={{
        pointerEvents: isClosing ? 'none' : 'all'
      }}
    >
      <div className="preloader-columns" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((col, index) => (
          <div
            key={col}
            className={`preloader-column ${isClosing ? 'closed' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          />
        ))}
      </div>

      <img 
        src="/white_logo_icon.webp" 
        alt="Loading..." 
        className="preloader-logo"
        style={{
          transform: `translateY(${logoTranslateY}px)`,
          opacity: logoOpacity
        }}
        draggable={false}
      />
    </div>
  );
}
