import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-14 pb-6 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🏰</span>
              <span className="font-display font-bold text-base text-white">Luxury Disney Villa</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-5">
              A 5-star luxury retreat in Clermont, Florida. Just 15 minutes from Walt Disney World.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition" aria-label="Instagram">
                <FaInstagram size={14} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition" aria-label="Facebook">
                <FaFacebook size={14} />
              </a>
              <a href="mailto:luxurydisneyvilla@gmail.com"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition" aria-label="Email">
                <FaEnvelope size={14} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Contact</h3>
            <div className="space-y-2 text-white/40 text-sm font-light">
              <p><a href="mailto:luxurydisneyvilla@gmail.com" className="hover:text-white/70 transition">luxurydisneyvilla@gmail.com</a></p>
              <p>16049 Blue Wave Way<br />Clermont, FL 34714</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-white/40 text-sm font-light">
              <li><a href="https://www.airbnb.com/rooms/1363941275894637395" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition">Airbnb Listing</a></li>
              <li><a href="#amenities" className="hover:text-white/70 transition">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-white/70 transition">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white/70 transition">Reviews</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-white/20 text-xs font-light">
          © {new Date().getFullYear()} Luxury Disney Villa · All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
