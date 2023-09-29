import Image from "next/image";
import Link from "next/link";
import React from "react";



const Cards3 = ({ title, subtitle}) => {
  return (
    <div className=" w-full sm:w-[80%] sm:mx-auto md:w-[45%] mb-4 lg:w-[400px] lg:my-4 lg:mx-4 xl:max-w-[205px] xl:mx-0 xl:px-0 bg-white px-8 py-8 rounded-[32px] shadow-xl">
      <div className="flex-col justify-center items-center text-center space-y-4">
        <div className=" text-[35px] text-black font-bold">{title}</div>
        <div className=" text-lg text-black">{subtitle}</div>
      </div>
    </div>
  );
};

export default Cards3;
