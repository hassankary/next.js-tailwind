import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards2 = ({ price, title, subtitle, imageSource, rate }) => {
  return (
    <div className=" w-full md:w-[32%] mb-4 md:mb-0 bg-white pb-8 rounded-[32px] shadow-xl">
          <div className="flex-col justify-center items-center">
            <Image
              className="w-full mx-auto"
              src={imageSource}
              height={278}
              width={314}
              alt="card-image"
            />
            <div>
              <div className="px-8">
                <div className="pt-8 pb-2  text-[#F85E9F] text-[23px] font-bold">
                  {price}
                </div>
                <div className=" pb-4 text-[23px] font-bold text-black">
                  {title}
                </div>
                <div className=" text-lg text-black leading-[160%]">
                  {subtitle}
                </div>
                <div className="flex pt-8 space-x-2">
                  <h1 className=" text-[23px] text-[#FF5722] font-bold">{rate}</h1>
                  <Image
                    src="images/star-icon.svg"
                    alt="icon"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Cards2;
