import React, { FC, JSX } from "react";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
};

export const Modal: FC<Props> = (props) => {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-25 ">
      <div className="bg-white text-[#2c0506] p-4 rounded-lg max-w-sm w-full border-1 border-[#2c0506]">
        <div className="flex justify-between items-center mb-4">
          <ArrowLeftIcon
            className="w-5 h-5 cursor-pointer"
            onClick={props.onClose}
          />  

          <XMarkIcon
            className="w-5 h-5 cursor-pointer"
            onClick={props.onClose}
          />
        </div>
        <h2 className="text-lg text-sky-950 font-serif text-center mt-5">
          {props.title}
        </h2>
        <div className="overflow-auto max-h-[70vh]">{props.children}</div>
      </div>
    </div>
  );
};
