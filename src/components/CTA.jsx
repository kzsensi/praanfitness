import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CTA.css';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.cta-container > *',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: ctaRef });

  return (
    <section className="cta-section" ref={ctaRef}>
      <div className="cta-container">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop" 
          alt="Transform your health" 
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '24px', marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} 
        />
        <h2 className="cta-title">Ready to transform your health?</h2>
        <p className="cta-subtitle">Join the complete performance ecosystem designed for your unique body and mind.</p>
        <a href="#join" className="cta-btn">
          Join PraanFitness Now
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTA;
