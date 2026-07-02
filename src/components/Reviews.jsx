import React, { useRef, useEffect } from 'react';
import Core from 'smooothy';
import './Reviews.css';

const slidesData = [
  { text: "PraanFitness didn't just change my workout routine, it completely transformed how I understand my body's mechanics.", username: "@alex_murphy", color: '#a2c091' },
  { text: "The guided foundation program is the perfect mix of yoga and strength. I've never felt more connected to my health.", username: "@sarah_jenkins", color: '#e3e3db' },
  { text: "Having all my health records and expert advice in one unified ecosystem is a game-changer for my busy lifestyle.", username: "@david_chen", color: '#c4d7b6' },
  { text: "I upgraded to the Premium tier for the personal coaching, and the results have been absolutely phenomenal.", username: "@emily_williams", color: '#ffffff' },
  { text: "It's rare to find a platform that actually cares about your holistic health, not just your gym reps. Praan delivers.", username: "@michael_t", color: '#d9d0c1' },
  { text: "The emergency support and medical chat saved me when I had an injury. I wouldn't trust any other system now.", username: "@jessica_p", color: '#a2c091' },
  { text: "Finally, a clean, beautiful interface for tracking my progress. The attention to design and user experience is stellar.", username: "@chris_designs", color: '#e3e3db' },
];

const Reviews = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const slides = [...wrapper.children];

    const preventSelect = (e) => e.preventDefault();
    wrapper.addEventListener('selectstart', preventSelect);
    wrapper.style.userSelect = 'none';
    wrapper.style.webkitUserSelect = 'none';
    wrapper.style.touchAction = 'pan-y';

    const slider = new Core(wrapper, {
      infinite: false,
      snap: false,
      variableWidth: true,
      lerpFactor: 0.02,
      speedDecay: 0.97,
      bounceLimit: 0,
      setOffset: ({ itemWidth, totalWidth }) => {
        const isMobile = window.innerWidth <= 768;
        const gap = window.innerWidth * (isMobile ? 0.05 : 0.02);
        const lastSlideOffset = (slidesData.length - 1) * (itemWidth + gap);
        return totalWidth - lastSlideOffset;
      },
      onUpdate: (instance) => {
        const vwOffset = window.innerWidth * 0.1;

        slides.forEach((slide, i) => {
          const slideWidth = slide.offsetWidth;
          const slideLeft = slide.offsetLeft + instance.current;
          const bgColor = slidesData[i].color;

          const isLast = i === slidesData.length - 1;

          if (slideLeft < 0 && !isLast) {
            const ratio = Math.min(1, Math.abs(slideLeft) / slideWidth);
            slide.style.cssText = `
              background-color: ${bgColor};
              border: 2px solid rgba(0,0,0,0.6);
              transform-origin: left 80%;
              transform: translateX(${instance.current + Math.abs(slideLeft) + ratio * vwOffset}px) rotate(${-15 * ratio}deg) scale(${1 - ratio * 0.4});
              position: relative;
              z-index: ${i + 1};
            `;
          } else {
            slide.style.cssText = `
              background-color: ${bgColor};
              border: 2px solid rgba(0, 0, 0, 0.6);
              transform: translateX(${instance.current}px);
              z-index: ${i + 1};
            `;
          }
        });
      }
    });

    let animId;
    let wasDragging = false;
    let momentum = 0;
    const MOMENTUM_MULTIPLIER = 10;
    const MOMENTUM_DECAY = 0.96;

    function animate() {
      slider.update();

      if (slider.isDragging) {
        wasDragging = true;
        momentum = 0;
      } else if (wasDragging) {
        momentum = slider.speed * MOMENTUM_MULTIPLIER;
        wasDragging = false;
      }
      if (Math.abs(momentum) > 0.5) {
        slider.target += momentum;
        momentum *= MOMENTUM_DECAY;
        slider.target = Math.max(slider.maxScroll, Math.min(0, slider.target));
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      wrapper.removeEventListener('selectstart', preventSelect);
      slider.destroy();
    };
  }, []);

  return (
    <div className="reviews-section">
      <div className="reviews-left">
        <h2 className="reviews-title">User <br /> Stories</h2>
        <p className="reviews-subtitle">Real experiences from people who transformed their bodies and minds with PraanFitness.</p>
      </div>

      <div className="reviews-right">
        <div ref={wrapperRef} className="reviews-wrapper">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="review-slide"
              style={{
                backgroundColor: slide.color,
              }}
            >
              <p className="review-text">"{slide.text}"</p>
              <p className="review-username">{slide.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
