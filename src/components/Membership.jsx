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
    <section id="programs" className="membership-section" ref={sectionRef}>
      <div className="membership-header">
        <div className="membership-eyebrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
          MEMBERSHIP JOURNEYS
        </div>
        <h2>Choose your transformation path<span className="dot">.</span></h2>
        <p>Every PraanFitness membership is designed for a different level of support, guidance and performance.</p>
      </div>

      <div className="membership-cards">
        {/* Foundation Card */}
        <div className="membership-card" ref={el => cardsRef.current[0] = el}>
          <div className="card-top">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M15 22v-4h-6v4"></path>
                <path d="M12 18v-7"></path>
                <path d="M9 14.5l-4-2.5"></path>
                <path d="M15 14.5l4-2.5"></path>
              </svg>
            </div>
            <div className="card-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              Most Popular
            </div>
          </div>
          <div className="card-tier">GUIDED</div>
          <h3 className="card-title">Foundation</h3>
          <p className="card-desc">For guided fitness transformation.</p>
          <ul className="card-features">
            {['Gym + Yoga', 'Personal Trainer', 'Diet Plan', 'Progress Tracking'].map((feature, i) => (
              <li className="feature-item" key={i}>
                <div className="feature-check">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
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
        <div className="membership-card premium" ref={el => cardsRef.current[1] = el}>
          <div className="card-top">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <div className="card-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 4h20v4h-20z"></path>
                <path d="M4 8l2 12h12l2-12"></path>
                <path d="M12 12l-2 4 2 2 2-2-2-4z"></path>
              </svg>
              Best for Complete Support
            </div>
          </div>
          <div className="card-tier">COMPLETE</div>
          <h3 className="card-title">Premium</h3>
          <p className="card-desc">For complete health and performance support.</p>
          <ul className="card-features">
            {['All Services Access', 'Personal Coaching', 'Medical Support', 'Full HPOS System'].map((feature, i) => (
              <li className="feature-item" key={i}>
                <div className="feature-check">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <a href="#premium" className="card-btn">
            Explore Premium
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Leader's Choice Card */}
        <div className="membership-card" ref={el => cardsRef.current[2] = el}>
          <div className="card-top">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4h20v4h-20z"></path>
                <path d="M4 8l2 12h12l2-12"></path>
              </svg>
            </div>
            <div className="card-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              By Invitation
            </div>
          </div>
          <div className="card-tier">EXECUTIVE</div>
          <h3 className="card-title">Leader's Choice</h3>
          <p className="card-desc">For high-performance individuals and leaders.</p>
          <ul className="card-features">
            {['Assessments & Counseling', 'Physiology Education', 'Skill Training', 'Management Development', 'Real-world Problem Solving'].map((feature, i) => (
              <li className="feature-item" key={i}>
                <div className="feature-check">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
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
