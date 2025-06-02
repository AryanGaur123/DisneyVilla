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
