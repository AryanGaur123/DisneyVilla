import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah M.',
    date: 'May 2025',
    rating: 5,
    comment: 'This home exceeded all our expectations! The pool was a hit with the kids, and the proximity to Disney made our vacation so convenient. The themed rooms were beautifully done. We\'ll definitely be back!',
    emoji: '🌟',
  },
  {
    name: 'Michael T.',
    date: 'April 2025',
    rating: 5,
    comment: 'Absolutely stunning property. Everything was immaculate, and the amenities were top-notch. Our family of 10 had plenty of space, and we loved relaxing by the pool after long days at the parks.',
    emoji: '🏊',
  },
  {
    name: 'Jennifer L.',
    date: 'March 2025',
    rating: 5,
    comment: 'We stayed here for our family reunion and couldn\'t have chosen a better place. The kitchen is fully equipped, beds are comfortable, and the location is perfect. Highly recommend!',
    emoji: '❤️',
  },
];

const cardColors = [
  { border: '#FF6B6B', bg: '#FF6B6B10' },
  { border: '#4ECDC4', bg: '#4ECDC410' },
  { border: '#A855F7', bg: '#A855F710' },
];

const Reviews = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#FFD93D]/20 text-[#d4a900] font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            ⭐ Guests Love It
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            What Guests <span className="text-[#FFD93D]">Are Saying</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 flex flex-col gap-4"
              style={{ background: cardColors[i].bg, border: `2px solid ${cardColors[i].border}20` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className="text-[#FFD93D]" size={16} />
                  ))}
                </div>
                <span className="text-2xl">{r.emoji}</span>
              </div>
              <p className="text-gray-700 font-semibold leading-relaxed text-sm flex-1">
                "{r.comment}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-black text-gray-800">{r.name}</span>
                <span className="text-gray-400 text-sm font-semibold">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
