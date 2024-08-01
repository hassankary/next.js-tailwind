import Image from "next/image";
import Link from "next/link";


const mockFooter = [
  {
    title: "Company",
    desc: ["About", "Career", "Mobile"],
    image: "images/icon-arrowdown.svg",
  },
  {
    title: "Contact",
    desc: ["Why Travlog?", "Partner with us", "FAQ's", "blog"],
    image: "images/icon-arrowdown.svg",
  },
  {
    title: "Meet Us",
    desc: ["+00 92 1234 56789", "info@travlog.com", "205. R Street, New York. BD23200"],
    image: "images/icon-arrowdown.svg",
  },
];

const ButtonFooter = ({ title, imageSource }) => {
  return (
    <button className="flex w-full justify-between ">
      <h1 className="text-black text-[23px] font-bold">{title}</h1>
      <div>
        <Image src={imageSource} width={24} height={24} alt="icon-arrow-down" />
      </div>
    </button>
  );
};

const ButtonFooterLg = ({ title, desc }) => {
  return (
    <div className="w-1/3 text-left flex flex-col space-y-8 text-black">
      <h1 className="font-bold text-[23px]">{title}</h1>
      <Link href="/" className="text-[18px]">
        {desc[0]}
      </Link>
      <Link href="/" className="text-[18px]">
        {desc[1]}
      </Link>
      <Link href="/" className="text-[18px]">
        {desc[2]}
      </Link>
      <Link href="/" className="text-[18px]">
        {desc[3]}
      </Link>
    </div>
  );
};

export const Footer = () => {
  return (
    <>
    
    <div className="xl:flex xl:px-32 xl:justify-between  xl:space-x-16">
      <div className="px-4 py-8 sm:px-[42px] sm:py-16 space-y-8 lg:px-16 xl:px-0 xl:w-1/2">
        <div>
          <Image src="images/Logo.svg" alt="gambar" width={142} height={40} />
        </div>
        <div className="">
          <h1 className=" text-[16px] lg:text-[23px] text-left text-black leading-[160%] ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </h1>
        </div>
        <div className="flex space-x-8">
          <Image
            src="images/logofooter1.svg"
            width={32}
            height={32}
            alt="icon-facebook"
          />
          <Image
            src="images/logofooter2.svg"
            width={32}
            height={32}
            alt="icon-twitter"
          />
          <Image
            src="images/logofooter3.svg"
            width={32}
            height={32}
            alt="icon-instagram"
          />
        </div>
      </div>
      <div className="px-4 py-4 sm:px-[42px] lg:hidden space-y-16 mb-[56px]">
        {mockFooter.map((data, idx) => {
          return (
            <ButtonFooter
              title={data.title}
              imageSource={data.image}
              key={idx}
            />
          );
        })}
      </div>
      <div className="px-16 py-16 hidden lg:flex box-border xl:px-0 xl:w-1/2">
        {mockFooter.map((data, idx) => {
          return (
            <ButtonFooterLg
              title={data.title}
              desc={data.desc}
              key={idx}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};
