import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏰</span>
              <span className="font-black text-lg text-[#FF6B6B]">Luxury Disney Villa</span>
            </div>
            <p className="text-gray-400 font-semibold text-sm leading-relaxed mb-4">
              A 5-star luxury retreat just 15 minutes from Disney World. Perfect for families, groups, and celebrations.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B6B] transition" aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#4ECDC4] transition" aria-label="Facebook">
                <FaFacebook size={16} />
              </a>
              <a href="mailto:luxurydisneyvilla@gmail.com" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFD93D] hover:text-gray-900 transition" aria-label="Email">
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-base mb-4 text-white">Contact</h3>
            <div className="space-y-2 text-gray-400 font-semibold text-sm">
              <p>
                <a href="mailto:luxurydisneyvilla@gmail.com" className="hover:text-[#FF6B6B] transition">
                  luxurydisneyvilla@gmail.com
                </a>
              </p>
              <p>16049 Blue Wave Way<br />Clermont, Florida</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-black text-base mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 font-semibold text-sm">
              <li>
                <a href="https://www.airbnb.com/rooms/1363941275894637395" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ECDC4] transition">
                  Airbnb Listing
                </a>
              </li>
              <li><a href="#amenities" className="hover:text-[#4ECDC4] transition">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-[#4ECDC4] transition">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#4ECDC4] transition">Reviews</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-gray-500 text-sm font-semibold">
          © {new Date().getFullYear()} Luxury Disney Villa · All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
