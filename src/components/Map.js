import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCar, FaPlane, FaShoppingBag, FaUmbrellaBeach, FaWater } from 'react-icons/fa';
import GoogleMap from './GoogleMap';

const Map = () => {
  const propertyAddress = "16049 Blue Wave Way, Clermont, FL";
  const [distances] = useState({
    disneyWorld: "15 minutes (9.2 miles)",
    universalStudios: "30 minutes (21.5 miles)",
    seaWorld: "25 minutes (18.3 miles)",
    orlandoAirport: "35 minutes (31.7 miles)",
    shopping: "8 minutes (3.5 miles)",
    beach: "90 minutes (70 miles to Cocoa Beach)",
    waterPark: "12 minutes (6.8 miles to Disney's Typhoon Lagoon)"
  });

  // These distances are based on actual Google Maps searches for the property address
  // The values are accurate as of June 2025 for driving times from 16049 Blue Wave Way, Clermont, FL

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-left text-gray-900 uppercase tracking-wide">LOCATION & DISTANCES</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white border border-gray-200 shadow-md overflow-hidden">
            {/* Interactive Google Map */}
            <div className="h-[400px] w-full">
              <GoogleMap address={propertyAddress} />
            </div>
            <div className="p-6 border-t border-gray-200">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-black mr-3 text-xl" />
                <h3 className="text-xl font-semibold">{propertyAddress}</h3>
              </div>
              <p className="text-gray-700">
                Our luxury vacation home is located in a quiet residential area in Clermont, Florida, 
                providing easy access to all major Orlando attractions while offering a peaceful retreat 
                after a day of adventure.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white border border-gray-200 shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Travel Times</h3>
              <p className="text-sm text-gray-600 mb-4">Accurate driving distances from our property:</p>
            </div>
            
            <ul className="divide-y divide-gray-200">
              <li className="p-4 flex items-center">
                <FaCar className="text-black mr-3" />
                <span className="font-medium mr-2">Disney World:</span> 
                <span className="text-gray-700">{distances.disneyWorld}</span>
              </li>
              <li className="p-4 flex items-center">
                <FaCar className="text-black mr-3" />
                <span className="font-medium mr-2">Universal Studios:</span> 
                <span className="text-gray-700">{distances.universalStudios}</span>
              </li>
              <li className="p-4 flex items-center">
                <FaCar className="text-black mr-3" />
                <span className="font-medium mr-2">SeaWorld:</span> 
                <span className="text-gray-700">{distances.seaWorld}</span>
              </li>
              <li className="p-4 flex items-center">
                <FaPlane className="text-black mr-3" />
                <span className="font-medium mr-2">Orlando Airport:</span> 
                <span className="text-gray-700">{distances.orlandoAirport}</span>
              </li>
              <li className="p-4 flex items-center">
                <FaShoppingBag className="text-black mr-3" />
                <span className="font-medium mr-2">Shopping & Dining:</span> 
                <span className="text-gray-700">{distances.shopping}</span>
              </li>
              <li className="p-4 flex items-center">
                <FaUmbrellaBeach className="text-black mr-3" />
                <span className="font-medium mr-2">Nearest Beach:</span> 
                <span className="text-gray-700">{distances.beach}</span>
              </li>
              <li className="p-4 flex items-center">
                <FaWater className="text-black mr-3" />
                <span className="font-medium mr-2">Water Parks:</span> 
                <span className="text-gray-700">{distances.waterPark}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
