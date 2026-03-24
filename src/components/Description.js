import React from 'react';

const highlights = [
  { emoji: '🛏️', label: '5 Bedrooms' },
  { emoji: '🛁', label: '4.5 Bathrooms' },
  { emoji: '🏊', label: 'Private Pool' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Sleeps 12' },
  { emoji: '🏰', label: '15 min to Disney' },
  { emoji: '🎡', label: '30 min to Universal' },
];

const Description = () => {
  return (
    <section className="py-16 px-4 bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#4ECDC4]/15 text-[#4ECDC4] font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            About the Villa
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Where Luxury Meets <span className="text-[#FF6B6B]">Magic</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-semibold">
            A brand-new (March 2025) luxury retreat in Clermont, Florida — the perfect home base for your Orlando adventure.
          </p>
        </div>

        {/* Two-column description */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 mb-8">
          <div className="grid md:grid-cols-2 gap-6 text-gray-600 font-semibold leading-relaxed">
            <p>
              Welcome to our stunning 5-bedroom, 4.5-bathroom vacation home. Located just 9.2 miles (15 minutes) from
              Disney World, this spacious retreat offers an unmatched blend of comfort, style, and convenience for groups
              of up to 12 guests.
            </p>
            <p>
              After a magical day at the parks, return to your own private oasis at 16049 Blue Wave Way. Splash in the
              private pool, gather in the game room, and wake up refreshed — ready for another day of adventure.
            </p>
          </div>
        </div>

        {/* Highlight chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 font-bold text-gray-800"
            >
              <span className="text-2xl">{h.emoji}</span>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
