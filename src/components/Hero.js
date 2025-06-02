import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of hero images to cycle through
  const heroImages = [
    { src: '/images/hero1.jpg', alt: 'Luxury Villa Exterior' },
    { src: '/images/hero2.jpg', alt: 'Luxury Villa Pool' },
    { src: '/images/hero3.jpg', alt: 'Luxury Villa Interior' },
    { src: '/images/hero4.jpg', alt: 'Luxury Villa Master Bedroom' },
    { src: '/images/hero5.jpg', alt: 'Luxury Villa Kitchen' },
  ];

  // Effect to automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Hero image slideshow */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-50"></div>
        </div>
      ))}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <div className="bg-black bg-opacity-30 p-4 md:p-8 backdrop-blur-sm max-w-4xl border-l-4 border-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 uppercase tracking-wider">Modern 5BR Luxury Pool Home</h1>
          <p className="text-lg md:text-2xl mb-4 md:mb-8 font-light">Just minutes from the magic</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.airbnb.com/rooms/1363941275894637395" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 font-medium hover:bg-gray-100 transition duration-300 uppercase tracking-wider"
            >
              Book on Airbnb
            </a>
          </div>
        </div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
