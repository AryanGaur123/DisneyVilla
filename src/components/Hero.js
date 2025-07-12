import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of hero images to cycle through
  const heroImages = [
  { src: '/images/AIRBNB PICS/hero1.jpg', alt: 'Luxury Villa Exterior' },
  { src: '/images/AIRBNB PICS/hero2.jpg', alt: 'Luxury Villa Pool' },
  { src: '/images/AIRBNB PICS/hero3.jpg', alt: 'Luxury Villa Interior' },
  { src: '/images/AIRBNB PICS/hero4.jpg', alt: 'Luxury Villa Master Bedroom' },
  { src: '/images/AIRBNB PICS/hero5.jpg', alt: 'Luxury Villa Kitchen' },
  { src: '/images/AIRBNB PICS/hero1.png', alt: 'Luxury Villa Exterior (PNG)' },
  { src: '/images/AIRBNB PICS/hero2.png', alt: 'Luxury Villa Pool (PNG)' },
  { src: '/images/AIRBNB PICS/hero3.png', alt: 'Luxury Villa Interior (PNG)' },
  { src: '/images/AIRBNB PICS/hero4.png', alt: 'Luxury Villa Master Bedroom (PNG)' },
  { src: '/images/AIRBNB PICS/hero5.png', alt: 'Luxury Villa Kitchen (PNG)' },
  { src: '/images/AIRBNB PICS/image1.png', alt: 'Villa Image 1' },
  { src: '/images/AIRBNB PICS/image2.png', alt: 'Villa Image 2' },
  { src: '/images/AIRBNB PICS/image3.png', alt: 'Villa Image 3' },
  { src: '/images/AIRBNB PICS/image5.png', alt: 'Villa Image 5' },
  { src: '/images/AIRBNB PICS/image6.png', alt: 'Villa Image 6' },
  { src: '/images/AIRBNB PICS/image7.png', alt: 'Villa Image 7' },
  { src: '/images/AIRBNB PICS/image8.png', alt: 'Villa Image 8' },
  { src: '/images/AIRBNB PICS/image9.png', alt: 'Villa Image 9' },
  { src: '/images/AIRBNB PICS/image10.png', alt: 'Villa Image 10' },
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
    <div className="relative h-[30vh] md:h-[38vh] overflow-hidden bg-gray-100">
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
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80"></div>
        </div>
      ))}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <div className="bg-white bg-opacity-70 p-2 md:p-4 max-w-3xl rounded shadow-sm border-l-4 border-blue-400">
          <h1 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2 tracking-wide text-blue-900">Modern 5BR Luxury Pool Home</h1>
          <p className="text-base md:text-xl mb-2 md:mb-4 font-light text-gray-700">Just minutes from the magic</p>
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
