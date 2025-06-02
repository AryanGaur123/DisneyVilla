import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      isScrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-transparent py-3 md:py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Main navbar content */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`font-bold text-base md:text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Luxury Disney Villa
            </h1>
          </div>
          
          {/* Desktop Navigation */}
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
          </div>
          
          {/* Book Now Button */}
          <div className="hidden md:block">
            <a 
              href="https://www.airbnb.com/rooms/1363941275894637395" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-medium ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              } transition duration-300`}
            >
              Book Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-80'} transition-all duration-300 mt-2`}>
            <div className="px-4 py-3 space-y-3">
              <a 
                href="#amenities" 
                className={`block font-medium py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Amenities
              </a>
              <a 
                href="#gallery" 
                className={`block font-medium py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#reviews" 
                className={`block font-medium py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="https://www.airbnb.com/rooms/1363941275894637395" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block px-3 py-2 text-center text-sm font-medium ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                } transition duration-300`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
