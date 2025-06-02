import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Luxury Disney Villa
          </h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#amenities" className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>
            Amenities
          </a>
          <a href="#gallery" className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>
            Gallery
          </a>
          <a href="#reviews" className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>
            Reviews
          </a>
          <a href="#location" className={`font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}>
            Location
          </a>
        </div>
        <div>
          <a 
            href="https://www.airbnb.com/rooms/1363941275894637395" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg font-medium ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            } transition duration-300`}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
