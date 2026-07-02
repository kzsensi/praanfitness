import React from 'react';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats-sc">
      <div className="container stats-container">
        
        {/* LEFT CARD: Training Progress */}
        <div className="stats-card-new">
          
          <div className="stats-card-top-left-logo">
            <img src="/logo.webp" alt="PraanFitness Logo" className="logo-text-img" style={{width: "140px", objectFit: "contain"}} />
            <div className="logo-subtext">AI PERFORMANCE INTELLIGENCE</div>
          </div>

          {/* Decorative Orbit SVG */}
          <svg className="orbit-svg" viewBox="0 0 400 400" fill="none">
            <ellipse cx="200" cy="200" rx="180" ry="140" stroke="url(#paint0_linear)" strokeWidth="1" strokeDasharray="4 6" />
            <ellipse cx="200" cy="200" rx="150" ry="170" stroke="url(#paint1_linear)" strokeWidth="1" opacity="0.5" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a67cff" />
                <stop offset="1" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="400" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main Visual */}
          <div className="main-visual-container">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" alt="Yoga movement" className="main-visual-img" />
          </div>

          {/* Data Chips */}
          <div className="data-chip chip-consistency">
            <div className="chip-icon">
              <svg fill="none" stroke="#a67cff" strokeWidth="1.5" viewBox="0 0 24 24" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
              </svg>
            </div>
            <div className="chip-content">
              <div className="chip-label">Consistency</div>
              <div className="chip-val">+12%</div>
            </div>
          </div>

          <div className="data-chip chip-sessions">
            <div className="chip-icon">
              <svg fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="9" strokeDasharray="4 4" />
              </svg>
            </div>
            <div className="chip-content">
              <div className="chip-label">Sessions</div>
              <div className="chip-val">18</div>
            </div>
          </div>

          <div className="data-chip chip-goal">
            <div className="chip-content" style={{width: '100px'}}>
              <div className="chip-label">Goal Progress</div>
              <div className="chip-val">76%</div>
              <div className="goal-bar"><div className="goal-bar-fill"></div></div>
            </div>
          </div>

          <div className="stats-text-content">
            <h2 className="stats-headline">{"Track what matters.\nImprove what matters."}</h2>
            <p className="stats-subtext">See progress across movement,<br />consistency, and recovery.</p>
          </div>
        </div>

        {/* RIGHT CARD: Smart Recommendations */}
        <div className="stats-card-new">

          {/* Main Visual */}
          <div className="main-visual-container right-card">
            <img src="/meditation_woman.webp" alt="Meditation and Recovery" className="main-visual-img" />
          </div>

          <div className="floating-circle-img float-food">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop" alt="Nutrition" className="floating-img" />
          </div>

          {/* Data Chips */}
          <div className="data-chip chip-recovery">
            <div className="chip-icon">
              <svg fill="none" stroke="#a67cff" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" fill="#a67cff" opacity="0.3" />
              </svg>
            </div>
            <div className="chip-content">
              <div className="chip-label">Recovery</div>
              <div className="chip-val">Ready</div>
              <div className="chip-desc">Good to go</div>
            </div>
          </div>

          <div className="data-chip chip-practice">
            <div className="chip-icon">
              <svg fill="none" stroke="#ff86c8" strokeWidth="1.5" viewBox="0 0 24 24" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a2 2 0 110 4 2 2 0 010-4zm-4 6h8l-1 9h-6l-1-9z" />
              </svg>
            </div>
            <div className="chip-content">
              <div className="chip-label">Next Practice</div>
              <div className="chip-val">Yoga Flow</div>
              <div className="chip-desc">45 min • Hatha</div>
            </div>
          </div>

          <div className="data-chip chip-nutrition">
            <div className="chip-icon">
              <svg fill="none" stroke="#ffb86c" strokeWidth="1.5" viewBox="0 0 24 24" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="chip-content">
              <div className="chip-label">Nutrition</div>
              <div className="chip-val">Balanced</div>
              <div className="chip-desc">Great choice</div>
            </div>
          </div>

          <div className="stats-text-content">
            <h2 className="stats-headline">{"Your body data,\ntranslated into action."}</h2>
            <p className="stats-subtext">Guidance for training, recovery,<br />nutrition, and follow-up.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
