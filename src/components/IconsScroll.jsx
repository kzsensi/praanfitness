import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './IconsScroll.css';

import icon1 from '../assets/icons/icon_1.webp';
import icon2 from '../assets/icons/icon_2.webp';
import icon3 from '../assets/icons/icon_3.webp';
import icon4 from '../assets/icons/icon_4.webp';
import icon5 from '../assets/icons/icon_5.webp';

gsap.registerPlugin(ScrollTrigger);

const featureData = [
  { left: "Health Tracking", right: "Real-time vitals, biomarkers, wearable integration, AI reports." },
  { left: "Personalized Plans", right: "Fitness, diet, recovery, and wellness plans tailored to your body." },
  { left: "Doctor Access", right: "Consult doctors and certified health professionals when needed." },
  { left: "PRAAN Digital Health ID", right: "Securely store and share reports, records, and health history." },
  { left: "24x7 Support", right: "Medical help, fitness guidance, and emergency support via chat and call." }
];

export default function IconsScroll() {
  const container = useRef();
  const heroSection = useRef();
  
  // Create a ref to store cloned elements so we don't use window object
  const duplicatesRef = useRef([]);

  useGSAP(() => {
    const animatedIcons = gsap.utils.toArray('.animated-icons')[0];
    const iconElements = gsap.utils.toArray('.animated-icon');
    const textSegments = gsap.utils.toArray('.text-segment');
    const placeholders = gsap.utils.toArray('.placeholder-icon');
    const heroHeader = gsap.utils.toArray('.hero-header')[0];
    
    // Side rails
    const leftRailItems = gsap.utils.toArray('.left-rail .rail-item');
    const rightRailItems = gsap.utils.toArray('.right-rail .rail-item');
    const sideRails = gsap.utils.toArray('.side-rail');

    const textAnimationOrder = [];
    textSegments.forEach((segment, index) => {
      textAnimationOrder.push({ segment, originalIndex: index });
    });

    for (let i = textAnimationOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [textAnimationOrder[i], textAnimationOrder[j]] = [
        textAnimationOrder[j],
        textAnimationOrder[i],
      ];
    }

    const isMobile = window.innerWidth <= 1000;
    const headerIconSize = isMobile ? 24 : 40;
    
    let currentIconSize = 100;
    if (iconElements[0]) {
      currentIconSize = iconElements[0].getBoundingClientRect().width || 100;
    }
    const exactScale = headerIconSize / currentIconSize;
    
    const scrollEnd = window.innerHeight * 5;

    ScrollTrigger.create({
      trigger: heroSection.current,
      start: 'top top',
      end: `+=${scrollEnd}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Side Rails Carousel Animation with Arc Path
        // Map from -1 to 4 so the very first item (0) starts below the screen and smoothly scrolls up into view immediately!
        const activeIndex = gsap.utils.mapRange(0, 1, -1.5, featureData.length - 1, progress);

        const curveStrength = 100;
        const itemGap = 150;

        leftRailItems.forEach((item, i) => {
          const distance = i - activeIndex;
          const abs = Math.abs(distance);
          
          const y = distance * itemGap;
          
          const scale = Math.max(0.5, 1 - abs * 0.25);
          const opacity = Math.max(0, 1 - abs * 0.38);
          const blurValue = abs * 0.5;

          const leftX = -1 * curveStrength * Math.pow(abs, 1.35);
          const rightX = 1 * curveStrength * Math.pow(abs, 1.35);
          
          let bgOpacity = 0;
          if (abs <= 0.5) {
            bgOpacity = gsap.utils.mapRange(0, 0.5, 0.08, 0, abs);
          }
          const bgColor = `rgba(128, 128, 128, ${bgOpacity})`;

          gsap.set(item, { 
            x: leftX, 
            y: y, 
            scale: scale, 
            opacity: opacity, 
            filter: `blur(${blurValue}px)`,
            backgroundColor: bgColor 
          });

          gsap.set(rightRailItems[i], { 
            x: rightX, 
            y: y, 
            scale: scale, 
            opacity: opacity, 
            filter: `blur(${blurValue}px)`,
            backgroundColor: bgColor 
          });
        });

        textSegments.forEach((segment) => {
          gsap.set(segment, { opacity: 0 });
        });

        if (progress <= 0.3) {
          const moveProgress = progress / 0.3;
          const containerMoveY = -window.innerHeight * 0.3 * moveProgress;

          // Note: heroHeader is left alone here to stay pinned as requested

          if (duplicatesRef.current.length > 0) {
            duplicatesRef.current.forEach((duplicate) => {
              if (duplicate.parentNode) duplicate.parentNode.removeChild(duplicate);
            });
            duplicatesRef.current = [];
          }

          gsap.set(animatedIcons, {
            x: 0,
            y: containerMoveY,
            scale: 1,
            opacity: 1,
          });

          iconElements.forEach((icon, index) => {
            const staggerDelay = index * 0.1;
            const iconStart = staggerDelay;
            const iconEnd = staggerDelay + 0.5;

            const iconProgress = gsap.utils.mapRange(iconStart, iconEnd, 0, 1, moveProgress);
            const clampedProgress = Math.max(0, Math.min(1, iconProgress));

            const startOffset = -containerMoveY;
            const individualY = startOffset * (1 - clampedProgress);

            gsap.set(icon, { x: 0, y: individualY });
          });
        } else if (progress <= 0.6) {
          const scaleProgress = (progress - 0.3) / 0.3;

          if (scaleProgress >= 0.5) {
            heroSection.current.style.backgroundColor = '#f6f4f4';
            heroHeader.style.color = '#000000';
            sideRails.forEach(r => r.style.color = '#000000');
          } else {
            heroSection.current.style.backgroundColor = '#000000';
            heroHeader.style.color = '#e3e3db';
            sideRails.forEach(r => r.style.color = '#e3e3db');
          }

          if (duplicatesRef.current.length > 0) {
            duplicatesRef.current.forEach((duplicate) => {
              if (duplicate.parentNode) duplicate.parentNode.removeChild(duplicate);
            });
            duplicatesRef.current = [];
          }

          const targetCenterY = window.innerHeight / 2;
          const targetCenterX = window.innerWidth / 2;
          const containerRect = animatedIcons.getBoundingClientRect();
          const currentCenterX = containerRect.left + containerRect.width / 2;
          const currentCenterY = containerRect.top + containerRect.height / 2;
          const deltaX = (targetCenterX - currentCenterX) * scaleProgress;
          const deltaY = (targetCenterY - currentCenterY) * scaleProgress;
          const baseY = -window.innerHeight * 0.3;
          const currentScale = 1 + (exactScale - 1) * scaleProgress;

          gsap.set(animatedIcons, {
            x: deltaX,
            y: baseY + deltaY,
            scale: currentScale,
            opacity: 1,
          });

          iconElements.forEach((icon) => gsap.set(icon, { x: 0, y: 0 }));
        } else if (progress <= 0.75) {
          const moveProgress = (progress - 0.6) / 0.15;
          heroSection.current.style.backgroundColor = '#f6f4f4';
          heroHeader.style.color = '#000000';
          sideRails.forEach(r => r.style.color = '#000000');

          const targetCenterY = window.innerHeight / 2;
          const targetCenterX = window.innerWidth / 2;
          const containerRect = animatedIcons.getBoundingClientRect();
          const currentCenterX = containerRect.left + containerRect.width / 2;
          const currentCenterY = containerRect.top + containerRect.height / 2;
          const deltaX = targetCenterX - currentCenterX;
          const deltaY = targetCenterY - currentCenterY;
          const baseY = -window.innerHeight * 0.3;

          gsap.set(animatedIcons, {
            x: deltaX,
            y: baseY + deltaY,
            scale: exactScale,
            opacity: 0,
          });

          iconElements.forEach((icon) => gsap.set(icon, { x: 0, y: 0 }));

          if (duplicatesRef.current.length === 0) {
            iconElements.forEach((icon) => {
              const duplicate = icon.cloneNode(true);
              duplicate.className = 'duplicate-icon';
              duplicate.style.position = 'absolute';
              duplicate.style.width = headerIconSize + 'px';
              duplicate.style.height = headerIconSize + 'px';
              // Append to heroSection instead of body
              heroSection.current.appendChild(duplicate);
              duplicatesRef.current.push(duplicate);
            });
          }

          duplicatesRef.current.forEach((duplicate, index) => {
            if (index < placeholders.length) {
              const iconRect = iconElements[index].getBoundingClientRect();
              const startCenterX = iconRect.left + iconRect.width / 2;
              const startCenterY = iconRect.top + iconRect.height / 2;
              
              const heroRect = heroSection.current.getBoundingClientRect();
              
              const startLocalX = startCenterX - heroRect.left;
              const startLocalY = startCenterY - heroRect.top;

              const targetRect = placeholders[index].getBoundingClientRect();
              const targetCenterX = targetRect.left + targetRect.width / 2;
              const targetCenterY = targetRect.top + targetRect.height / 2;
              
              const targetLocalX = targetCenterX - heroRect.left;
              const targetLocalY = targetCenterY - heroRect.top;

              const moveX = targetLocalX - startLocalX;
              const moveY = targetLocalY - startLocalY;

              let currentX = 0;
              let currentY = 0;

              if (moveProgress <= 0.5) {
                const verticalProgress = moveProgress / 0.5;
                currentY = moveY * verticalProgress;
              } else {
                const horizontalProgress = (moveProgress - 0.5) / 0.5;
                currentY = moveY;
                currentX = moveX * horizontalProgress;
              }

              const finalLocalX = startLocalX + currentX;
              const finalLocalY = startLocalY + currentY;

              duplicate.style.left = finalLocalX - headerIconSize / 2 + 'px';
              duplicate.style.top = finalLocalY - headerIconSize / 2 + 'px';
              duplicate.style.opacity = '1';
              duplicate.style.display = 'flex';
            }
          });
        } else {
          heroSection.current.style.backgroundColor = '#f6f4f4';
          heroHeader.style.color = '#000000';
          sideRails.forEach(r => r.style.color = '#000000');
          gsap.set(animatedIcons, { opacity: 0 });

          duplicatesRef.current.forEach((duplicate, index) => {
            if (index < placeholders.length) {
              const heroRect = heroSection.current.getBoundingClientRect();
              const targetRect = placeholders[index].getBoundingClientRect();
              
              const targetCenterX = targetRect.left + targetRect.width / 2;
              const targetCenterY = targetRect.top + targetRect.height / 2;
              
              const targetLocalX = targetCenterX - heroRect.left;
              const targetLocalY = targetCenterY - heroRect.top;

              duplicate.style.left = targetLocalX - headerIconSize / 2 + 'px';
              duplicate.style.top = targetLocalY - headerIconSize / 2 + 'px';
              duplicate.style.opacity = '1';
              duplicate.style.display = 'flex';
            }
          });

          textAnimationOrder.forEach((item, randomIndex) => {
            const segmentStart = 0.75 + randomIndex * 0.03;
            const segmentEnd = segmentStart + 0.015;

            const segmentProgress = gsap.utils.mapRange(segmentStart, segmentEnd, 0, 1, progress);
            const clampedProgress = Math.max(0, Math.min(1, segmentProgress));

            gsap.set(item.segment, { opacity: clampedProgress });
          });
        }
      },
    });

    return () => {
      // Cleanup
      if (duplicatesRef.current.length > 0) {
        duplicatesRef.current.forEach((duplicate) => {
          if (duplicate.parentNode) duplicate.parentNode.removeChild(duplicate);
        });
      }
    };
  }, { scope: container });

  return (
    <div className="icons-scroll-wrapper" ref={container}>
      <section className="hero" ref={heroSection}>
        <div className="hero-header">
          <h1>Everything your perfomance needs.</h1>
          <p>In one connected system.</p>
        </div>
        
        {/* Left Rail Carousel */}
        <div className="side-rail left-rail">
          {featureData.map((item, index) => (
            <div key={`left-${index}`} className="rail-item">
              <h3>{item.left}</h3>
            </div>
          ))}
        </div>
        
        {/* Right Rail Carousel */}
        <div className="side-rail right-rail">
          {featureData.map((item, index) => (
            <div key={`right-${index}`} className="rail-item">
              <p>{item.right}</p>
            </div>
          ))}
        </div>



        <div className="animated-icons">
          <div className="animated-icon icon-1">
            <img src={icon1} alt="" />
          </div>
          <div className="animated-icon icon-2">
            <img src={icon2} alt="" />
          </div>
          <div className="animated-icon icon-3">
            <img src={icon3} alt="" />
          </div>
          <div className="animated-icon icon-4">
            <img src={icon4} alt="" />
          </div>
          <div className="animated-icon icon-5">
            <img src={icon5} alt="" />
          </div>
        </div>
        <h1 className="animated-text">
          <div className="placeholder-icon"></div>
          <span className="text-segment">Understand your body </span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">follow a plan built for you </span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">connect with the </span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">right experts store your health in one place </span>
          <div className="placeholder-icon"></div>
          <span className="text-segment">and move forward with constant support.</span>
        </h1>
      </section>

      {/* Mobile Combined Rail - Normal Static Flow */}
      <div className="mobile-static-rail">
        {featureData.map((item, index) => (
          <div key={`mob-${index}`} className="mobile-rail-item">
            <p><strong>{item.left} :</strong> {item.right}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
