import React, { FC } from "react";

const popularCities = [
  "California Real Estate",
  "Los Angeles Real Estate",
  "San Francisco Real Estate",
  "Queens Real Estate",
  "Beverly Hills Real Estate",
  "Orange County Real Estate",
  "New York City Real Estate",
  "The Hamptons Real Estate",
  "Hollywood Hills Real Estate",
  "Pasadena Real Estate",
  "Manhattan Real Estate",
  "Nassau County Real Estate",
  "Long Beach Real Estate",
  "Santa Monica Real Estate",
  "Brooklyn Real Estate",
  "Suffolk County Real Estate",
];

export const PopularCities: FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 flex items-center justify-center">
        <span className="w-[4rem] h-[2px] bg-[#c29b40] mr-3"></span>
        Real Estate in Popular Cities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 text-gray-700">
        {popularCities.map((city, index) => (
          <p
            key={index}
            className="cursor-pointer transition duration-300 hover:text-[#c29b40]"
          >
            {city}
          </p>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-[#2d0c04] text-white rounded-full text-lg font-medium transition duration-300 font-sans hover:bg-[#c29b40]">
        View All
      </button>
    </section>
  );
};

