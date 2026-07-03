import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Membership.css';

gsap.registerPlugin(ScrollTrigger);

const Membership = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Fade and slide up animation for the header
    gsap.fromTo('.membership-header', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Staggered pop-up animation for the cards
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.membership-cards',
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="programs" className="membership-section dark-theme" ref={sectionRef}>
      <div className="membership-header">
        <div className="membership-eyebrow">MEMBERSHIP JOURNEYS</div>
        <h2>Choose your transformation path<span className="dot">.</span></h2>
        <p>Every PraanFitness membership is designed for a different level of support, guidance and performance.</p>
      </div>

      <div className="membership-cards">
        {/* Foundation Card */}
        <div className="membership-card glass-card" ref={el => cardsRef.current[0] = el}>
          <div className="card-top">
            <div className="card-tier">GUIDED</div>
            <div className="card-badge">Most Popular</div>
          </div>
          <h3 className="card-title">Foundation</h3>
          <p className="card-desc">For guided fitness transformation.</p>
          <ul className="card-features">
            {['Gym + Yoga', 'Personal Trainer', 'Diet Plan', 'Progress Tracking'].map((feature, i) => (
              <li className="feature-item" key={i}>
                <div className="feature-dot"></div>
                {feature}
              </li>
            ))}
          </ul>
          <a href="#foundation" className="card-btn">
            Start Journey
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Premium Card */}
        <div className="membership-card glass-card premium-glow" ref={el => cardsRef.current[1] = el}>
          <div className="card-top">
            <div className="card-tier">COMPLETE</div>
            <div className="card-badge highlight">Best for Complete Support</div>
          </div>
          <h3 className="card-title">Premium</h3>
          <p className="card-desc">For complete health and performance support.</p>
          <ul className="card-features">
            {['All Services Access', 'Personal Coaching', 'Medical Support', 'Full HPOS System'].map((feature, i) => (
              <li className="feature-item" key={i}>
                <div className="feature-dot"></div>
                {feature}
              </li>
            ))}
          </ul>
          <a href="#premium" className="card-btn primary">
            Explore Premium
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Leader's Choice Card */}
        <div className="membership-card glass-card" ref={el => cardsRef.current[2] = el}>
          <div className="card-top">
            <div className="card-tier">EXECUTIVE</div>
            <div className="card-badge">By Invitation</div>
          </div>
          <h3 className="card-title">Leader's Choice</h3>
          <p className="card-desc">For high-performance individuals and leaders.</p>
          <ul className="card-features">
            {['Assessments & Counseling', 'Physiology Education', 'Skill Training', 'Management Development', 'Real-world Problem Solving'].map((feature, i) => (
              <li className="feature-item" key={i}>
                <div className="feature-dot"></div>
                {feature}
              </li>
            ))}
          </ul>
          <a href="#expert" className="card-btn">
            Talk to Expert
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Membership;
