import React, { useState, useEffect, useCallback } from 'react';

const photos = [
  { src: '/images/AIRBNB PICS/hero1.jpg',   alt: 'Villa Exterior' },
  { src: '/images/AIRBNB PICS/hero2.jpg',   alt: 'Private Pool' },
  { src: '/images/AIRBNB PICS/hero3.jpg',   alt: 'Living Room' },
  { src: '/images/AIRBNB PICS/hero4.jpg',   alt: 'Master Bedroom' },
  { src: '/images/AIRBNB PICS/hero5.jpg',   alt: 'Kitchen' },
  { src: '/images/hero.jpg',                alt: 'Villa Overview' },
  { src: '/images/image1.png',              alt: 'Interior' },
  { src: '/images/image2.png',              alt: 'Dining Area' },
  { src: '/images/image3.png',              alt: 'Bedroom' },
  { src: '/images/image4.png',              alt: 'Bathroom' },
  { src: '/images/image5.png',              alt: 'Pool Area' },
  { src: '/images/image6.png',              alt: 'Living Space' },
  { src: '/images/image7.png',              alt: 'Bedroom' },
  { src: '/images/image8.png',              alt: 'Kitchen Detail' },
  { src: '/images/image9.png',              alt: 'Outdoor Area' },
  { src: '/images/image10.png',             alt: 'Villa View' },
  { src: '/images/AIRBNB PICS/0958e56f-cab9-468d-82ed-414848e62f91.png', alt: 'Room' },
  { src: '/images/AIRBNB PICS/1128530d-3369-4e4a-a354-44f7a69298f5.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/3537ccb3-dfb3-479b-a2d9-bab10e303283.png', alt: 'Space' },
  { src: '/images/AIRBNB PICS/3a1aa157-1fb3-4180-a7af-eb700b9ea5c0.png', alt: 'Interior' },
  { src: '/images/AIRBNB PICS/4e1ced92-e8b9-407e-9427-59e2b828101b.png', alt: 'Pool Close-up' },
  { src: '/images/AIRBNB PICS/7dd341dd-a92d-46b4-a436-e778e1ff379c.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/b9b13319-88a2-466d-8472-c55bd36e54bd.png', alt: 'Bathroom' },
  { src: '/images/AIRBNB PICS/beefb3de-3795-4d1d-9840-983060b0630c.png', alt: 'Exterior' },
  { src: '/images/AIRBNB PICS/d7d9fe8d-9569-4d99-9448-35616e7e2105.png', alt: "Kid's Room" },
  { src: '/images/AIRBNB PICS/db6b3763-9b7b-45d8-8c79-aa555bb18825.png', alt: 'Entertainment' },
  { src: '/images/AIRBNB PICS/e045aead-b6de-4a54-9850-4c70f11ae3d7.png', alt: 'Bedroom Suite' },
  { src: '/images/AIRBNB PICS/fef878b6-7ff1-4aad-a230-b543503ca6f8.png', alt: 'Patio' },
];

const PREVIEW = 8;

const Gallery = () => {
  const [expanded, setExpanded] = useState(false);
  const [lb, setLb] = useState(null);

  const shown = expanded ? photos : photos.slice(0, PREVIEW);

  const close = useCallback(() => setLb(null), []);
  const prev  = useCallback(() => setLb(i => (i - 1 + photos.length) % photos.length), []);
  const next  = useCallback(() => setLb(i => (i + 1) % photos.length), []);

  useEffect(() => {
    if (lb === null) return;
    const fn = e => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [lb, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lb !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lb]);

  return (
    <section id="gallery" className="py-16 px-5" style={{ background: '#FFF9F0' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
          <div>
            <span className="section-label">Take a Look Inside</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: '#111827' }}>
              Property Gallery
            </h2>
          </div>
          <span className="text-sm font-medium" style={{ color: '#9CA3AF' }}>
            {photos.length} photos · click to enlarge
          </span>
        </div>

        {/* Grid with optional fade mask */}
        <div className={!expanded ? 'gallery-mask' : ''} style={!expanded ? { maxHeight: 820, overflow: 'hidden' } : {}}>
          <div className="photo-grid">
            {shown.map((p, i) => (
              <div key={i} className="photo-grid-item" onClick={() => setLb(i)}>
                <img src={p.src} alt={p.alt} loading="lazy" />
                <div className="photo-grid-overlay">
                  <span className="text-white text-xs font-semibold">{p.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expand / collapse */}
        <div className="text-center mt-6">
          <button
            onClick={() => setExpanded(e => !e)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 shadow-lg gradient-btn"
          >
            {expanded
              ? '▲ Show Less'
              : `✦ See All ${photos.length} Photos`}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lb !== null && (
        <div className="lightbox-bg" onClick={close}>
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">✕</button>
          <button className="lb-btn lb-prev" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Prev">‹</button>
          <img className="lightbox-img" src={photos[lb].src} alt={photos[lb].alt}
               onClick={e => e.stopPropagation()} />
          <button className="lb-btn lb-next" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
          <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, textAlign: 'center',
                        color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em' }}>
            {lb + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
