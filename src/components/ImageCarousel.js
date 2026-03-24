import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  { src: '/images/AIRBNB PICS/hero1.jpg', alt: 'Villa Exterior' },
  { src: '/images/AIRBNB PICS/hero2.jpg', alt: 'Private Pool' },
  { src: '/images/AIRBNB PICS/hero3.jpg', alt: 'Living Room' },
  { src: '/images/AIRBNB PICS/hero4.jpg', alt: 'Master Bedroom' },
  { src: '/images/AIRBNB PICS/hero5.jpg', alt: 'Kitchen' },
  { src: '/images/AIRBNB PICS/0958e56f-cab9-468d-82ed-414848e62f91.png', alt: 'Villa View' },
  { src: '/images/AIRBNB PICS/1128530d-3369-4e4a-a354-44f7a69298f5.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/3537ccb3-dfb3-479b-a2d9-bab10e303283.png', alt: 'Kitchen' },
  { src: '/images/AIRBNB PICS/3a1aa157-1fb3-4180-a7af-eb700b9ea5c0.png', alt: 'Dining Area' },
  { src: '/images/AIRBNB PICS/4e1ced92-e8b9-407e-9427-59e2b828101b.png', alt: 'Pool Area' },
  { src: '/images/AIRBNB PICS/7dd341dd-a92d-46b4-a436-e778e1ff379c.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/b9b13319-88a2-466d-8472-c55bd36e54bd.png', alt: 'Bathroom' },
  { src: '/images/AIRBNB PICS/beefb3de-3795-4d1d-9840-983060b0630c.png', alt: 'Front View' },
  { src: '/images/AIRBNB PICS/d7d9fe8d-9569-4d99-9448-35616e7e2105.png', alt: "Kid's Room" },
  { src: '/images/AIRBNB PICS/db6b3763-9b7b-45d8-8c79-aa555bb18825.png', alt: 'Entertainment' },
  { src: '/images/AIRBNB PICS/e045aead-b6de-4a54-9850-4c70f11ae3d7.png', alt: 'Bedroom' },
  { src: '/images/AIRBNB PICS/fef878b6-7ff1-4aad-a230-b543503ca6f8.png', alt: 'Outdoor Patio' },
  { src: '/images/AIRBNB PICS/image1.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image2.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image3.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image5.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image6.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image7.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image8.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image9.png', alt: 'Villa Photo' },
  { src: '/images/AIRBNB PICS/image10.png', alt: 'Villa Photo' },
];

const ImageCarousel = () => {
  return (
    <section className="py-16 px-4 bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#A855F7]/10 text-[#A855F7] font-bold text-sm px-4 py-1.5 rounded-full mb-3">
            Take a Look Inside
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Property <span className="text-[#FF6B6B]">Gallery</span>
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4500}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
          >
            {images.map((img, i) => (
              <div key={i} className="h-[300px] md:h-[480px]">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
