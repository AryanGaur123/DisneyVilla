import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  // Images from the user-provided photos
  const images = [
  "/images/AIRBNB PICS/hero1.jpg",
  "/images/AIRBNB PICS/hero2.jpg",
  "/images/AIRBNB PICS/hero3.jpg",
  "/images/AIRBNB PICS/hero4.jpg",
  "/images/AIRBNB PICS/hero5.jpg",
  "/images/AIRBNB PICS/0958e56f-cab9-468d-82ed-414848e62f91.png",
  "/images/AIRBNB PICS/1128530d-3369-4e4a-a354-44f7a69298f5.png",
  "/images/AIRBNB PICS/3537ccb3-dfb3-479b-a2d9-bab10e303283.png",
  "/images/AIRBNB PICS/3a1aa157-1fb3-4180-a7af-eb700b9ea5c0.png",
  "/images/AIRBNB PICS/4e1ced92-e8b9-407e-9427-59e2b828101b.png",
  "/images/AIRBNB PICS/7dd341dd-a92d-46b4-a436-e778e1ff379c.png",
  "/images/AIRBNB PICS/b9b13319-88a2-466d-8472-c55bd36e54bd.png",
  "/images/AIRBNB PICS/beefb3de-3795-4d1d-9840-983060b0630c.png",
  "/images/AIRBNB PICS/d7d9fe8d-9569-4d99-9448-35616e7e2105.png",
  "/images/AIRBNB PICS/db6b3763-9b7b-45d8-8c79-aa555bb18825.png",
  "/images/AIRBNB PICS/e045aead-b6de-4a54-9850-4c70f11ae3d7.png",
  "/images/AIRBNB PICS/fef878b6-7ff1-4aad-a230-b543503ca6f8.png",
  "/images/AIRBNB PICS/hero1.png",
  "/images/AIRBNB PICS/hero2.png",
  "/images/AIRBNB PICS/hero3.png",
  "/images/AIRBNB PICS/hero4.png",
  "/images/AIRBNB PICS/hero5.png",
  "/images/AIRBNB PICS/image1.png",
  "/images/AIRBNB PICS/image2.png",
  "/images/AIRBNB PICS/image3.png",
  "/images/AIRBNB PICS/image5.png",
  "/images/AIRBNB PICS/image6.png",
  "/images/AIRBNB PICS/image7.png",
  "/images/AIRBNB PICS/image8.png",
  "/images/AIRBNB PICS/image9.png",
  "/images/AIRBNB PICS/image10.png"
];

// Image descriptions for accessibility
const imageDescriptions = [
  "Luxury Villa Exterior",
  "Luxury Villa Pool",
  "Luxury Villa Interior",
  "Luxury Villa Master Bedroom",
  "Luxury Villa Kitchen",
  "Villa Living Room",
  "Villa Bedroom",
  "Spacious Kitchen",
  "Family Dining Area",
  "Private Pool",
  "Bedroom",
  "Modern Bathroom",
  "Villa Front View",
  "Kids Room",
  "Entertainment Area",
  "Cozy Bedroom",
  "Outdoor Patio",
  "Luxury Villa Exterior (PNG)",
  "Luxury Villa Pool (PNG)",
  "Luxury Villa Interior (PNG)",
  "Luxury Villa Master Bedroom (PNG)",
  "Luxury Villa Kitchen (PNG)",
  "Villa Image 1",
  "Villa Image 2",
  "Villa Image 3",
  "Villa Image 5",
  "Villa Image 6",
  "Villa Image 7",
  "Villa Image 8",
  "Villa Image 9",
  "Villa Image 10"
];

  return (
    <section className="py-8 md:py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center text-gray-800">Property Gallery</h2>
      <div className="shadow-xl overflow-hidden">
        <Carousel 
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          className="rounded-xl"
        >
          {images.map((image, index) => (
            <div key={index} className="h-[300px] md:h-[400px] lg:h-[500px]">
              <img 
                src={image} 
                alt={imageDescriptions[index]} 
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
