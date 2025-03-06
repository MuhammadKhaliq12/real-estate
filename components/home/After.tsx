import Image from "next/image";
import React, { FC } from "react";
import afterImg from "@/public/images/after.png";

interface IAfterProps {
  title: string;
}

export const After: FC<IAfterProps> = ({ title }) => {
  return (
    <>
      <section className="py-12  px-16 text-[#2c0506] w-full flex items-center justify-center">
        <div className="relative w-4/5 h-screen flex items-start">
          <Image src={afterImg} alt="" layout="fill" />

          <h1 className="relative text-4xl font-serif text-white z-10 m-10">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};
