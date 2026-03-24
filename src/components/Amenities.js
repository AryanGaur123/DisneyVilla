import React, { useState } from 'react';
import { FaSwimmingPool, FaUtensils, FaWifi, FaParking, FaTshirt, FaMapMarkerAlt, FaSnowflake, FaGamepad, FaTv, FaLock, FaBed, FaDumbbell } from 'react-icons/fa';

const amenities = [
  { icon: FaSwimmingPool, name: 'Private Pool',     color: '#00B4D8', bg: '#F0FAFF' },
  { icon: FaGamepad,      name: 'Game Room',        color: '#1E88E5', bg: '#E3F2FD' },
  { icon: FaUtensils,     name: 'Full Kitchen',     color: '#1565C0', bg: '#E3F2FD' },
  { icon: FaBed,          name: 'King Beds',        color: '#F9C03A', bg: '#FFFBE0' },
  { icon: FaWifi,         name: 'High-Speed Wi-Fi', color: '#1565C0', bg: '#E3F2FD' },
  { icon: FaMapMarkerAlt, name: 'Near Disney World',color: '#1565C0', bg: '#E3F2FD' },
  // shown after expand
  { icon: FaParking,      name: 'Free Parking',     color: '#10B981', bg: '#F0FDF4' },
  { icon: FaTshirt,       name: 'Washer / Dryer',   color: '#F9C03A', bg: '#FFFBE0' },
  { icon: FaSnowflake,    name: 'A/C & Heating',    color: '#00B4D8', bg: '#F0FAFF' },
  { icon: FaTv,           name: 'Smart TVs',        color: '#1565C0', bg: '#E3F2FD' },
  { icon: FaLock,         name: 'Secure Access',    color: '#10B981', bg: '#F0FDF4' },
  { icon: FaDumbbell,     name: 'Fitness Center',   color: '#1E88E5', bg: '#E3F2FD' },
];

const VISIBLE = 6;

const Amenities = () => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? amenities : amenities.slice(0, VISIBLE);

  return (
    <section className="py-16 px-5" style={{ background: 'white' }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="section-label">Included with Your Stay</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: '#111827' }}>
            Premium Amenities
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
          {shown.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="card-lift rounded-2xl p-4 flex items-center gap-3"
                   style={{ background: a.bg, border: '1.5px solid rgba(26,31,107,0.05)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: a.color + '22' }}>
                  <Icon size={17} style={{ color: a.color }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: '#1F2937' }}>{a.name}</span>
              </div>
            );
          })}
        </div>

        {/* Toggle */}
        <div className="text-center">
          <button
            onClick={() => setExpanded(e => !e)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
            style={{ background: '#E3F2FD', color: '#1E88E5', border: '1.5px solid #1E88E522' }}
          >
            {expanded ? '▲ Show Less' : `✦ Show All ${amenities.length} Amenities`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
