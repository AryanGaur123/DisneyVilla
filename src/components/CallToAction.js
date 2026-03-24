import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">Ready to Book?</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
          Your Orlando Escape<br />Starts Here
        </h2>
        <p className="text-white/60 font-light text-base md:text-lg mb-10 max-w-xl mx-auto">
          5-bedroom luxury villa with private pool, game room, and everything your family needs —
          just 15 minutes from Disney World.
        </p>
        <a
          href="https://www.airbnb.com/rooms/1363941275894637395"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 transition shadow-2xl tracking-wide"
        >
          Book on Airbnb
        </a>
        <p className="text-white/30 text-xs font-medium mt-5">Free cancellation available · Instant booking</p>
      </div>
    </section>
  );
};

export default CallToAction;
