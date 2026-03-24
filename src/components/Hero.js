import React, { useState, useEffect } from 'react';

const slides = [
  '/images/AIRBNB PICS/hero1.jpg',
  '/images/AIRBNB PICS/hero2.jpg',
  '/images/AIRBNB PICS/hero3.jpg',
  '/images/AIRBNB PICS/hero4.jpg',
  '/images/AIRBNB PICS/hero5.jpg',
  '/images/hero.jpg',
];

const chips = ['🛏 5 Bedrooms', '🛁 4.5 Baths', '👨‍👩‍👧‍👦 Sleeps 12', '🏊 Private Pool'];

const Hero = () => {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: '100svh', minHeight: 620 }}>
      {slides.map((src, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-[2200ms] ease-in-out"
             style={{ opacity: i === cur ? 1 : 0, zIndex: i === cur ? 1 : 0 }}>
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay — deep navy/purple vignette matching Disney palette */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(170deg, rgba(26,31,107,0.62) 0%, rgba(26,31,107,0.25) 45%, rgba(10,8,30,0.78) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-xs font-bold tracking-widest uppercase"
             style={{ background: 'rgba(249,192,58,0.15)', border: '1px solid rgba(249,192,58,0.4)', color: '#F9C03A', backdropFilter: 'blur(8px)' }}>
          ✦ 5-Star Airbnb · Guests' Favorite
        </div>

        <h1 className="font-display font-bold text-white text-5xl md:text-7xl leading-[1.05] mb-4 max-w-4xl"
            style={{ textShadow: '0 4px 30px rgba(10,8,30,0.5)' }}>
          Your Magical<br />
          <span className="gradient-disney">Disney Escape</span><br />
          Awaits
        </h1>

        <p className="text-white/70 text-base md:text-lg font-medium mb-7 max-w-md">
          Luxury villa · private pool · game room<br />
          22 miles from Walt Disney World
        </p>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {chips.map(t => (
            <span key={t} className="text-xs font-semibold text-white/90 px-3.5 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)' }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
             target="_blank" rel="noopener noreferrer"
             className="px-8 py-4 rounded-full text-sm font-bold text-white shadow-2xl transition-all duration-200 hover:scale-105 gradient-btn">
            Book on Airbnb →
          </a>
          <a href="#gallery"
             className="px-8 py-4 rounded-full text-sm font-semibold text-white transition hover:bg-white/15"
             style={{ border: '1.5px solid rgba(255,255,255,0.35)' }}>
            View Photos
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-7 left-0 right-0 z-20 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{ height: 3, width: i === cur ? 28 : 8, background: i === cur ? '#F9C03A' : 'rgba(255,255,255,0.35)' }} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
