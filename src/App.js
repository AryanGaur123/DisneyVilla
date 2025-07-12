import React from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import Amenities from './components/Amenities';
import ImageCarousel from './components/ImageCarousel';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      <main>
        <section id="hero" className="mb-0">
  <Hero />
</section>
{/* 5 Star + Airbnb info below banner */}
<section className="w-full bg-white py-3 shadow-sm border-b border-gray-100 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center">
  <span className="inline-flex items-center gap-1 text-lg md:text-xl font-semibold text-pink-600">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor" className="inline-block"><path d="M16 3c-2.5 0-4.6 1.3-6 3.2C7.6 4.3 5.5 3 3 3 1.3 3 0 4.3 0 6c0 2.5 2.1 4.6 4.8 7.5C7.7 16.1 11.5 20.2 16 27c4.5-6.8 8.3-10.9 11.2-13.5C29.9 10.6 32 8.5 32 6c0-1.7-1.3-3-3-3-2.5 0-4.6 1.3-6 3.2C20.6 4.3 18.5 3 16 3zm0 2a4.9 4.9 0 0 1 4.8 4.8c0 2.6-2.1 4.7-4.8 4.7s-4.8-2.1-4.8-4.7A4.9 4.9 0 0 1 16 5zm-8.8 1C4.3 6 3 7.3 3 9c0 1.6 1.3 2.9 3.2 4.8C9.5 16.1 13.2 20.2 16 25.3c2.8-5.1 6.5-9.2 9.8-11.5C27.7 11.9 29 10.6 29 9c0-1.7-1.3-3-3-3-2.5 0-4.6 1.3-6 3.2C20.6 6.3 18.5 5 16 5zm0 2a2.9 2.9 0 0 0-2.8 2.8c0 1.6 1.3 2.8 2.8 2.8s2.8-1.2 2.8-2.8A2.9 2.9 0 0 0 16 7z"/></svg>
    5 Star Airbnb
  </span>
  <span className="inline-block text-gray-600 text-base md:text-lg font-medium">Guests' Favorite</span>
  <span className="inline-block text-blue-900 text-base md:text-lg font-semibold">5 Bedroom, 4.5 Bath, Sleeps 12</span>
</section>
        
        <section id="description" className="mb-0">
          <Description />
        </section>
        
        <section id="amenities" className="mb-0">
          <Amenities />
        </section>
        
        <section id="gallery" className="mb-0">
          <ImageCarousel />
        </section>
        
        <section id="reviews" className="mb-0">
  <Reviews />
</section>
        
        <section id="cta" className="mb-0">
          <CallToAction />
        </section>
      </main>
    </div>
  );
}

export default App;
