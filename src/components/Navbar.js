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
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,251,245,0.97)' : 'rgba(255,251,245,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(15,23,42,0.08)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(15,23,42,0.07)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
               style={{ background: 'linear-gradient(135deg, #F5A623, #FF6B6B)' }}>
            🏰
          </div>
          <div>
            <div className="font-display font-bold text-sm leading-tight" style={{ color: '#0F172A' }}>
              Luxury Disney Villa
            </div>
            <div className="text-xs font-medium" style={{ color: '#94A3B8' }}>
              Clermont · FL
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm font-semibold transition-colors duration-150"
               style={{ color: '#475569' }}
               onMouseEnter={e => e.target.style.color = '#0F172A'}
               onMouseLeave={e => e.target.style.color = '#475569'}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Book btn */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
             target="_blank" rel="noopener noreferrer"
             className="px-5 py-2.5 text-sm font-bold text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
             style={{ background: 'linear-gradient(135deg, #F5A623 0%, #FF6B6B 100%)' }}>
            Book Now ✦
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-1.5 rounded-lg" style={{ color: '#0F172A' }}
                onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-5 pb-5 pt-2 space-y-1 border-t" style={{ borderColor: 'rgba(15,23,42,0.07)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="block py-2.5 text-sm font-semibold"
               style={{ color: '#475569' }}
               onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://www.airbnb.com/rooms/1363941275894637395"
             target="_blank" rel="noopener noreferrer"
             className="block text-center mt-3 py-3 text-sm font-bold text-white rounded-full"
             style={{ background: 'linear-gradient(135deg, #F5A623 0%, #FF6B6B 100%)' }}
             onClick={() => setOpen(false)}>
            Book Now on Airbnb ✦
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
