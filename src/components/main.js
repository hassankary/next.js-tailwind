"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Cards2 from "./cards2";
import { Footer } from "./footer";
import SimpleSlider from "./simpleslider";
import Cards1 from "./cards1";
import Cards4 from "./cards4";
import Cards3 from "./cards3";

const mockCards1 = [
  {
    title: "Best Tour Guide",
    subtitle:
      "What looked like a small patch of purple grass, above five feet.",
    imageSource: "images/card1.svg",
  },
  {
    title: "Easy Booking",
    subtitle: "Square, was moving across the sand in their direction.",
    imageSource: "images/card2.svg",
  },
  {
    title: "Weather Forecast",
    subtitle:
      "What looked like a small patch of purple grass, above five feet.",
    imageSource: "images/card3.svg",
  },
];

const mockCards2 = [
  {
    nama: "Paradise Beach, Bantayan Island",
    subNama: "Rome, Italy",
    image: "images/cardb1.svg",
    harga: "$550.16",
    nilai: "4.8",
  },
  {
    nama: "Ocean with full of Colors",
    subNama: "Maldives",
    image: "images/cardb2.svg",
    harga: "$20.99",
    nilai: "4.5",
  },
  {
    nama: "Mountain View, Above the cloud",
    subNama: "United Arab Emeries ",
    image: "images/cardb3.svg",
    harga: "$150.99",
    nilai: "5.0",
  },
];

const mockCards3 = [
  { title: "500+", subtitle: "Holiday Package" },
  { title: "100", subtitle: "Luxury Hotel" },
  { title: "7", subtitle: "Premium Airlines" },
  { title: "2k+", subtitle: "Happy Customer" },
];

const mockCards4 = [
  {
    nama: "We offer best services",
    subNama: "Lorem Ipsum is not simply random text",
    image: "images/card31.svg",
  },
  {
    nama: "Schedule your trip",
    subNama: "It has roots in a piece of classical",
    image: "images/card32.svg",
  },
  {
    nama: "Get discounted coupons",
    subNama: "Lorem Ipsum is not simply random text",
    image: "images/card33.svg",
  },
];

export const Main = () => {
  const router = useRouter();
  const redirect = () => {
    router.push("https://www.tiket.com/");
  };

  return (
    <>
      <div className="xl:flex xl:justify-center">
        <div className="pt-[128px] px-4 md:px-16 md:pt-[176px] lg:px-[125px] xl:px-0 xl:order-2 ">
          <section className="flex justify-center">
            <Image
              className="w-full max-w-[780px] xl:w-[780px]"
              src="images/group1.svg"
              width={396}
              height={366}
              alt="gambar"
            />
          </section>
        </div>
        <div className="my-auto xl:px-0 xl:order-1 xl:pt-[80px]">
          <div className="flex-col  px-4 ">
            <div className="flex flex-col mx-auto text-center mb-8 md:mb-10 lg:mb-11 max-w-[800px] xl:max-w-[350px] ">
              <div className="flex justify-center xl:justify-start  ">
                <button
                  onClick={redirect}
                  className="flex space-x-4 px-8 py-4 bg-white text-sm font-bold text-[#F85E9F] hover:border-2 hover:border-gray-600 rounded-full mb-4 sm:mb-6 md:mb-10 items-center shadow-lg"
                >
                  <p>Explore the world!</p>
                  <Image
                    src="images/work.svg"
                    width={20}
                    height={20}
                    alt="icon "
                  />
                </button>
              </div>
              <div className=" text-black mb-4 sm:mb-6 md:mb-10">
                <h1 className="font-bold text-4xl sm:text-[45px] md:text-[56px] px-6 md:px-[65px] lg:px-[80px] xl:px-0 leading-[130%] xl:text-left hover:drop-shadow-lg">
                  Travel <span className="text-[#F85E9F]">top destination</span>{" "}
                  of the world
                </h1>
              </div>
              <div className=" text-[#191825]">
                <h1 className=" text-base sm:text-lg sm:px-6 md:px-44 xl:px-0 xl:text-left ">
                  We always make our customer happy by providing as many choices
                  as possible{" "}
                </h1>
              </div>
            </div>
            <div className="px-4">
              <div className=" w-full sm:space-x-4 sm:flex justify-center mb-8 md:mb-10 lg:mb-16 space-y-6 sm:space-y-0">
                <div>
                  <button className="text-[14px] font-bold py-6 sm:py-4 px-auto sm:px-8 bg-[#5D50C6] hover:bg-[#6a5cdf] transition w-full sm:w-auto rounded-full shadow-lg">
                    Get Started
                  </button>
                </div>
                <div className="flex-col items-center sm:mb-4 ">
                  <button className="flex justify-center  bg-white hover:border-2 hover:border-gray-600 py-6 sm:py-4 sm:px-8 px-auto w-full sm:w-auto rounded-full space-x-2 shadow-lg">
                    <Image
                      src="images/logoplay.svg"
                      width={24}
                      height={24}
                      alt="icon"
                    />
                    <span className="text-[14px] my-auto text-black font-bold">
                      Watch Demo
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:hidden">
        <div className=" py-4">
          <div className="flex flex-col ">
            <div className="flex justify-around lg:px-[200px] ">
              <div className="flex-col my-4">
                <Image
                  src="images/tripadvisor.svg"
                  width={133}
                  height={20}
                  className="h-5"
                ></Image>
              </div>
              <div className="flex-col my-4">
                <Image
                  src="images/expedia.svg"
                  width={71}
                  height={20}
                  className="h-5"
                />
              </div>
              <div className="flex-col my-4">
                <Image
                  src="images/booking.svg"
                  width={118}
                  height={20}
                  className="h-5"
                ></Image>
              </div>
            </div>
            <div className="flex justify-around px-20 sm:px-[120px] md:px-[180px] lg:px-[300px]">
              <div className="flex-col my-4">
                <Image
                  src="images/airbnb.svg"
                  width={65}
                  height={20}
                  className="h-5"
                ></Image>
              </div>
              <div className="flex-col my-4">
                <Image
                  src="images/orbitz.svg"
                  width={106}
                  height={20}
                  className="h-5"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 hidden lg:flex xl:hidden">
        <div className=" py-4 lg:w-full ">
          <div className="flex flex-col ">
            <div className="flex justify-around lg:px-[200px]">
              <div className="flex-col my-4">
                <Image
                  src="images/tripadvisor.svg"
                  width={211}
                  height={32}
                  // className="h-5"
                ></Image>
              </div>
              <div className="flex-col my-4">
                <Image
                  src="images/expedia.svg"
                  width={113}
                  height={32}
                  // className="h-5"
                />
              </div>
              <div className="flex-col my-4">
                <Image
                  src="images/booking.svg"
                  width={188}
                  height={32}
                  // className="h-5"
                ></Image>
              </div>
            </div>
            <div className="flex justify-around px-20 sm:px-[120px] md:px-[180px] lg:px-[300px]">
              <div className="flex-col my-4">
                <Image
                  src="images/airbnb.svg"
                  width={102}
                  height={32}
                  // className="h-5"
                ></Image>
              </div>
              <div className="flex-col my-4">
                <Image
                  src="images/orbitz.svg"
                  width={173}
                  height={32}
                  // className="h-5"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HIrzan */}
      <div className="px-[128px] hidden xl:flex">
        <div className="flex flex-row flex-wrap justify-around w-full mx-auto h-[136px]">
          <div className="flex justify-center my-auto">
            <Image
              src="images/tripadvisor.svg"
              width={211}
              height={32}
              // className="h-5"
            ></Image>
          </div>
          <div className="flex justify-center my-auto">
            <Image
              src="images/expedia.svg"
              width={113}
              height={32}
              // className="h-5"
            />
          </div>
          <div className="flex justify-center my-auto">
            <Image
              src="images/booking.svg"
              width={188}
              height={32}
              // className="h-5"
            ></Image>
          </div>
          <div className="flex justify-center my-auto">
            <Image
              src="images/airbnb.svg"
              width={102}
              height={32}
              // className="h-5"
            ></Image>
          </div>
          <div className="flex justify-center my-auto">
            <Image
              src="images/orbitz.svg"
              width={173}
              height={32}
              // className="h-5"
            ></Image>
          </div>
        </div>
      </div>
      <div className=" xl:flex xl:justify-between xl:py-16 xl:px-16 xl:space-x-8">
        <div id="home" className="px-4 py-8 md:px-10 md:py-10 lg:py-16 xl:flex-col xl:my-auto xl:py-0 xl:px-0 xl:max-w-[450px]">
          <div className="space-y-[10px] text-center xl:flex-col xl:text-left xl:items-center ">
            <div>
              <p className="flex justify-center xl:justify-start text-[16px] lg:text-[24px] font-bold text-[#F85E9F] tracking-widest">
                SERVICES
              </p>
            </div>
            <div>
              <p className="flex justify-center text-[32px] lg:text-[40px] font-bold text-black">
                Our top value categories for you
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-between md:flex-wrap px-4 md:px-6 md:pb-10 lg:px-16 lg:pb-16 xl:pb-0 xl:px-0 ">
          {mockCards1.map((data, idx) => {
            return (
              <Cards1
                title={data.title}
                subtitle={data.subtitle}
                imageSource={data.imageSource}
                key={idx}
              />
            );
          })}
        </div>
      </div>
      <div className="xl:flex xl:flex-row xl:justify-between xl:mx-[112px]">
        <div id="promo" className="px-4 py-8 md:px-10 md:py-10 xl:py-16 xl:px-3">
          <div className="space-y-[10px] text-center xl:space-y-[5px]">
            <div>
              <p className="flex justify-center text-[16px] lg:text-[24px] font-bold text-[#F85E9F] tracking-widest">
                TOP DESTINATION
              </p>
            </div>
            <div>
              <p className="flex justify-center text-[32px] lg:text-[40px] font-bold text-black">
                Explore top destination
              </p>
            </div>
          </div>
        </div>
        {/* ======= ARROW BUTTON ====== */}
        <div className=" px-4 lg:flex-col lg:my-auto">
          <div className=" w-full space-x-4 flex justify-between sm:justify-center">
            <div>
              <button className="py-6 px-6 sm:py-[38px] sm:px-[38px] bg-white transition rounded-full shadow-lg">
                <Image
                  src="images/arrow-left.svg"
                  alt="arrow left"
                  height={24}
                  width={24}
                />
              </button>
            </div>
            <div>
              <button className="py-6 px-6 sm:py-[38px] sm:px-[38px] bg-[#5D50C6] hover:border-2 hover:border-gray-600 rounded-full shadow-lg">
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
      <div className="md:flex md:justify-between md:flex-wrap px-4 py-8 md:px-6 md:py-10 lg:px-16 lg:py-16 xl:px-32 bg-[#FFFFFF]">
        {mockCards2.map((cards, idx) => {
          return (
            <Cards2
              price={cards.harga}
              title={cards.nama}
              subtitle={cards.subNama}
              imageSource={cards.image}
              rate={cards.nilai}
              key={idx}
            />
          );
        })}
      </div>
      <div className=" xl:flex xl:pb-16">
        <div className="px-4 py-8 lg:px-16 lg:py-16 xl:px-0">
          <div className="flex justify-center lg:px-4 xl:px-0">
            <Image
              className="w-full max-w-[871px]"
              src="images/people-discount.svg"
              width={398}
              height={318}
            />
          </div>
        </div>

        {/* ========== TRAVEL POINT ==========*/}
        <div className="lg:px-16 xl:px-0 xl:w-[441px]">
          <div className="px-4 py-8 md:px-10 md:py-10 lg:py-16 xl:px-0">
            <div className="space-y-4 text-center xl:text-left">
              <div>
                <p className="flex justify-center xl:justify-start  text-[16px] lg:text-[24px] font-bold text-[#F85E9F] tracking-widest">
                  TRAVEL POINT
                </p>
              </div>
              <div>
                <p className="flex justify-center text-[32px] lg:text-[40px] font-bold text-black">
                  We helping you find your dream location
                </p>
              </div>
              <div>
                <p className="flex justify-center text-[18px] text-black">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-around md:flex-wrap px-4 md:px-6 md:pb-10 lg:px-4 lg:pb-16 xl:pb-0 lg:justify-center xl:px-0 xl:flex-wrap xl:justify-between ">
            {mockCards3.map((data, idx) => {
              return <Cards3 title={data.title} subtitle={data.subtitle} />;
            })}
          </div>
        </div>
      </div>

      <div className="px-4 py-8 md:px-10 md:py-10 lg:py-16 xl:flex xl:px-0 xl:pl-[9%] ">
        <div className=" px-6 flex justify-center xl:px-0 xl:max-w-[53%] xl:order-2 ">
          <Image
            className="w-full max-w-[780px]"
            src="images/background2.svg"
            width={693}
            height={836}
            alt="gambar"
          />
        </div>
        <div className="xl:max-w-[47%] xl:order-1 xl:pr-[70px]">
          <div className="py-8 md:py-10 md:px-[60px] lg:py-16 xl:pt-0 xl:px-0 ">
            <div className="px-4 space-y-4 text-center xl:px-0 xl:text-left">
              <div>
                <p className="text-[16px] lg:text-[24px] font-bold text-[#F85E9F] tracking-widest">
                  KEY FEATURES
                </p>
              </div>
              <div>
                <p className=" text-[32px] lg:text-[40px] xl:text-left font-bold text-black">
                  We offer best services
                </p>
              </div>
              <div>
                <p className="text-[18px] xl:text-left text-black">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
          </div>

          {/* ====card we offer best service ====- */}
          {mockCards4.map((card, idx) => {
            return (
              <Cards4
                title={card.nama}
                subtitle={card.subNama}
                imageSource={card.image}
                key={idx}
              />
            );
          })}
        </div>
      </div>
      <SimpleSlider className=" text-black" />
      <div className="hidden lg:flex lg:px-[28px] xl:px-[93px] mb-[-172px]">
        <Image
          src="images/graphic_elements.svg"
          width={183}
          height={176}
          alt="graph"
        />
      </div>

      <div id="contact" className=" px-4 sm:px-[42px] lg:px-16 lg:py-16 xl:px-32">
        <div className="py-8 md:py-10 md:px-16 lg:py-32 sm:rounded-[32px] shadow-lg bg-[#FFFBF0]">
          <div className="px-[32px] lg:px-0 text-center">
            <div>
              <p className="text-[16px] lg:text-[23px] font-bold text-[#F85E9F] tracking-widest">
                SUBSCRIBE TO OUR NEWS LETTER
              </p>
            </div>
            <div>
              <p className=" text-[32px] lg:text-[40px] mt-8 xl:text-[55px] font-bold text-black leading-[120%]">
                Prepare yourself & let’s explore the beauty of the world
              </p>
            </div>
            <form className="flex-col space-y-8 sm:space-y-0 sm:flex sm:flex-row sm:items-center justify-center sm:space-x-8 lg:text-[23px]  mt-16">
              <input
                className="w-full text-black max-w-[757px] py-6 p-8 sm:px-8 sm:py-8 rounded-[16px] sm:rounded-[32px] font-medium text-center sm:text-left lg:text-[23px]"
                placeholder="Your Email"
                type="text"
              ></input>
              <button
                onClick={redirect}
                className="w-full sm:max-w-[235px] flex space-x-4 py-6 sm:px-16 sm:py-8 bg-[#5D50C6] hover:bg-[#6a5cdf] text-sm lg:text-[23px] justify-center font-medium text-white rounded-[16px] sm:rounded-[32px] items-center shadow-lg"
              >
                <h1 className="flex lg:h-[34.5px] items-center">Subscribe</h1>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-end mb-[-351px]">
        <Image
          className="max-h-[351px]"
          src="images/graphic_elements_2.svg"
          width={331}
          height={351}
          alt="graph2"
        />
      </div>
      <Footer />

      <section></section>

      <div className="fixed bottom-0 right-0 left-0 bg-[#5D50C6] py-2 xl:hidden">
        <div className="flex justify-around">
          <Link href="/" className="w-1/4">
            <div className="flex flex-col pt-1 justify-center items-center">
              <ion-icon name="home"></ion-icon>
              <div>Home</div>
            </div>
          </Link>
          <Link href="/#home" className="w-1/4">
            <div className="flex flex-col pt-1 justify-center items-center">
              <ion-icon name="rocket"></ion-icon>
              <div>Discover</div>
            </div>
          </Link>
          <Link href="/#promo" className="w-1/4">
            <div className="flex flex-col pt-1 justify-center items-center">
              <ion-icon name="pricetags"></ion-icon>
              <div>Promo</div>
            </div>
          </Link>
          <Link href="/#contact" className="w-1/4">
            <div className="flex flex-col pt-1 justify-center items-center">
              <ion-icon name="call"></ion-icon>
              <div>Contact</div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* <div className="bottom-0 right-0 left-0 h-[72px] p-4 xl:hidden"></div> */}
    </>
  );
};
