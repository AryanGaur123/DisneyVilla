import React from 'react';

const stats = [
  { val: '5',    sub: 'Bedrooms',      accent: '#FF5F6D', bg: '#FFF0F0' },
  { val: '4.5',  sub: 'Bathrooms',     accent: '#7B3FBE', bg: '#F5F0FF' },
  { val: '12',   sub: 'Guests',        accent: '#00B4D8', bg: '#F0FAFF' },
  { val: '5.0★', sub: 'Airbnb Rating', accent: '#F9C03A', bg: '#FFFBE0' },
];

const nearby = [
  { emoji: '🏰', name: 'Walt Disney World',   dist: '22 mi', time: '~30 min' },
  { emoji: '🎡', name: 'Universal Studios',   dist: '28 mi', time: '~40 min' },
  { emoji: '💧', name: 'Surfari Water Park',  dist: '4.8 mi', time: '~11 min' },
  { emoji: '🛒', name: 'Flamingo Crossings',  dist: '8.4 mi', time: '~13 min' },
];

const Description = () => (
  <section className="py-16 px-5" style={{ background: '#FFF9F0' }}>
    <div className="max-w-5xl mx-auto">

      {/* Sparkle divider */}
      <p className="sparkle-divider mb-10">✦ ✦ ✦</p>

      {/* Stat row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {stats.map(s => (
          <div key={s.sub} className="card-lift rounded-2xl p-5 text-center" style={{ background: s.bg }}>
            <div className="font-display font-bold text-3xl mb-1" style={{ color: s.accent }}>{s.val}</div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#9CA3AF' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Two-col */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <span className="section-label">About the Villa</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-4" style={{ color: '#111827' }}>
            Where Luxury Meets<br />
            <span className="gradient-disney">Orlando Magic</span>
          </h2>
          <p className="text-sm font-medium leading-relaxed mb-3" style={{ color: '#6B7280' }}>
            Brand-new 2025 luxury townhome at <strong style={{ color: '#111827' }}>16049 Blue Wave Way, Clermont, FL 34714</strong> —
            2,269 sq ft with 5 themed bedrooms, 4.5 baths, and a private pool. Perfect for families and groups of up to 12.
          </p>
          <p className="text-sm font-medium leading-relaxed" style={{ color: '#6B7280' }}>
            After a day at the parks, come home to your private oasis: a sparkling pool, game room,
            fully equipped kitchen, and comfortable king beds — everything you need to recharge for more magic.
          </p>
        </div>

        {/* Nearby table */}
        <div className="rounded-2xl overflow-hidden card-lift" style={{ border: '1.5px solid rgba(26,31,107,0.08)' }}>
          <div className="px-5 py-3.5" style={{ background: '#1A1F6B' }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#F9C03A' }}>
              ✦ Nearby Attractions
            </span>
          </div>
          {nearby.map((a, i) => (
            <div key={a.name}
                 className="flex items-center justify-between px-5 py-3.5"
                 style={{
                   background: i % 2 === 0 ? '#FFF9F0' : 'white',
                   borderBottom: i < nearby.length - 1 ? '1px solid rgba(26,31,107,0.05)' : 'none'
                 }}>
              <div className="flex items-center gap-3">
                <span className="text-lg">{a.emoji}</span>
                <span className="font-semibold text-sm" style={{ color: '#111827' }}>{a.name}</span>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold" style={{ color: '#FF5F6D' }}>{a.dist}</div>
                <div className="text-xs" style={{ color: '#9CA3AF' }}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Description;
