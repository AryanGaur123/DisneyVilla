import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 md:py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main navbar content */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Social Icons - Top Left */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-lg md:text-2xl text-blue-700 hover:text-blue-800" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-lg md:text-2xl text-red-600 hover:text-red-700" />
            </a>
            <h1 className="font-bold text-base md:text-xl ml-2 text-blue-900">Luxury Disney Villa</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#amenities" className="font-medium text-blue-900 hover:text-blue-700">
              Amenities
            </a>
            <a href="#gallery" className="font-medium text-blue-900 hover:text-blue-700">
              Gallery
            </a>
            <a href="#reviews" className="font-medium text-blue-900 hover:text-blue-700">
              Reviews
            </a>
          </div>
          
          {/* Email and Book Now Buttons */}
<div className="hidden md:flex items-center space-x-2">
  <a href="mailto:luxurydisneyvilla@gmail.com" className="px-2 py-2 rounded-full bg-blue-50 hover:bg-blue-100 transition" aria-label="Email">
    <FaEnvelope className="text-blue-700 text-lg" />
  </a>
  <a 
    href="https://www.airbnb.com/rooms/1363941275894637395" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
  >
    Book Now
  </a>
</div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${'text-blue-900'}`}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${'bg-white'} transition-all duration-300 mt-2`}>
            <div className="px-4 py-3 space-y-3">
              <a 
                href="#amenities" 
                className={`block font-medium py-2 text-blue-700 hover:text-blue-800`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Amenities
              </a>
              <a 
                href="#gallery" 
                className={`block font-medium py-2 text-blue-700 hover:text-blue-800`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#reviews" 
                className={`block font-medium py-2 text-blue-700 hover:text-blue-800`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="https://www.airbnb.com/rooms/1363941275894637395" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block px-3 py-2 text-center text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-300`}
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
