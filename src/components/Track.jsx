import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Track.css';

gsap.registerPlugin(ScrollTrigger);

export default function Track() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const rotateSection = document.querySelector('.rotate-sc');
    const targets = rotateSection ? [sectionRef.current, rotateSection] : sectionRef.current;

    gsap.fromTo(targets, 
      { backgroundColor: '#f6f4f4' }, 
      {
        backgroundColor: '#000000',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", 
          end: "top 10%", 
          scrub: true,
          onEnter: () => rotateSection?.classList.add('gsap-custom-bg'),
          onLeaveBack: () => rotateSection?.classList.remove('gsap-custom-bg')
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="track-section" ref={sectionRef}>
      <div className="track-container">
        
        {/* LEFT COLUMN */}
        <div className="track-left">
          <div className="track-label">AI PERFORMANCE INTELLIGENCE</div>
          <h2 className="track-title">Health Score</h2>
          <p className="track-subtext">
            AI that understands your body.<br />
            Scores what matters. Guides what’s next.
          </p>
          
          <div className="track-metrics">
            <div className="track-metric-item">
              <svg className="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div className="metric-value">52</div>
              <div className="metric-label">RESTING HR</div>
            </div>
            
            <div className="track-metric-item">
              <svg className="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div className="metric-value">68</div>
              <div className="metric-label">HRV</div>
            </div>
            
            <div className="track-metric-item">
              <svg className="metric-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <div className="metric-value">76%</div>
              <div className="metric-label">RECOVERY</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="track-right">
          <div className="dashboard-cluster">
            {/* MAIN CARD */}
            <div className="dash-card card-main">
            <div className="card-header">
              <div className="card-label">HEALTH SCORE</div>
              <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
            
            <div className="ring-container">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                <circle cx="100" cy="100" r="90" fill="none" stroke="#ffffff" strokeWidth="12" strokeDasharray="565" strokeDashoffset="100" strokeLinecap="round" transform="rotate(-90 100 100)" />
              </svg>
              <div className="ring-text">
                <div className="ring-score">82</div>
                <div className="ring-status">GOOD</div>
              </div>
            </div>
            
            <div className="main-desc">
              Your body is balanced and<br />performing well.
            </div>
            
            <div className="main-footer">
              <div className="footer-stat">↑ 6 pts</div>
              <div className="footer-sub">vs yesterday</div>
            </div>
          </div>

          {/* TOP RIGHT CARD */}
          <div className="dash-card card-top-right">
            <div className="card-header">
              <div className="card-label">HEART RATE</div>
              <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            
            <div className="hr-value-row">
              <div className="hr-val">52</div>
              <div className="hr-unit">bpm</div>
            </div>
            
            <div className="hr-wave">
              <svg width="100%" height="40" viewBox="0 0 200 40" preserveAspectRatio="none">
                <path d="M0,20 L40,20 L50,10 L60,35 L70,5 L80,25 L90,20 L200,20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="200" cy="20" r="2.5" fill="none" stroke="#ffffff" strokeWidth="1.5" />
              </svg>
            </div>
            
            <div className="hr-bottom">RESTING</div>
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div className="dash-card card-bottom-right">
            <div className="card-header">
              <div className="card-label">WEEKLY PROGRESS</div>
              <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            <div className="weekly-value">+12%</div>
            <div className="weekly-sub">vs last week</div>
            
            <div className="bar-chart">
              <div className="bar-col"><div className="bar" style={{height: "15px"}}></div><div className="bar-label">M</div></div>
              <div className="bar-col"><div className="bar" style={{height: "25px"}}></div><div className="bar-label">T</div></div>
              <div className="bar-col"><div className="bar" style={{height: "20px"}}></div><div className="bar-label">W</div></div>
              <div className="bar-col"><div className="bar" style={{height: "35px"}}></div><div className="bar-label">T</div></div>
              <div className="bar-col"><div className="bar" style={{height: "30px"}}></div><div className="bar-label">F</div></div>
              <div className="bar-col"><div className="bar" style={{height: "40px"}}></div><div className="bar-label">S</div></div>
              <div className="bar-col"><div className="bar active" style={{height: "50px"}}></div><div className="bar-label">S</div></div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
