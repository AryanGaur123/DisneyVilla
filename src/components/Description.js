import React from 'react';

const stats = [
  { val: '5', label: 'Bedrooms' },
  { val: '4.5', label: 'Bathrooms' },
  { val: '12', label: 'Guests' },
  { val: '5★', label: 'Airbnb Rating' },
];

const Description = () => {
  return (
    <section className="py-20 px-6 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">About the Villa</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
              Where Comfort Meets<br />the Magic of Orlando
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 font-light">
              Built in March 2025, this brand-new luxury vacation home sits at 16049 Blue Wave Way in Clermont, Florida —
              just 9.2 miles from Walt Disney World. Designed for families and groups up to 12.
            </p>
            <p className="text-gray-500 leading-relaxed font-light">
              After a day at the parks, return to your private oasis: a resort-style pool, fully equipped kitchen,
              game room, and elegantly themed bedrooms. Everything you need, nothing you don't.
            </p>
            <div className="mt-8">
              <a href="https://www.airbnb.com/rooms/1363941275894637395"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-500 transition">
                View on Airbnb →
              </a>
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="font-display text-3xl font-bold text-gray-900 mb-1">{s.val}</div>
                <div className="text-xs font-semibold tracking-widest uppercase text-gray-400">{s.label}</div>
              </div>
            ))}
            <div className="col-span-2 bg-gray-900 rounded-2xl p-6 text-center">
              <div className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Distance to Disney</div>
              <div className="font-display text-2xl font-bold text-white">15 min · 9.2 mi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
