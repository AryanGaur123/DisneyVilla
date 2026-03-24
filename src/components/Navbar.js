import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🏰</span>
          <span className="font-black text-lg text-[#FF6B6B] tracking-tight leading-tight">
            Luxury Disney<br />
            <span className="text-[#4ECDC4]">Villa</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['amenities', 'gallery', 'reviews'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-bold text-gray-600 hover:text-[#FF6B6B] capitalize transition-colors duration-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:luxurydisneyvilla@gmail.com"
            className="w-9 h-9 rounded-full bg-[#FFF8F0] flex items-center justify-center hover:bg-[#FFD93D] transition"
            aria-label="Email"
          >
            <FaEnvelope className="text-[#FF6B6B]" />
          </a>
          <a
            href="https://www.airbnb.com/rooms/1363941275894637395"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#FF6B6B] text-white font-bold hover:bg-[#e55555] transition shadow-md text-sm"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-4 space-y-3">
          {['amenities', 'gallery', 'reviews'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="block font-bold text-gray-700 py-2 capitalize hover:text-[#FF6B6B]"
              onClick={() => setMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href="https://www.airbnb.com/rooms/1363941275894637395"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 rounded-full bg-[#FF6B6B] text-white font-bold hover:bg-[#e55555] transition"
            onClick={() => setMenuOpen(false)}
          >
            Book Now on Airbnb
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
