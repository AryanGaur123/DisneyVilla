import React from 'react';

const CallToAction = () => (
  <section id="cta" className="py-24 px-5 relative overflow-hidden" style={{ background: '#1A1F6B' }}>
    {/* Decorative glow blobs */}
    <div className="absolute pointer-events-none" style={{
      top: '-80px', left: '-80px', width: 360, height: 360, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(249,192,58,0.14) 0%, transparent 70%)'
    }} />
    <div className="absolute pointer-events-none" style={{
      bottom: '-80px', right: '-80px', width: 360, height: 360, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(123,63,190,0.2) 0%, transparent 70%)'
    }} />
    <div className="absolute pointer-events-none" style={{
      top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 65%)'
    }} />

    <div className="relative max-w-2xl mx-auto text-center">
      <div className="text-4xl mb-5">🏰✨</div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
           style={{ background: 'rgba(249,192,58,0.12)', border: '1px solid rgba(249,192,58,0.3)', color: '#F9C03A' }}>
        ✦ 5-Star · Guests' Favorite
      </div>

      <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
        Make Unforgettable<br />
        <span className="gradient-disney">Memories Together</span>
      </h2>
      <p className="text-base font-medium mb-9 max-w-lg mx-auto"
         style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
        5 bedrooms · 4.5 baths · private pool · game room<br />
        22 miles from Walt Disney World · Clermont, FL
      </p>

      <a href="https://www.airbnb.com/rooms/1363941275894637395"
         target="_blank" rel="noopener noreferrer"
         className="inline-block px-10 py-4 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 shadow-2xl gradient-btn-gold">
        Book on Airbnb →
      </a>

      <p className="mt-4 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.22)' }}>
        Free cancellation available · Instant booking
      </p>
    </div>
  </section>
);

export default CallToAction;
