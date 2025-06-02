import React from 'react';
import { FaSwimmingPool, FaUtensils, FaWifi, FaParking, FaTshirt, FaMapMarkerAlt, FaSnowflake, FaGamepad, FaTv, FaLock, FaBed, FaDumbbell } from 'react-icons/fa';

const Amenities = () => {
  const amenities = [
    { icon: <FaSwimmingPool className="text-2xl md:text-3xl text-black" />, name: 'Private Pool' },
    { icon: <FaUtensils className="text-2xl md:text-3xl text-black" />, name: 'Full Kitchen' },
    { icon: <FaWifi className="text-2xl md:text-3xl text-black" />, name: 'High-Speed Wi-Fi' },
    { icon: <FaParking className="text-2xl md:text-3xl text-black" />, name: 'Free Parking' },
    { icon: <FaTshirt className="text-2xl md:text-3xl text-black" />, name: 'Washer/Dryer' },
    { icon: <FaMapMarkerAlt className="text-2xl md:text-3xl text-black" />, name: 'Close to Disney' },
    { icon: <FaSnowflake className="text-2xl md:text-3xl text-black" />, name: 'Air Conditioning' },
    { icon: <FaGamepad className="text-2xl md:text-3xl text-black" />, name: 'Game Room' },
    { icon: <FaTv className="text-2xl md:text-3xl text-black" />, name: 'Smart TVs' },
    { icon: <FaLock className="text-2xl md:text-3xl text-black" />, name: 'Secure Access' },
    { icon: <FaBed className="text-2xl md:text-3xl text-black" />, name: 'King Beds' },
    { icon: <FaDumbbell className="text-2xl md:text-3xl text-black" />, name: 'Fitness Center' },
  ];

  return (
    <section className="py-10 md:py-16 bg-white border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-left text-gray-900 uppercase tracking-wide">PREMIUM AMENITIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 p-3 md:p-4 flex items-center transition-all hover:border-black hover:shadow-lg"
            >
              <div className="mr-2 md:mr-3 bg-gray-100 p-2 md:p-3">
                {amenity.icon}
              </div>
              <h3 className="font-medium text-gray-800 text-xs md:text-base">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
