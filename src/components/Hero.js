import React, { useState, useEffect } from 'react';

const slides = [
  '/images/AIRBNB PICS/hero1.jpg',
  '/images/AIRBNB PICS/hero2.jpg',
  '/images/AIRBNB PICS/hero3.jpg',
  '/images/AIRBNB PICS/hero4.jpg',
  '/images/AIRBNB PICS/hero5.jpg',
  '/images/hero.jpg',
];

const Hero = () => {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: '100svh', minHeight: 620 }}>
      {/* Slides */}
      {slides.map((src, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-[2200ms] ease-in-out"
             style={{ opacity: i === cur ? 1 : 0, zIndex: i === cur ? 1 : 0 }}>
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Multi-layer overlay: dark vignette + warm tint */}
      <div className="absolute inset-0 z-10"
           style={{ background: 'linear-gradient(160deg, rgba(10,14,26,0.55) 0%, rgba(10,14,26,0.3) 40%, rgba(15,10,5,0.72) 100%)' }} />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-5 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold tracking-widest uppercase"
             style={{ background: 'rgba(245,166,35,0.18)', border: '1px solid rgba(245,166,35,0.45)', color: '#FCD34D', backdropFilter: 'blur(8px)' }}>
          ⭐ 5-Star Airbnb · Guests' Favorite
        </div>

        <h1 className="font-display font-bold text-white text-5xl md:text-7xl leading-[1.05] mb-5 max-w-4xl drop-shadow-2xl">
          Your Magical<br />
          <span className="gradient-gold">Disney Escape</span><br />
          Awaits
        </h1>

        <p className="text-white/75 text-base md:text-xl font-medium mb-8 max-w-lg leading-relaxed">
          Luxury 5-bedroom villa with private pool &amp; game room —<br className="hidden md:block" />
          just 22 miles from Walt Disney World.
        </p>

        {/* Quick-stats row */}
        <div className="flex flex-wrap justify-center gap-3 mb-9">
          {['🛏 5 Bedrooms','🛁 4.5 Baths','👨‍👩‍👧‍👦 Sleeps 12','🏊 Private Pool','🏰 22 mi to Disney'].map(t => (
            <span key={t} className="text-xs font-semibold text-white/90 px-3.5 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
             target="_blank" rel="noopener noreferrer"
             className="px-8 py-4 rounded-full text-sm font-bold text-white shadow-2xl transition-all duration-200 hover:scale-105"
             style={{ background: 'linear-gradient(135deg, #F5A623 0%, #FF6B6B 100%)' }}>
            Book on Airbnb →
          </a>
          <a href="#gallery"
             className="px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
             style={{ border: '1.5px solid rgba(255,255,255,0.4)' }}>
            View Photos
          </a>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-7 left-0 right-0 z-20 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} aria-label={`Slide ${i+1}`}
                  className="rounded-full transition-all duration-300"
                  style={{ height: 3, width: i === cur ? 28 : 8, background: i === cur ? '#F5A623' : 'rgba(255,255,255,0.4)' }} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
