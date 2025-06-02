import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      date: "May 2025",
      rating: 5,
      comment: "This home exceeded all our expectations! The pool was a hit with the kids, and the proximity to Disney made our vacation so convenient. The themed rooms were beautifully done without being over-the-top. We'll definitely be back!"
    },
    {
      name: "Michael T.",
      date: "April 2025",
      rating: 5,
      comment: "Absolutely stunning property. Everything was immaculate, and the amenities were top-notch. Our family of 10 had plenty of space, and we loved being able to relax by the pool after long days at the parks."
    },
    {
      name: "Jennifer L.",
      date: "March 2025",
      rating: 5,
      comment: "We stayed here for our family reunion and couldn't have chosen a better place. The kitchen is fully equipped, beds are comfortable, and the location is perfect. The host was responsive and helpful throughout our stay."
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8 text-center text-gray-800">Guest Reviews</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 md:p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "text-amber-400" : "text-gray-300"} />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-3 italic text-sm md:text-base">"{review.comment}"</p>
              <p className="font-medium text-gray-800">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
