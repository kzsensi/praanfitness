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
    <section id="join" className="cta-section" ref={ctaRef}>
      <div className="cta-container">
        <div className="cta-left">
          <img 
            src="/logo.webp" 
            alt="PraanFitness Logo" 
            style={{ height: '60px', width: 'auto', marginBottom: '2rem' }} 
          />
          <h2 className="cta-title">Ready to transform your health?</h2>
          <p className="cta-subtitle">Join the complete performance ecosystem designed for your unique body and mind.</p>
        </div>
        
        <div className="cta-right">
          <div className="cta-form-container">
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cta-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="cta-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="cta-form-group">
                <label>Select Your Plan</label>
                <select required defaultValue="">
                  <option value="" disabled>Choose a plan...</option>
                  <option value="foundation">FOUNDATION</option>
                  <option value="premium">PREMIUM</option>
                  <option value="leader">LEADER CHOICE</option>
                </select>
              </div>
              <div className="cta-form-group">
                <label>Your Goals</label>
                <textarea placeholder="Tell us about your fitness goals..." required></textarea>
              </div>
              <button type="submit" className="cta-submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
