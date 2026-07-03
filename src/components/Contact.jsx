import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.contact-item',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: contactRef });

  return (
    <section id="contact" className="contact-info-section" ref={contactRef}>
      <div className="contact-info-container">
        <div className="contact-header contact-item">
          <h2 className="contact-journey-title">Contact Us</h2>
          <p className="contact-intro">Begin your transformation with us.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <p className="contact-value">Mithapur, India</p>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <p className="contact-value">+91 7654746182</p>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <p className="contact-value">praanfitness@gmail.com</p>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">Hours</span>
            <p className="contact-value">Mon–Sat: 9 AM – 8 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
