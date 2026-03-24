import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer style={{ background: '#060D1A', color: 'white' }} className="pt-14 pb-6 px-5">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                 style={{ background: 'linear-gradient(135deg, #F5A623, #FF6B6B)' }}>🏰</div>
            <div>
              <div className="font-display font-bold text-sm text-white">Luxury Disney Villa</div>
              <div className="text-xs" style={{ color: '#475569' }}>Clermont · Florida</div>
            </div>
          </div>
          <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Brand-new 5-star vacation home just 22 miles from Walt Disney World. Perfect for families and groups up to 12.
          </p>
          <div className="flex gap-2.5">
            {[
              { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
              { icon: FaFacebook,  href: 'https://facebook.com',  label: 'Facebook'  },
              { icon: FaEnvelope,  href: 'mailto:luxurydisneyvilla@gmail.com', label: 'Email' },
            ].map(s => {
              const Icon = s.icon;
              return (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                   rel="noopener noreferrer" aria-label={s.label}
                   className="w-8 h-8 rounded-full flex items-center justify-center transition"
                   style={{ background: 'rgba(255,255,255,0.07)' }}
                   onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,166,35,0.25)'}
                   onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}>
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-4 tracking-wide text-white">Contact</h3>
          <div className="space-y-2.5 text-sm font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <p>
              <a href="mailto:luxurydisneyvilla@gmail.com"
                 className="hover:text-white transition">luxurydisneyvilla@gmail.com</a>
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#F5A623' }} />
              <a href="https://www.google.com/maps/search/?api=1&query=16049+Blue+Wave+Way+Clermont+FL+34714"
                 target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                16049 Blue Wave Way<br />Clermont, FL 34714
              </a>
            </p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4 tracking-wide text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {[
              { label: 'Book on Airbnb', href: 'https://www.airbnb.com/rooms/1363941275894637395', external: true },
              { label: 'Amenities',      href: '#amenities' },
              { label: 'Gallery',        href: '#gallery'   },
              { label: 'Location',       href: '#map'       },
              { label: 'Reviews',        href: '#reviews'   },
            ].map(l => (
              <li key={l.label}>
                <a href={l.href}
                   target={l.external ? '_blank' : undefined}
                   rel={l.external ? 'noopener noreferrer' : undefined}
                   className="hover:text-white transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 text-center text-xs font-light" style={{ color: 'rgba(255,255,255,0.18)' }}>
        © {new Date().getFullYear()} Luxury Disney Villa · 16049 Blue Wave Way, Clermont, FL 34714 · All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
