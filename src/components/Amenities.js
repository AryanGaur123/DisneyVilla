import React from 'react';
import { FaSwimmingPool, FaUtensils, FaWifi, FaParking, FaTshirt, FaMapMarkerAlt, FaSnowflake, FaGamepad, FaTv, FaLock, FaBed, FaDumbbell } from 'react-icons/fa';

const amenities = [
  { icon: FaSwimmingPool, name: 'Private Pool', color: '#4ECDC4', bg: '#4ECDC4' },
  { icon: FaUtensils, name: 'Full Kitchen', color: '#FF6B6B', bg: '#FF6B6B' },
  { icon: FaWifi, name: 'High-Speed Wi-Fi', color: '#A855F7', bg: '#A855F7' },
  { icon: FaParking, name: 'Free Parking', color: '#4ECDC4', bg: '#4ECDC4' },
  { icon: FaTshirt, name: 'Washer/Dryer', color: '#FF6B6B', bg: '#FF6B6B' },
  { icon: FaMapMarkerAlt, name: 'Close to Disney', color: '#FFD93D', bg: '#FFD93D' },
  { icon: FaSnowflake, name: 'Air Conditioning', color: '#4ECDC4', bg: '#4ECDC4' },
  { icon: FaGamepad, name: 'Game Room', color: '#A855F7', bg: '#A855F7' },
  { icon: FaTv, name: 'Smart TVs', color: '#FF6B6B', bg: '#FF6B6B' },
  { icon: FaLock, name: 'Secure Access', color: '#4ECDC4', bg: '#4ECDC4' },
  { icon: FaBed, name: 'King Beds', color: '#A855F7', bg: '#A855F7' },
  { icon: FaDumbbell, name: 'Fitness Center', color: '#FF6B6B', bg: '#FF6B6B' },
];

const Amenities = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#FF6B6B]/10 text-[#FF6B6B] font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            What's Included
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Premium <span className="text-[#4ECDC4]">Amenities</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-3 bg-[#FFF8F0] rounded-2xl p-5 text-center hover:shadow-md transition duration-200 border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: a.bg + '20' }}
                >
                  <Icon style={{ color: a.color, fontSize: '1.4rem' }} />
                </div>
                <span className="font-bold text-gray-800 text-sm">{a.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
