import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.about-image-wrapper',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo('.about-text-content > *',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: aboutRef });

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src="/deepshikha.png" alt="Dr. Deepshikhaa" className="about-image" />
          <div className="about-image-decoration"></div>
        </div>
        <div className="about-text-content">
          <span className="about-subtitle">Founder & Visionary</span>
          <h2 className="about-title">Dr. Deepshikhaa</h2>
          <blockquote className="about-quote">
            “PRAAN is not just fitness — it is a complete human transformation system.”
          </blockquote>
          <p className="about-description">
            PRAAN was built to bridge the gap between physical health, mental wellness, and performance optimization. Our goal is to create a system that transforms how individuals approach life, fitness, and discipline.
          </p>
          <p className="about-description">
            With a strong clinical foundation and real-world expertise, PRAAN is redefining health and performance standards across India.
          </p>
        </div>
      </div>
    </section>
  );
}
