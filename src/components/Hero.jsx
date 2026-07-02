import React from 'react';

export default function Hero() {
  return (
    <section style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <img 
        src="/hero.png" 
        alt="Hero" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
      />
    </section>
  );
}
