import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-sm' : 'bg-white/95'}`}
      style={{ backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <span className="text-xl">🏰</span>
          <div className="leading-tight">
            <div className="font-display font-bold text-base text-gray-900 tracking-tight">Luxury Disney Villa</div>
            <div className="text-xs text-gray-400 font-medium tracking-wide">Clermont, Florida</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {['amenities', 'gallery', 'reviews'].map((id) => (
            <a key={id} href={`#${id}`}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 capitalize transition-colors duration-200 tracking-wide">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:luxurydisneyvilla@gmail.com"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
            Contact
          </a>
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition shadow-sm">
            Book on Airbnb
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-700 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-5 space-y-4 pt-3">
          {['amenities', 'gallery', 'reviews'].map((id) => (
            <a key={id} href={`#${id}`}
              className="block text-sm font-medium text-gray-700 capitalize hover:text-gray-900 py-1"
              onClick={() => setMenuOpen(false)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
            target="_blank" rel="noopener noreferrer"
            className="block text-center py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition"
            onClick={() => setMenuOpen(false)}>
            Book on Airbnb
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
