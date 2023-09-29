import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const mockClient = [
  {
    title: "TESTIMONIALS",
    subtitle: "Trust our client",
    subtitle2: "Mark Smith",
    subtitle3: "/Travel Enthusiast",
    subtitle4:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    title: "TESTIMONIALS",
    subtitle: "Trust our client",
    subtitle2: "Mark Smith",
    subtitle3: "/Travel Enthusiast",
    subtitle4:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    title: "TESTIMONIALS",
    subtitle: "Trust our client",
    subtitle2: "Mark Smith",
    subtitle3: "/Travel Enthusiast",
    subtitle4:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
];

const Client = ({ title, subtitle, subtitle2, subtitle3, subtitle4 }) => {
  return (
    <div className="space-y-4 text-center lg:px-[157px]">
      <div>
        <p className="text-[16px] lg:text-[24px] font-bold text-[#F85E9F] tracking-widest">
          {title}
        </p>
      </div>
      <div>
        <p className=" text-[32px] lg:text-[40px] font-bold text-black">
          {subtitle}
        </p>
      </div>
      <div className="flex justify-center p-8">
        <Image src="images/Ellipse.svg" height={128} width={128} />
      </div>
      <div>
        <p className="text-[#FF5722] text-[28px] font-bold">
          {subtitle2}
          <span className=" text-[23px] text-gray-600">{subtitle3}</span>
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <Image src="images/star.svg" height={32} width={32} />
        <Image src="images/star.svg" height={32} width={32} />
        <Image src="images/star.svg" height={32} width={32} />
        <Image src="images/star.svg" height={32} width={32} />
        <Image src="images/star.svg" height={32} width={32} />
      </div>
      <div className="pt-[48px]">
        <p className="text-[18px] lg:text-[23px] text-black">{subtitle4}</p>
      </div>
    </div>
  );
};



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const ref = useRef(null);

  const handleNextSlide = () => {
    ref.current.slickNext();
   };
    
  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  return (
    <div className="px-4 md:px-8 py-8 md:py-10 lg:px-[64px] xl:px-[128px]">
      <Slider {...settings} ref={ref}>
        {mockClient.map((data, idx) => {
          return (
            <Client
              title={data.title}
              subtitle={data.subtitle}
              subtitle2={data.subtitle2}
              subtitle3={data.subtitle3}
              subtitle4={data.subtitle4}
              key={idx}
            />
          );
        })}
      </Slider>
      <div className="pt-8 lg:flex-col lg:my-auto ">
        <div className=" w-full space-x-4 flex justify-between lg:mt-[-352.5px]">
          <div className="flex">
            <button className="py-6 px-6 sm:py-[38px] sm:px-[38px] bg-white transition rounded-full shadow-lg box-border z-10 " onClick={handlePrevSlide}>
              <Image
                src="images/arrow-left.svg"
                alt="arrow left"
                height={24}
                width={24}
              />
            </button>
          </div>
          <div className="flex">
            <button className="py-6 px-6 sm:py-[38px] sm:px-[38px] bg-[#5D50C6] z-10 rounded-full shadow-lg" onClick={handleNextSlide}>
              <Image
                src="images/arrow-right.svg"
                width={24}
                height={24}
                alt="icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
