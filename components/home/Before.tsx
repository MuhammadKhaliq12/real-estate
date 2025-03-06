import React, { FC } from "react";
import Image from "next/image";
import beforeImg from "@/public/images/before.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface IBeforeProps {
  title: string;
}

export const Before: FC<IBeforeProps> = ({ title }) => {
  return (
    <section className="px-0 text-[#2c0506]">
      <div className="grid md:grid-cols-2 gap-20 items-start mt-16 font-sans">
        <div className="relative flex md:justify-center items-center">
          <div className="w-full flex md:justify-end h-full">
            <h3 className="relative bottom-32 right-6 text-white  rounded-md text-4xl font-semibold">
              {title}
            </h3>

            <Image src={beforeImg} alt="" className="w-lg" />
          </div>
        </div>

        <div className="text-center h-full flex flex-col items-center">
          <div className="md:text-left flex flex-col items-center md:items-center justify-end h-4/5">
            <h3 className="text-3xl font-semibold mb-4 font-serif">
              CRUM Connect
            </h3>
            <div className="max-w-lg">
              <p className="text-gray-700 leading-relaxed flex items-center gap-2 text-justify">
                CRUM connect helps you sell your home faster and for more money
                by covering the cost of home improvement services — no upfront
                fees or interest charged.
              </p>
            </div>
          </div>

          <div className="flex mt-6 bg-[#2c0506] text-white px-6 py-3 text-center rounded-full hover:bg-[#c29b40]">
            CRUM Connect
            <ArrowRightIcon className="w-5 h-5 mx-2 mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
};
