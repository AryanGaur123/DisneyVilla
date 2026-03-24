import React from 'react';
import './App.css';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Description  from './components/Description';
import Amenities    from './components/Amenities';
import ImageCarousel from './components/ImageCarousel';
import Map          from './components/Map';
import Reviews      from './components/Reviews';
import CallToAction from './components/CallToAction';
import Footer       from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      <main>
        <section id="hero">        <Hero />         </section>
        <section id="description"> <Description />  </section>
        <section id="amenities">   <Amenities />    </section>
        <section id="gallery">     <ImageCarousel /></section>
        <section id="map">         <Map />          </section>
        <section id="reviews">     <Reviews />      </section>
        <section id="cta">         <CallToAction /> </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
