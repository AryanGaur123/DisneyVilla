import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery',   label: 'Gallery'   },
  { href: '#map',       label: 'Location'  },
  { href: '#reviews',   label: 'Reviews'   },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         style={{
           background: scrolled ? 'rgba(255,249,240,0.97)' : 'rgba(255,249,240,0.88)',
           backdropFilter: 'blur(16px)',
           borderBottom: scrolled ? '1px solid rgba(26,31,107,0.08)' : 'none',
           boxShadow: scrolled ? '0 1px 24px rgba(26,31,107,0.07)' : 'none',
         }}>
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
               style={{ background: 'linear-gradient(135deg, #1565C0, #1E88E5)' }}>
            🏰
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm" style={{ color: '#1565C0' }}>Luxury Disney Villa</div>
            <div className="text-xs font-medium" style={{ color: '#9CA3AF' }}>Clermont · FL</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm font-semibold transition-colors duration-150"
               style={{ color: '#3B5B87' }}
               onMouseEnter={e => e.target.style.color = '#1565C0'}
               onMouseLeave={e => e.target.style.color = '#3B5B87'}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Book btn */}
        <a href="https://www.airbnb.com/rooms/1363941275894637395"
           target="_blank" rel="noopener noreferrer"
           className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 gradient-btn">
          Book Now ✦
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden p-1.5 rounded-lg" style={{ color: '#1565C0' }}
                onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 pt-2 space-y-1"
             style={{ borderTop: '1px solid rgba(26,31,107,0.07)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="block py-2.5 text-sm font-semibold"
               style={{ color: '#3B5B87' }}
               onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
             target="_blank" rel="noopener noreferrer"
             className="block text-center mt-3 py-3 text-sm font-bold text-white rounded-full gradient-btn"
             onClick={() => setOpen(false)}>
            Book Now on Airbnb ✦
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
