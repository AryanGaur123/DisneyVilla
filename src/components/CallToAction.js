import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Ready to Experience Luxury Near Disney?</h2>
        <p className="text-base md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto">
          Book your stay today and create unforgettable memories in our spacious 5-bedroom luxury home.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://www.airbnb.com/rooms/1363941275894637395" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 px-6 md:px-8 py-3 md:py-4 font-medium hover:bg-gray-100 transition duration-300 text-base md:text-lg"
          >
            Book on Airbnb
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
