import Image from "next/image";
import React, { FC } from "react";
import heroImage from "@/public/images/heroImg.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
};

export const HeroSection: FC<Props> = (props) => {
  return (
    <>
      <div className="relative h-screen flex flex-col items-center justify-center text-white text-center px-4">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <h1 className="text-6xl font-serif mb-8">{props.title}</h1>

        <div className="flex w-full max-w-2xl justify-start ">
          <button className="bg-white text-black px-8 py-2 rounded-sm-full text-[12px]">
            Buy
          </button>
          <button className="bg-[#2c0506] text-white px-8 py-2 rounded-sm-full text-[12px]">
            Sell
          </button>
        </div>

        <div className="w-full max-w-2xl h-18 flex bg-white shadow-md items-center">
          <input
            type="text"
            placeholder="Country City Address Postal Code or ID"
            className="w-full px-7 py-2 outline-none text-black text-lg placeholder:text-lg font-serif opacity-60"
          />
          <div className="bg-[#2c0506] text-white px-4 py-2 font-bold rounded-md mr-2 flex items-center justify-center h-15">
            <MagnifyingGlassIcon className="h-6 w-6 stroke-3" />
          </div>
        </div>
      </div>
    </>
  );
};
