import React from 'react';
import { FaSwimmingPool, FaUtensils, FaWifi, FaParking, FaTshirt, FaMapMarkerAlt, FaSnowflake, FaGamepad, FaTv, FaLock, FaBed, FaDumbbell } from 'react-icons/fa';

const amenities = [
  { icon: FaSwimmingPool, name: 'Private Pool',      color: '#0EA5C9', bg: '#F0F9FF' },
  { icon: FaUtensils,     name: 'Full Kitchen',       color: '#FF6B6B', bg: '#FFF0F0' },
  { icon: FaWifi,         name: 'High-Speed Wi-Fi',   color: '#8B5CF6', bg: '#F5F0FF' },
  { icon: FaParking,      name: 'Free Parking',       color: '#10B981', bg: '#F0FDF4' },
  { icon: FaTshirt,       name: 'Washer / Dryer',     color: '#F5A623', bg: '#FFF4E0' },
  { icon: FaMapMarkerAlt, name: 'Near Disney World',  color: '#FF6B6B', bg: '#FFF0F0' },
  { icon: FaSnowflake,    name: 'A/C & Heating',      color: '#0EA5C9', bg: '#F0F9FF' },
  { icon: FaGamepad,      name: 'Game Room',          color: '#8B5CF6', bg: '#F5F0FF' },
  { icon: FaTv,           name: 'Smart TVs',          color: '#0F172A', bg: '#F8FAFC' },
  { icon: FaLock,         name: 'Secure Access',      color: '#10B981', bg: '#F0FDF4' },
  { icon: FaBed,          name: 'King Beds',          color: '#F5A623', bg: '#FFF4E0' },
  { icon: FaDumbbell,     name: 'Fitness Center',     color: '#FF6B6B', bg: '#FFF0F0' },
];

const Amenities = () => (
  <section className="py-20 px-5" style={{ background: 'white' }}>
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="section-label">Included with Your Stay</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color: '#0F172A' }}>
          Premium Amenities
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {amenities.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="amenity-card rounded-2xl p-4 flex items-center gap-3"
                 style={{ background: a.bg, border: '1.5px solid rgba(15,23,42,0.05)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ background: a.color + '20' }}>
                <Icon size={18} style={{ color: a.color }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: '#1E293B' }}>{a.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Amenities;
