import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Modern 5BR Luxury Pool Home</h3>
            <p className="text-gray-300 mb-6">
              Experience luxury living just minutes from Disney World. Our spacious 5-bedroom home offers the perfect blend of comfort and convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-400" />
                <a href="mailto:booking@luxurydisneyhome.com" className="text-gray-300 hover:text-white transition-colors">
                  booking@luxurydisneyhome.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-gray-400" />
                <a href="tel:+14075551234" className="text-gray-300 hover:text-white transition-colors">
                  (407) 555-1234
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="https://www.airbnb.com/rooms/1363941275894637395" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Airbnb Listing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">House Rules</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cancellation Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Local Attractions</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Modern 5BR Luxury Pool Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
