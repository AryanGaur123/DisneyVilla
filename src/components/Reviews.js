import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah M.',
    date: 'May 2025',
    comment: "This home exceeded all our expectations! The pool was a hit with the kids, and being so close to Disney made everything so easy. The themed rooms were beautifully done. We'll definitely be back.",
  },
  {
    name: 'Michael T.',
    date: 'April 2025',
    comment: 'Absolutely stunning property. Everything was immaculate and the amenities were top-notch. Our family of 10 had plenty of space — we loved relaxing by the pool after long days at the parks.',
  },
  {
    name: 'Jennifer L.',
    date: 'March 2025',
    comment: "We stayed here for a family reunion and couldn't have chosen a better place. Fully equipped kitchen, comfortable beds, perfect location. The host was incredibly responsive throughout.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Guest Reviews</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">What Guests Say</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-amber-400" size={16} />)}
            </div>
            <span className="text-sm font-semibold text-gray-500">5.0 · Guests' Favorite</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#FAFAF8] rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <FaStar key={j} className="text-amber-400" size={13} />)}
              </div>
              <p className="text-gray-600 font-light leading-relaxed text-sm mb-5">"{r.comment}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
                <span className="text-gray-400 text-xs">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
