import React from 'react';

const Description = () => {
  return (
    <section className="py-10 md:py-16 px-4 max-w-6xl mx-auto bg-gray-50">
      <div className="bg-white border-l-4 border-black shadow-md p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 uppercase tracking-wide">EXPERIENCE LUXURY NEAR THE MAGIC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="text-gray-700 space-y-2 md:space-y-4 md:border-r md:border-gray-200 md:pr-6">
            <p className="font-light text-sm md:text-lg">
              Welcome to our newly built (March 2025) luxury vacation home located in Clermont, Florida. 
              Just 15 minutes (9.2 miles) from Disney World, this spacious 5-bedroom, 4.5-bathroom retreat offers the perfect 
              blend of comfort, style, and convenience for your Orlando getaway.
            </p>
            <p className="font-light text-sm md:text-lg">
              Our home features elegantly themed rooms, a private pool, and can comfortably accommodate up to 12 guests. 
              Whether you're planning a family vacation, a reunion with friends, or a special celebration, our property 
              provides the perfect setting for creating unforgettable memories.
            </p>
          </div>
          <div className="text-gray-700 space-y-2 md:space-y-4 md:pl-6 mt-4 md:mt-0">
            <p className="font-light text-sm md:text-lg">
              Enjoy the privacy and space of a home with all the amenities of a luxury resort. After a day of adventure 
              at the parks, return to your own private oasis at 16049 Blue Wave Way to relax and recharge for tomorrow's magic.
            </p>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
              <ul className="grid grid-cols-2 gap-2 md:gap-4 text-sm md:text-base">
                <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>5 Bedrooms</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>4.5 Bathrooms</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>Private Pool</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>Sleeps 12</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>15 min to Disney</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-black mr-2"></span>30 min to Universal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
