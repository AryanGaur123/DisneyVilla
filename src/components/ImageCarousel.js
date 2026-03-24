import React, { useState, useEffect, useCallback } from 'react';

const allPhotos = [
  { src: '/images/AIRBNB PICS/hero1.jpg', alt: 'Villa Exterior' },
  { src: '/images/AIRBNB PICS/hero2.jpg', alt: 'Private Pool' },
  { src: '/images/AIRBNB PICS/hero3.jpg', alt: 'Living Room' },
  { src: '/images/AIRBNB PICS/hero4.jpg', alt: 'Master Bedroom' },
  { src: '/images/AIRBNB PICS/hero5.jpg', alt: 'Kitchen' },
  { src: '/images/hero.jpg', alt: 'Villa Overview' },
  { src: '/images/image1.png', alt: 'Interior' },
  { src: '/images/image2.png', alt: 'Dining Area' },
  { src: '/images/image3.png', alt: 'Bedroom' },
  { src: '/images/image4.png', alt: 'Bathroom' },
  { src: '/images/image5.png', alt: 'Pool Area' },
  { src: '/images/image6.png', alt: 'Living Space' },
  { src: '/images/image7.png', alt: 'Bedroom' },
  { src: '/images/image8.png', alt: 'Kitchen' },
  { src: '/images/image9.png', alt: 'Outdoor Area' },
  { src: '/images/image10.png', alt: 'Villa View' },
  { src: '/images/AIRBNB PICS/0958e56f-cab9-468d-82ed-414848e62f91.png', alt: 'Room' },
  { src: '/images/AIRBNB PICS/1128530d-3369-4e4a-a354-44f7a69298f5.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/3537ccb3-dfb3-479b-a2d9-bab10e303283.png', alt: 'Space' },
  { src: '/images/AIRBNB PICS/3a1aa157-1fb3-4180-a7af-eb700b9ea5c0.png', alt: 'Interior' },
  { src: '/images/AIRBNB PICS/4e1ced92-e8b9-407e-9427-59e2b828101b.png', alt: 'Pool' },
  { src: '/images/AIRBNB PICS/7dd341dd-a92d-46b4-a436-e778e1ff379c.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/b9b13319-88a2-466d-8472-c55bd36e54bd.png', alt: 'Bathroom' },
  { src: '/images/AIRBNB PICS/beefb3de-3795-4d1d-9840-983060b0630c.png', alt: 'Exterior' },
  { src: '/images/AIRBNB PICS/d7d9fe8d-9569-4d99-9448-35616e7e2105.png', alt: "Kid's Room" },
  { src: '/images/AIRBNB PICS/db6b3763-9b7b-45d8-8c79-aa555bb18825.png', alt: 'Entertainment' },
  { src: '/images/AIRBNB PICS/e045aead-b6de-4a54-9850-4c70f11ae3d7.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/fef878b6-7ff1-4aad-a230-b543503ca6f8.png', alt: 'Patio' },
];

const ImageCarousel = () => {
  const [lightbox, setLightbox] = useState(null); // index or null

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i - 1 + allPhotos.length) % allPhotos.length), []);
  const next = useCallback(() => setLightbox((i) => (i + 1) % allPhotos.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, close, prev, next]);

  return (
    <section className="py-20 px-6 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Take a Look Inside</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Property Gallery
            <span className="ml-3 text-base font-sans font-normal text-gray-400">{allPhotos.length} photos</span>
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="photo-grid">
          {allPhotos.map((photo, i) => (
            <div key={i} className="photo-grid-item" onClick={() => setLightbox(i)}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
          <img
            className="lightbox-img"
            src={allPhotos[lightbox].src}
            alt={allPhotos[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
          <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500 }}>
            {lightbox + 1} / {allPhotos.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageCarousel;
