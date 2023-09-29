import Image from "next/image";
import Link from "next/link";


export const Header = () => {
    return (
      <div className="fixed w-full top-0 bg-white z-50">
        <nav className="flex px-4 md:px-10 xl:px-16 py-8 xl:py-2 mx-auto justify-between">
          <Link href="/" className=" my-auto bg-white md:order-2">
            <Image
              className="py-auto hover:drop-shadow-lg"
              src="images/logo.svg"
              width={142}
              height={40}
              alt="logo"
            ></Image>
          </Link>
          <div className=" my-auto bg-white md:order-1 xl:hidden">
            <Image
              className=" "
              src="images/icon.svg"
              width={48}
              height={48}
              alt="logo"
            ></Image>
          </div>
          <div className="hidden xl:flex my-auto bg-white space-x-[60px] xl:order-2">
            <Link href="/" className=" hover:text-gray-600 text-black font-bold">
              Home
            </Link>
            <Link href="/" className="hover:text-gray-600 text-black font-bold">
              Discover
            </Link>
            <Link href="/" className="hover:text-gray-600 text-black font-bold">
              Special Deals
            </Link>
            <Link href="/" className="hover:text-gray-600 text-black font-bold">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex bg-white md:order-3">
            <button className="text-[14px] px-8 py-4 hover:text-gray-600 text-black font-bold rounded-full">
              Log In
            </button>
            <button className="text-[14px] px-8 py-4 bg-[#5D50C6] hover:bg-[#6a5cdf] transition font-bold rounded-full shadow-lg">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    );
  };