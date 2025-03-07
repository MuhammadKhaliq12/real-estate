import React from "react";
import Image from "next/image";
import aboutImage from "@/public/images/aboutpic.png";
import sellHomeImage from "@/public/images/sellHome.png";

export const About = () => {
  return (
    <>
      <section className="py-12 px-0 text-[#2c0506] w-full">
        <div className="grid md:grid-cols-2 gap-12 font-sans items-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-center ml-36">
            <h2 className="text-3xl mb-4 font-serif text-center w-full">
              About Us
            </h2>

            <p className="relative text-gray-700 leading-relaxed max-w-md flex items-start">
              <span className="w-[8rem] h-[2px] bg-[#c29b40] mt-3 mr-2"></span>
              Since 2008, CRUM real estate agents have assisted first-time
              buyers in purchasing new properties and helped sellers navigate
              co-ops, condos, and townhouses.
            </p>

            <button className="mt-6 bg-[#2c0506] text-white px-6 py-3 rounded-full hover:bg-[#c29b40]">
              Meet Our Agents
            </button>
          </div>

          <div className="flex justify-center">
            <Image src={aboutImage} alt="About Us" width={500} height={400} />
          </div>
        </div>
      </section>

      <section className="px-0 text-[#2c0506] w-full">
        <div className="grid md:grid-cols-2 gap-20 items-start mt-16 font-sans">
          <div className="flex md:justify-start flex-col-reverse">
            <div className="w-full flex justify-end">
              <Image src={sellHomeImage} alt="" width={500} height={400} />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-center text-center md:text-left">
            <h3 className="text-3xl mb-4 font-serif w-full text-center">
              Thinking about Selling?
            </h3>

            <div className="max-w-lg">
              <p className="relative text-gray-700 leading-relaxed flex items-start gap-2">
                <span className="w-[5rem] h-[1px] bg-[#c29b40] mt-[10px]"></span>
                Count on us for expert advice and world-class support throughout
                your transaction.
              </p>

              <p className="relative text-gray-700 leading-relaxed flex items-start gap-2 mt-4">
                <span className="w-[5rem] h-[1px] bg-white mt-[10px]"></span>
                Our agents have gone through extensive training to provide you
                with the best consumer experience.
              </p>
            </div>

            <button className="mt-6 bg-[#2c0506] text-white px-6 py-3 rounded-full hover:bg-[#c29b40]">
              Sell Your Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
