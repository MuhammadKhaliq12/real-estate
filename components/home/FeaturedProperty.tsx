import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

type Property = {
  imageSrc: string | StaticImageData;
  listingInfo: string;
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
};

type FeaturedPropertyProps = {
  mainHeading?: string;
  subHeading: string;
  showMainHeading?: boolean;
  properties: Property[];
};

export const FeaturedProperty: FC<FeaturedPropertyProps> = (props) => {
  return (
    <div className="px-6 mt-10">
      {props.showMainHeading && props.mainHeading && (
        <div className="flex items-center text-gray-700 mb-6">
          <span className="w-20 h-[2px] bg-[#c29b40] mx-3"></span>
          <h2 className="text-4xl font-serif font-semibold">
            {props.mainHeading}
          </h2>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-around items-center text-gray-700 mb-8">
        <div className="text-white"></div>
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#c29b40] mx-3"></span>
          <h1 className="text-3xl font-serif font-extralight">
            {props.subHeading}
          </h1>
        </div>

        <p className="flex gap-2 font-serif">
          View All
          <ArrowLongRightIcon className="w-3 h-6 stroke-5" />
        </p>
      </div>

      <div className="flex gap-6 items-center justify-center overflow-x-auto flex-wrap">
        {props.properties.map((property, index) => (
          <div
            key={index}
            className="relative w-80 bg-white rounded-lg shadow-lg mb-4"
          >
            <div>
              <Image
                src={property.imageSrc}
                alt=""
                width={100}
                height={100}
                className="rounded-t-lg h-72 w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-between">
                <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Listed by {property.listingInfo}
                </span>
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-lg font-semibold">{property.price}</h3>
                <p className="text-sm">{property.address}</p>
                <div className="flex items-center text-sm mt-2">
                  <span className="mr-4">🛏 {property.bedrooms}</span>
                  <span className="mr-4">🛁 {property.bathrooms}</span>
                  <span>📏 {property.size}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
