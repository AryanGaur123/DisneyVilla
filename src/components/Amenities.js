import React from 'react';
import { FaSwimmingPool, FaUtensils, FaWifi, FaParking, FaTshirt, FaMapMarkerAlt, FaSnowflake, FaGamepad, FaTv, FaLock, FaBed, FaDumbbell } from 'react-icons/fa';

const amenities = [
  { icon: FaSwimmingPool, name: 'Private Pool' },
  { icon: FaUtensils, name: 'Full Kitchen' },
  { icon: FaWifi, name: 'High-Speed Wi-Fi' },
  { icon: FaParking, name: 'Free Parking' },
  { icon: FaTshirt, name: 'Washer / Dryer' },
  { icon: FaMapMarkerAlt, name: 'Close to Disney' },
  { icon: FaSnowflake, name: 'Air Conditioning' },
  { icon: FaGamepad, name: 'Game Room' },
  { icon: FaTv, name: 'Smart TVs' },
  { icon: FaLock, name: 'Secure Access' },
  { icon: FaBed, name: 'King Beds' },
  { icon: FaDumbbell, name: 'Fitness Center' },
];

const Amenities = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">What's Included</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">Premium Amenities</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {amenities.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i}
                className="flex items-center gap-3 bg-[#FAFAF8] rounded-xl px-4 py-4 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition duration-200">
                <Icon className="text-gray-500 flex-shrink-0" size={17} />
                <span className="text-sm font-medium text-gray-700">{a.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
