import React from 'react';
import { FaMapMarkerAlt, FaExternalLinkAlt, FaCar } from 'react-icons/fa';

// Exact address: 16049 Blue Wave Way, Clermont, FL 34714
const ADDRESS      = '16049 Blue Wave Way, Clermont, FL 34714';
const MAPS_SEARCH  = 'https://www.google.com/maps/search/?api=1&query=16049+Blue+Wave+Way+Clermont+FL+34714';
const MAPS_EMBED   = 'https://maps.google.com/maps?q=16049+Blue+Wave+Way,+Clermont,+FL+34714&t=m&z=15&output=embed&iwloc=near';
const DIRECTIONS   = 'https://www.google.com/maps/dir/?api=1&destination=16049+Blue+Wave+Way+Clermont+FL+34714';

const nearbyPoints = [
  { emoji: '🏰', name: 'Walt Disney World',   dist: '22 mi',  time: '~30 min', color: '#FF6B6B' },
  { emoji: '🎡', name: 'Universal Studios',   dist: '28 mi',  time: '~40 min', color: '#F5A623' },
  { emoji: '💧', name: 'Surfari Water Park',  dist: '4.8 mi', time: '~11 min', color: '#0EA5C9' },
  { emoji: '✈️', name: 'Orlando Intl Airport',dist: '30 mi',  time: '~40 min', color: '#8B5CF6' },
];

const Map = () => (
  <section id="map" className="py-20 px-5" style={{ background: 'white' }}>
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <span className="section-label">Location</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color: '#0F172A' }}>
            Find Us on the Map
          </h2>
          <div className="flex flex-wrap gap-3">
            {/* Open in Maps */}
            <a href={MAPS_SEARCH} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 duration-200 shadow-md"
               style={{ background: 'linear-gradient(135deg, #F5A623 0%, #FF6B6B 100%)' }}>
              <FaMapMarkerAlt size={13} />
              Open in Maps
            </a>
            {/* Get directions */}
            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 duration-200"
               style={{ background: '#F8F4EE', color: '#0F172A', border: '1.5px solid rgba(15,23,42,0.1)' }}>
              <FaCar size={13} />
              Get Directions
            </a>
          </div>
        </div>
        {/* Address pill */}
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-semibold"
             style={{ background: '#FFF4E0', color: '#92400E' }}>
          <FaMapMarkerAlt size={12} style={{ color: '#F5A623' }} />
          {ADDRESS}
        </div>
      </div>

      {/* Map iframe */}
      <div className="rounded-3xl overflow-hidden mb-10 shadow-xl"
           style={{ border: '2px solid rgba(15,23,42,0.07)', height: 420 }}>
        <iframe
          title="Villa Location"
          src={MAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Distance cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {nearbyPoints.map(p => (
          <div key={p.name}
               className="rounded-2xl p-4 text-center"
               style={{ background: p.color + '12', border: `1.5px solid ${p.color}25` }}>
            <div className="text-2xl mb-2">{p.emoji}</div>
            <div className="font-bold text-xs mb-0.5" style={{ color: '#0F172A' }}>{p.name}</div>
            <div className="font-bold text-sm" style={{ color: p.color }}>{p.dist}</div>
            <div className="text-xs font-medium" style={{ color: '#94A3B8' }}>{p.time} drive</div>
          </div>
        ))}
      </div>

      {/* Open in maps link row */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <a href={MAPS_SEARCH} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 text-sm font-semibold"
           style={{ color: '#F5A623' }}>
          <FaExternalLinkAlt size={11} />
          View full address on Google Maps
        </a>
      </div>
    </div>
  </section>
);

export default Map;
