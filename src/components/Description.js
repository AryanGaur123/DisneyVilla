import React from 'react';

const stats = [
  { val: '5',    sub: 'Bedrooms',       bg: '#FFF4E0', accent: '#F5A623' },
  { val: '4.5',  sub: 'Bathrooms',      bg: '#FFF0F0', accent: '#FF6B6B' },
  { val: '12',   sub: 'Guests',         bg: '#F0F9FF', accent: '#0EA5C9' },
  { val: '5.0★', sub: 'Airbnb Rating',  bg: '#F5F0FF', accent: '#8B5CF6' },
];

const nearbyAttractions = [
  { emoji: '🏰', name: 'Walt Disney World',    dist: '22 mi',  time: '~30 min' },
  { emoji: '🎡', name: 'Universal Studios',    dist: '28 mi',  time: '~40 min' },
  { emoji: '💧', name: 'Surfari Water Park',   dist: '4.8 mi', time: '~11 min' },
  { emoji: '🛒', name: 'Flamingo Crossings',   dist: '8.4 mi', time: '~13 min' },
];

const Description = () => {
  return (
    <section className="py-20 px-5" style={{ background: '#FFFBF5' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">About the Villa</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#0F172A' }}>
            Where Luxury Meets<br />
            <span className="gradient-gold">Orlando Magic</span>
          </h2>
          <p className="mt-4 text-base font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
            Brand-new (2025) luxury townhome at <strong style={{ color: '#0F172A' }}>16049 Blue Wave Way, Clermont, FL 34714</strong>.
            Spacious, elegantly designed, and just a short drive from all the best theme parks Florida has to offer.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map(s => (
            <div key={s.sub} className="rounded-2xl p-5 text-center" style={{ background: s.bg }}>
              <div className="font-display font-bold text-3xl mb-1" style={{ color: s.accent }}>{s.val}</div>
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#94A3B8' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Two col description */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-start">
          <div>
            <h3 className="font-display font-bold text-2xl mb-4" style={{ color: '#0F172A' }}>Your Private Oasis</h3>
            <p className="leading-relaxed font-medium text-sm mb-4" style={{ color: '#64748B' }}>
              Built in March 2025, this 2,269 sq ft luxury townhome offers 5 elegantly themed bedrooms,
              4.5 baths, and a private pool. Whether you're a family, group of friends, or celebrating a
              special occasion — this home has everything you need.
            </p>
            <p className="leading-relaxed font-medium text-sm" style={{ color: '#64748B' }}>
              After an unforgettable day at the parks, come home to your private pool, fire up the game room,
              cook a meal in the fully equipped kitchen, and recharge for tomorrow's adventure.
            </p>
          </div>
          {/* Nearby attractions */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid rgba(15,23,42,0.07)' }}>
            <div className="px-5 py-4" style={{ background: '#0F172A' }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#F5A623' }}>Nearby Attractions</span>
            </div>
            {nearbyAttractions.map((a, i) => (
              <div key={a.name}
                   className="flex items-center justify-between px-5 py-4"
                   style={{
                     background: i % 2 === 0 ? '#FFFBF5' : 'white',
                     borderBottom: i < nearbyAttractions.length - 1 ? '1px solid rgba(15,23,42,0.06)' : 'none'
                   }}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{a.emoji}</span>
                  <span className="font-semibold text-sm" style={{ color: '#0F172A' }}>{a.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold" style={{ color: '#F5A623' }}>{a.dist}</div>
                  <div className="text-xs font-medium" style={{ color: '#94A3B8' }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
