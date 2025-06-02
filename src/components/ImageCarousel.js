import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  // Images from the user-provided photos
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png"
  ];
  
  // Image descriptions for accessibility
  const imageDescriptions = [
    "Luxury Airbnb property image 1",
    "Luxury Airbnb property image 2",
    "Luxury Airbnb property image 3",
    "Luxury Airbnb property image 4",
    "Luxury Airbnb property image 5",
    "Luxury Airbnb property image 6",
    "Luxury Airbnb property image 7",
    "Luxury Airbnb property image 8",
    "Luxury Airbnb property image 9",
    "Luxury Airbnb property image 10"
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
