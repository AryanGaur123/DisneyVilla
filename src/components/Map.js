import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ADDRESS     = '16049 Blue Wave Way, Clermont, FL 34714';
const MAPS_SEARCH = 'https://www.google.com/maps/search/?api=1&query=16049+Blue+Wave+Way+Clermont+FL+34714';
const MAPS_EMBED  = 'https://maps.google.com/maps?q=16049+Blue+Wave+Way,+Clermont,+FL+34714&t=m&z=15&output=embed&iwloc=near';

const distances = [
  { emoji: '🏰', name: 'Walt Disney World',    dist: '22 mi', time: '~30 min', color: '#FF5F6D' },
  { emoji: '🎡', name: 'Universal Studios',    dist: '28 mi', time: '~40 min', color: '#F9C03A' },
  { emoji: '💧', name: 'Surfari Water Park',   dist: '4.8 mi', time: '~11 min', color: '#00B4D8' },
  { emoji: '✈️', name: 'Orlando Intl Airport', dist: '30 mi', time: '~40 min', color: '#7B3FBE' },
];

const Map = () => (
  <section id="map" className="py-16 px-5" style={{ background: 'white' }}>
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <span className="section-label">Location</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: '#111827' }}>
            Find Us on the Map
          </h2>
        </div>
        <a href={MAPS_SEARCH} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 duration-200 shadow-md gradient-btn-gold self-start md:self-auto">
          <FaMapMarkerAlt size={13} />
          Open in Google Maps
        </a>
      </div>

      {/* Address pill */}
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
           style={{ background: '#FFFBE0', color: '#92400E', border: '1.5px solid #F9C03A33' }}>
        <FaMapMarkerAlt size={12} style={{ color: '#F9C03A' }} />
        {ADDRESS}
      </div>

      {/* Map embed */}
      <div className="rounded-3xl overflow-hidden shadow-xl mb-8"
           style={{ height: 400, border: '2px solid rgba(26,31,107,0.07)' }}>
        <iframe
          title="Villa Location"
          src={MAPS_EMBED}
          width="100%" height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Distance cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {distances.map(d => (
          <div key={d.name} className="card-lift rounded-2xl p-4 text-center"
               style={{ background: d.color + '10', border: `1.5px solid ${d.color}22` }}>
            <div className="text-2xl mb-2">{d.emoji}</div>
            <div className="font-bold text-xs mb-1 leading-tight" style={{ color: '#111827' }}>{d.name}</div>
            <div className="font-bold text-base" style={{ color: d.color }}>{d.dist}</div>
            <div className="text-xs font-medium" style={{ color: '#9CA3AF' }}>{d.time} drive</div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Map;
