import React from "react";
import Image from "next/image";
import mobile from "@/public/images/mobile.png";
import google from "@/public/images/google-play.png";
import app from "@/public/images/app-store.png";

export const CrumApp = () => {
  return (
    <section className="py-12 px-0 text-[#2c0506] w-full bg-slate-50">
      <div className="grid md:grid-cols-2 gap-20 font-sans w-full items-center">
        <div className="text-center md:text-left flex flex-col items-center md:items-center">
          <div className="flex items-center gap-3">
            <span className="w-[4rem] h-[2px] bg-[#c29b40]"></span>
            <h2 className="text-4xl font-serif">The CRUM App</h2>
          </div>

          <div className="text-justify md:text-left">
            <p className=" m-4 text-justify mx-36">
              Sync your home search across all your devices and stay connected
              to your agent. Download today.
            </p>
          </div>

          <div className="flex gap-1">
            <Image src={google} alt="Google Play" />
            <Image src={app} alt="App Store" />
          </div>
        </div>

        <div className="flex md:justify-end">
          <div className="w-full">
            <Image src={mobile} alt="" width={500} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};
