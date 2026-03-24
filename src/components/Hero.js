import React, { useState, useEffect } from 'react';

const heroImages = [
  '/images/AIRBNB PICS/hero1.jpg',
  '/images/AIRBNB PICS/hero2.jpg',
  '/images/AIRBNB PICS/hero3.jpg',
  '/images/AIRBNB PICS/hero4.jpg',
  '/images/AIRBNB PICS/hero5.jpg',
  '/images/hero.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {heroImages.map((src, i) => (
        <div key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: i === current ? 1 : 0 }}>
          <img src={src} alt="Villa" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 100%)' }} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Clermont, Florida · 15 min from Disney
        </p>
        <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 max-w-4xl drop-shadow-lg">
          Modern Luxury Villa<br />
          <span style={{ color: '#FFD93D' }}>Near the Magic</span>
        </h1>
        <p className="text-white/80 text-base md:text-lg font-light mb-8 max-w-lg">
          5 bedrooms · 4.5 baths · sleeps 12 · private pool
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
            target="_blank" rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 transition shadow-xl tracking-wide">
            Book on Airbnb
          </a>
          <a href="#gallery"
            className="px-8 py-3.5 rounded-full border border-white/50 text-white text-sm font-medium hover:bg-white/10 transition tracking-wide">
            View Photos
          </a>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-7 left-0 right-0 z-20 flex justify-center gap-1.5">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-8' : 'bg-white/40 w-2'}`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
