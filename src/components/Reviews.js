import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah M.',
    date: 'May 2025',
    comment: "This home exceeded all our expectations! The pool was a hit with the kids, and the proximity to Disney made everything so easy. The themed rooms were beautifully done without being over-the-top. We'll definitely be back!",
    avatar: 'SM',
    color: '#FF6B6B',
  },
  {
    name: 'Michael T.',
    date: 'April 2025',
    comment: 'Absolutely stunning property. Everything was immaculate, and the amenities were top-notch. Our family of 10 had plenty of space — we loved relaxing by the pool after long days at the parks.',
    avatar: 'MT',
    color: '#F5A623',
  },
  {
    name: 'Jennifer L.',
    date: 'March 2025',
    comment: "We stayed here for our family reunion and couldn't have chosen a better place. Fully-equipped kitchen, comfortable beds, perfect location. The host was incredibly responsive throughout.",
    avatar: 'JL',
    color: '#8B5CF6',
  },
];

const Reviews = () => (
  <section id="reviews" className="py-20 px-5" style={{ background: '#FFFBF5' }}>
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <span className="section-label">What Guests Say</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color: '#0F172A' }}>
            Guest Reviews
          </h2>
        </div>
        {/* aggregate badge */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
             style={{ background: '#FFF4E0', border: '1.5px solid #F5A62330' }}>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <FaStar key={i} style={{ color: '#F5A623' }} size={15} />)}
          </div>
          <div>
            <div className="font-bold text-sm" style={{ color: '#0F172A' }}>5.0 / 5.0</div>
            <div className="text-xs font-medium" style={{ color: '#94A3B8' }}>Guests' Favorite</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-3xl p-6 flex flex-col" style={{ background: 'white', border: '1.5px solid rgba(15,23,42,0.07)', boxShadow: '0 4px 24px rgba(15,23,42,0.05)' }}>
            <FaQuoteLeft size={18} className="mb-4" style={{ color: r.color + '60' }} />
            <p className="text-sm font-medium leading-relaxed flex-1 mb-6" style={{ color: '#475569' }}>
              "{r.comment}"
            </p>
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                   style={{ background: r.color }}>
                {r.avatar}
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: '#0F172A' }}>{r.name}</div>
                <div className="text-xs font-medium" style={{ color: '#94A3B8' }}>{r.date}</div>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, j) => <FaStar key={j} style={{ color: '#F5A623' }} size={11} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
