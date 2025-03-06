import Image from "next/image";
import React from "react";
import logo from "@/public/images/crumNavbarLogo.png";
import google from "@/public/images/google-play.png";
import app from "@/public/images/app-store.png";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <footer className="bg-[#2d0c04] text-white py-12 px-6 font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 opacity-70">
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Crum Real Estate" width={100} height={50} />
          <div className="mt-4">
            <Image src={google} alt="Google Play" width={150} height={50} />
            <Image
              src={app}
              alt="App Store"
              width={150}
              height={50}
              className="mt-2"
            />
          </div>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm leading-6">
            Founded in 2008 as the premier real estate agents for renters,
            buyers, sellers, and investors across the country with the most.
          </p>
          <p className="flex text-sm mt-2 cursor-pointer hover:text-[#c29b40] gap-1">
            CONTACT US
            <ArrowLongRightIcon className="w-7 h-5" />
          </p>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:text-[#c29b40]">Blog</li>
            <li className="cursor-pointer hover:text-[#c29b40]">Offices</li>
            <li className="cursor-pointer hover:text-[#c29b40]">Careers</li>
            <li className="cursor-pointer hover:text-[#c29b40]">
              Neighborhood Guides
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Latest Tweets</h3>
          <p className="text-sm leading-6">
            Get the home of your dreams with professionals that are committed to
            helping you do so! 1 HOUR AGO
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm opacity-70">
        <div className="space-x-4">
          <span className="cursor-pointer hover:text-[#c29b40]">Facebook</span>
          <span className="cursor-pointer hover:text-[#c29b40]">Twitter</span>
          <span className="cursor-pointer hover:text-[#c29b40]">Instagram</span>
          <span className="cursor-pointer hover:text-[#c29b40]">LinkedIn</span>
          <span className="cursor-pointer hover:text-[#c29b40]">YouTube</span>
          <span className="cursor-pointer hover:text-[#c29b40]">Pinterest</span>
        </div>
        <p className="mt-4 font-semibold cursor-pointer hover:text-[#c29b40]">
          DO NOT SELL MY PERSONAL INFORMATION
        </p>
      </div>

      <div className="opacity-70 text-sm max-w-6xl mx-auto flex justify-start gap-1 border-b-white">
        <GlobeAltIcon className="w-5 h-5" />
        <p>English - United States</p>
      </div>

      <div className="mt-8 px-6 max-w-6xl mx-auto border-t-2 opacity-70">
        <p className="gap-5 mt-6">
          Privacy Policy | Terms and Conditions | Fair Housing Policy | DCMA
        </p>
        <p className="gap-4 text-justify mt-7 uppercase mb-3">
          THE SOURCE OF THE DISPLAYED DATA IS EITHER THE PROPERTY OWNER OR
          PUBLIC RECORD... Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Architecto deleniti nostrum dicta, iure excepturi officiis
          facere sint exercitationem fugit tenetur autem voluptatem beatae
          blanditiis voluptates quo rerum quos corporis ab maxime dolores
          maiores quisquam. Officiis, quibusdam provident. Dicta, nulla illum
          voluptates tenetur assumenda laboriosam cumque non quos. Iure deserunt
          incidunt tenetur ullam? Animi laboriosam beatae, sint pariatur
          expedita doloremque ratione recusandae nam est asperiores ullam.
          Voluptatum facilis, nam dignissimos explicabo quaerat ea cum,
          necessitatibus pariatur molestiae praesentium expedita veritatis
          accusantium sequi consequuntur magni adipisci est alias totam
          excepturi exercitationem ab, quam ipsum. Ad quaerat, maxime aspernatur
          voluptate tenetur rerum neque?
        </p>
      </div>
      <div className="opacity-70 text-center text-sm px-6 max-w-6xl mx-auto flex justify-center border-t-1">
        <p className="mt-4">
          © 2022 CRUM REAL ESTATES. ALL RIGHTS RESERVED. DESIGNED BY OSO.NYC
        </p>
      </div>
    </footer>
  );
};
