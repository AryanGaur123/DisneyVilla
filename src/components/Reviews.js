import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah M.', date: 'May 2025', avatar: 'SM', color: '#1565C0',
    comment: "This home exceeded all our expectations! The pool was a hit with the kids, and the proximity to Disney made everything so easy. The themed rooms were beautifully done. We'll definitely be back!",
  },
  {
    name: 'Michael T.', date: 'April 2025', avatar: 'MT', color: '#1E88E5',
    comment: 'Absolutely stunning property. Everything was immaculate and the amenities were top-notch. Our family of 10 had plenty of space — we loved relaxing by the pool after long days at the parks.',
  },
  {
    name: 'Jennifer L.', date: 'March 2025', avatar: 'JL', color: '#42A5F5',
    comment: "We stayed for our family reunion and couldn't have chosen a better place. Fully-equipped kitchen, comfortable beds, perfect location. Host was incredibly responsive throughout.",
  },
];

const Reviews = () => (
  <section id="reviews" className="py-16 px-5" style={{ background: '#F0F7FF' }}>
    <div className="max-w-5xl mx-auto">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <span className="section-label">What Guests Say</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: '#111827' }}>
            Guest Reviews
          </h2>
        </div>
        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl self-start md:self-auto"
             style={{ background: '#FFFBE0', border: '1.5px solid #F9C03A30' }}>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <FaStar key={i} style={{ color: '#F9C03A' }} size={14} />)}
          </div>
          <span className="text-sm font-bold" style={{ color: '#111827' }}>5.0</span>
          <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>Guests' Favorite</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="card-lift rounded-3xl p-6 flex flex-col bg-white"
               style={{ border: '1.5px solid rgba(26,31,107,0.07)', boxShadow: '0 2px 16px rgba(26,31,107,0.05)' }}>
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => <FaStar key={j} style={{ color: '#F9C03A' }} size={12} />)}
            </div>
            <p className="text-sm font-medium leading-relaxed flex-1 mb-5" style={{ color: '#4B5563' }}>
              "{r.comment}"
            </p>
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(26,31,107,0.06)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                   style={{ background: r.color }}>
                {r.avatar}
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: '#111827' }}>{r.name}</div>
                <div className="text-xs" style={{ color: '#9CA3AF' }}>{r.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Reviews;
