import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ScrollingCards.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingCards() {
  const container = useRef();
  
  useGSAP(() => {
    const stickyCards = gsap.utils.toArray(".card");
    const frontStickyCard = gsap.utils.toArray(".card-front")[0];
    const backStickyCards = gsap.utils.toArray(".card-back");
    const heroHeadline = gsap.utils.toArray(".hero-content")[0];
    const sideTexts = gsap.utils.toArray(".side-text");
    const stickyCardCount = backStickyCards.length;

    const CARDS_ENTER_END = 100;
    const CARD_FLIP_TRIGGER = 200;
    const CARD_DISMISS_START = 300;
    const CARD_DISMISS_DURATION = 100;
    const TOTAL_SCROLL_SVH =
      CARD_DISMISS_START + stickyCardCount * CARD_DISMISS_DURATION;

    const svhToProgress = (svh) => svh / TOTAL_SCROLL_SVH;
    const totalScroll = window.innerHeight * (TOTAL_SCROLL_SVH / 100);

    const cardFlipTiltAngles = [-10, -20, -5, 10];
    const cardDismissTiltAngles = [-50, -60, -45, 50];

    const cardDismissRanges = Array.from({ length: stickyCardCount }, (_, i) => {
      const dismissOrder = stickyCardCount - 1 - i;
      return [
        svhToProgress(CARD_DISMISS_START + dismissOrder * CARD_DISMISS_DURATION),
        svhToProgress(
          CARD_DISMISS_START + (dismissOrder + 1) * CARD_DISMISS_DURATION,
        ),
      ];
    });

    gsap.set(frontStickyCard, { rotationY: 0 });
    gsap.set(backStickyCards, { rotationY: -180 });

    let isFlipped = false;

    const revealBackCards = () => {
      gsap.to(frontStickyCard, {
        rotationY: 180,
        duration: 1,
        ease: "elastic.out(1,0.5)",
      });
      backStickyCards.forEach((card, i) => {
        gsap.to(card, {
          rotationY: 0,
          rotationZ: cardFlipTiltAngles[i],
          duration: 1,
          ease: "elastic.out(1,0.5)",
        });
      });
    };

    const concealBackCards = () => {
      gsap.to(frontStickyCard, {
        rotationY: 0,
        duration: 1,
        ease: "elastic.out(1,0.5)",
      });
      backStickyCards.forEach((card) => {
        gsap.to(card, {
          rotationY: -180,
          rotationZ: 0,
          duration: 1,
          ease: "elastic.out(1,0.5)",
        });
      });
    };

    ScrollTrigger.create({
      trigger: ".scrolling-cards-wrapper .hero",
      start: "top top",
      end: `+=${totalScroll}px`,
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate: ({ progress }) => {
        const enterProgress = gsap.utils.clamp(
          0,
          1,
          gsap.utils.mapRange(0, svhToProgress(CARDS_ENTER_END), 0, 1, progress),
        );

        gsap.set(stickyCards, {
          xPercent: -50,
          yPercent: gsap.utils.mapRange(0, 1, -10, -80, enterProgress),
        });
        gsap.set(heroHeadline, {
          y: `${gsap.utils.mapRange(0, 1, 0, -100, enterProgress)}%`,
        });

        const [lastDismissStart, lastDismissEnd] = cardDismissRanges[0];
        const lastCardDismissProgress = gsap.utils.clamp(
          0,
          1,
          gsap.utils.mapRange(lastDismissStart, lastDismissEnd, 0, 1, progress)
        );

        gsap.set(sideTexts, {
          y: gsap.utils.mapRange(0, 1, window.innerHeight * 0.8, 0, enterProgress) + 
             gsap.utils.mapRange(0, 1, 0, -window.innerHeight * 1.5, lastCardDismissProgress),
          opacity: enterProgress
        });

        if (progress > svhToProgress(CARD_FLIP_TRIGGER) && !isFlipped) {
          revealBackCards();
          isFlipped = true;
        } else if (progress <= svhToProgress(CARD_FLIP_TRIGGER) && isFlipped) {
          concealBackCards();
          isFlipped = false;
        }

        backStickyCards.forEach((card, i) => {
          const [dismissStart, dismissEnd] = cardDismissRanges[i];
          const dismissProgress = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(dismissStart, dismissEnd, 0, 1, progress),
          );
          gsap.set(card, {
            xPercent: -50,
            yPercent: gsap.utils.mapRange(0, 1, -80, -250, dismissProgress),
            rotation: gsap.utils.mapRange(
              0,
              1,
              cardFlipTiltAngles[i],
              cardDismissTiltAngles[i],
              dismissProgress,
            ),
          });
        });
      },
    });
    
    // Refresh ScrollTrigger on mount just in case there are layout shifts
    ScrollTrigger.refresh();
  }, { scope: container });

  return (
    <div className="scrolling-cards-wrapper" ref={container}>
      <section className="hero">
        <div className="hero-content">
          <h1 className="sc-h1">PRAAN Is A Human Performance System.</h1>
        </div>

        <div className="side-text left-side-text">
          Beyond training.<br/>
          Praan begins where traditional fitness stops.
        </div>
        
        <div className="side-text right-side-text">
          Personalized by data.<br/>
          Guided by doctors.<br/>
          Improved through progress.
        </div>

        <div className="sticky-cards">
          <div className="card card-front" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" alt="Ecosystem" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' }} />
            <h3 className="sc-h3" style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.5rem)', lineHeight: '1.2', margin: 0, textTransform: 'uppercase' }}>
              Not just a gym.<br/>
              Not just a clinic.<br/>
              A complete performance ecosystem.
            </h3>
          </div>


          <div className="card card-back" id="card-2">
            <h3 className="sc-h3">AI Optimization</h3>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="AI Optimization" style={{ width: '100%', height: '140px', borderRadius: '10px', objectFit: 'cover', margin: '1rem 0' }} />
            <p className="sc-p">
              Wearable tracking, progress reports, smart recommendations, and continuous improvement.
            </p>
          </div>
          <div className="card card-back" id="card-3">
            <h3 className="sc-h3">Medical Intelligence</h3>
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" alt="Medical Intelligence" style={{ width: '100%', height: '140px', borderRadius: '10px', objectFit: 'cover', margin: '1rem 0' }} />
            <p className="sc-p">
              Doctor-backed insights, health assessments, diagnostics, and safer personalized plans.
            </p>
          </div>
          <div className="card card-back" id="card-4">
            <h3 className="sc-h3">Physical Training</h3>
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" alt="Physical Training" style={{ width: '100%', height: '140px', borderRadius: '10px', objectFit: 'cover', margin: '1rem 0' }} />
            <p className="sc-p">
              Gym, yoga, personal coaching, structured workouts, and guided transformation programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
