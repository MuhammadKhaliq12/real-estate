import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

type Location = {
  name?: string;
  image?: string | StaticImageData;
  propertyCount?: string;
  showOverlay?: boolean;
};

type Props = {
  heading: string;
  locations: Location[];
};

export const OurLocation: FC<Props> = (props) => {
  return (
    <section className="container mx-auto px-6 py-10 text-black font-serif">
      <div className="flex justify-center items-center text-gray-700 mx-8 my-10">
        <span className="w-24 h-[2px] bg-[#c29b40] mx-3"></span>
        <h1 className="text-3xl font-serif font-extralight">{props.heading}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-7 gap-4 bg-gray-100 text-black">
        {props.locations.length > 0 ? (
          props.locations.map((location, index) => (
            <div key={index} className="relative group">
              {location.image && (
                <Image
                  src={location.image}
                  alt=""
                  width={500}
                  height={300}
                  className="w-full h-[230px]"
                />
              )}

              {location.showOverlay && (
                <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center rounded-lg p-4">
                  {location.name && (
                    <h3 className="text-white text-xl font-bold">
                      {location.name}
                    </h3>
                  )}
                  {location.propertyCount && (
                    <p className="text-white text-sm mt-1">
                      {location.propertyCount} Property
                    </p>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No locations found.</p>
        )}
      </div>
    </section>
  );
};
