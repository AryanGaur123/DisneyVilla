import React, { useState, useEffect } from 'react';

const heroImages = [
  { src: '/images/AIRBNB PICS/hero1.jpg', alt: 'Villa Exterior' },
  { src: '/images/AIRBNB PICS/hero2.jpg', alt: 'Private Pool' },
  { src: '/images/AIRBNB PICS/hero3.jpg', alt: 'Living Room' },
  { src: '/images/AIRBNB PICS/hero4.jpg', alt: 'Master Bedroom' },
  { src: '/images/AIRBNB PICS/hero5.jpg', alt: 'Kitchen' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[92vh] min-h-[560px] overflow-hidden">
      {/* Slideshow */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Pill badge */}
        <span className="inline-flex items-center gap-2 bg-[#FFD93D] text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full mb-5 shadow-lg">
          ⭐ 5-Star Airbnb · Guests' Favorite
        </span>

        <h1 className="text-white font-black text-4xl md:text-6xl leading-tight drop-shadow-lg mb-4 max-w-3xl">
          Your Dream Vacation<br />
          <span className="text-[#FFD93D]">Near Disney</span> Awaits
        </h1>

        <p className="text-white/90 text-lg md:text-xl font-semibold mb-8 drop-shadow max-w-xl">
          Luxury 5-bedroom villa — private pool, game room & more. Just 15 min from the magic.
        </p>

        {/* Stat chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { emoji: '🛏️', label: '5 Bedrooms' },
            { emoji: '🛁', label: '4.5 Baths' },
            { emoji: '👨‍👩‍👧‍👦', label: 'Sleeps 12' },
            { emoji: '🏊', label: 'Private Pool' },
          ].map((chip) => (
            <span key={chip.label} className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full border border-white/30">
              {chip.emoji} {chip.label}
            </span>
          ))}
        </div>

        <a
          href="https://www.airbnb.com/rooms/1363941275894637395"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-[#FF6B6B] text-white font-black text-lg hover:bg-[#e55555] transition shadow-2xl hover:scale-105 duration-200"
        >
          Book Now on Airbnb
        </a>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#FFD93D] w-6' : 'bg-white/50'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
