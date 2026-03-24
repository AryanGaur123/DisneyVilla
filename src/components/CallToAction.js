import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-[#FFF8F0]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-5xl block mb-6">🏰✨</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          Ready to Make<br />
          <span className="text-[#FF6B6B]">Magical Memories?</span>
        </h2>
        <p className="text-gray-500 font-semibold text-base md:text-lg mb-8 max-w-xl mx-auto">
          Book our 5-bedroom luxury villa today and experience the perfect Orlando getaway — just minutes from the magic.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { val: '5★', label: 'Rating' },
            { val: '12', label: 'Guests' },
            { val: '15min', label: 'to Disney' },
            { val: '100%', label: 'Guests\' Fav' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-[#FF6B6B]">{s.val}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        <a
          href="https://www.airbnb.com/rooms/1363941275894637395"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-[#FF6B6B] text-white font-black text-lg hover:bg-[#e55555] transition shadow-xl hover:scale-105 duration-200"
        >
          Book on Airbnb
        </a>

        <p className="text-gray-400 text-sm font-semibold mt-4">Free cancellation available · Instant booking</p>
      </div>
    </section>
  );
};

export default CallToAction;
