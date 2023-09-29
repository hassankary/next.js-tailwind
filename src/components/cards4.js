import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards4 = ({ title, subtitle, imageSource }) => {
  return (
    <div className="px-8 py-0 md:px-6 xl:px-0 ">
      <div className=" w-full mb-4 bg-white px-8 py-8 rounded-[32px] shadow-xl">
        <div className="flex-col sm:flex sm:flex-row sm:space-x-8">
          <Image
            src={imageSource}
            height={100}
            width={100}
            alt="card-image"
          />
          <div className="sm:flex-col sm:items-center sm:my-auto">
            <div className=" pt-8 pb-2 sm:pt-0 sm:pb-0 text-[24px] lg:text-[28px] font-bold text-black">
              {title}
            </div>
            <div className=" text-lg text-black leading-[160%]">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards4;
