import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

const coreTeam = [
  {
    name: "Dr. Agni",
    role: "Cardiology & Diabetology Expert",
    img: "/agni.webp"
  },
  {
    name: "Dr. Pushkar",
    role: "MBBS & Health Strategist",
    img: "/pushkar.webp"
  },
  {
    name: "Mr. Surendra Kumar",
    role: "Senior Frontend Developer (13+)",
    img: "/surendra.webp"
  },
  {
    name: "Dr. Deepshikhaa",
    role: "MBBS & Health Strategist",
    img: "/deepshikha.webp"
  }
];

const advisoryCommittee = [
  {
    name: "Mr. Shashi Kumar",
    desc: "Mr. Shashi Kumar is an entrepreneur, educator, and the Founder & Director of Sacred Gurukul, a DPIIT-recognized startup focused on skill development and employability.",
    img: "/Shashi_Kumar.webp"
  },
  {
    name: "Mr. Arjun Mishra",
    desc: "BAMS Scholar redefining healthcare with a blend of clinical insight, technology, and timeless Ayurvedic principles.",
    img: "/Arjun_mishra.webp"
  }
];

const Team = () => {
  const sectionRef = useRef(null);
  const coreCardsRef = useRef([]);
  const advisoryCardsRef = useRef([]);

  useGSAP(() => {
    // Header Animation
    gsap.fromTo('.team-header',
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

    // Core Team Cards Stagger Animation
    gsap.fromTo(coreCardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.core-team-grid',
          start: "top 85%",
        }
      }
    );

    // Advisory Header Animation
    gsap.fromTo('.advisory-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.advisory-header',
          start: "top 85%",
        }
      }
    );

    // Advisory Cards Stagger Animation
    gsap.fromTo(advisoryCardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.advisory-grid',
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        {/* Core Team Section */}
        <div className="team-header">
          <h2>Our Team<span className="dot">.</span></h2>
        </div>

        <div className="core-team-grid">
          {coreTeam.map((member, index) => (
            <div 
              className="team-card" 
              key={index}
              ref={el => coreCardsRef.current[index] = el}
            >
              <div className="team-img-placeholder">
                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {/* Advisory Committee Section */}
        <div className="advisory-header">
          <h3>Advisory Committee</h3>
          <p>Guided by experts from medical, psychology, and performance domains</p>
        </div>

        <div className="advisory-grid">
          {advisoryCommittee.map((member, index) => (
            <div 
              className="advisory-card" 
              key={index}
              ref={el => advisoryCardsRef.current[index] = el}
            >
              <div className="advisory-img-placeholder">
                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="advisory-info">
                <h4>{member.name}</h4>
                <p>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
