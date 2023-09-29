import Image from "next/image";
import Link from "next/link";
import React from "react";


const Cards1 = ({ title, subtitle, imageSource }) => {
  return (
    <div className=" w-full md:w-[32%] mb-4 md:mb-0 bg-white px-8 py-8 lg:px-16 lg:py-16 rounded-[32px] shadow-xl">
      <div className="flex-col justify-center items-center text-center">
        <Image
          className=" mx-auto"
          src={imageSource}
          height={64}
          width={64}
          alt="card-image"
        />
        <div className=" py-8 text-[24px] lg:text-[28px] font-bold text-black">
          {title}
        </div>
        <div className=" text-lg text-black leading-[160%]">{subtitle}</div>
      </div>
    </div>
  );
};

export default Cards1;
