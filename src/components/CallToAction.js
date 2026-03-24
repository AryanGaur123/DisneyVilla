import React from 'react';

const CallToAction = () => (
  <section id="cta" className="py-24 px-5 relative overflow-hidden" style={{ background: '#0F172A' }}>
    {/* Decorative blobs */}
    <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
         style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
         style={{ background: 'radial-gradient(circle, rgba(255,107,107,0.12) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />

    <div className="relative max-w-3xl mx-auto text-center">
      <span className="text-4xl block mb-5">🏰</span>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
           style={{ background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)', color: '#FCD34D' }}>
        ⭐ 5-Star · Guests' Favorite
      </div>
      <h2 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-5">
        Make Unforgettable<br />
        <span className="gradient-gold">Memories Together</span>
      </h2>
      <p className="text-base font-medium mb-10 max-w-xl mx-auto leading-relaxed"
         style={{ color: 'rgba(255,255,255,0.55)' }}>
        5 bedrooms · 4.5 baths · private pool · game room ·&nbsp;
        just 22 miles from Walt Disney World in Clermont, FL.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <a href="https://www.airbnb.com/rooms/1363941275894637395"
           target="_blank" rel="noopener noreferrer"
           className="px-10 py-4 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 shadow-2xl"
           style={{ background: 'linear-gradient(135deg, #F5A623 0%, #FF6B6B 100%)' }}>
          Book on Airbnb →
        </a>
        <a href="#map"
           className="px-10 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200"
           style={{ border: '1.5px solid rgba(255,255,255,0.2)' }}>
          View Location
        </a>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', fontWeight: 500 }}>
        Free cancellation available · Instant booking
      </p>
    </div>
  </section>
);

export default CallToAction;
