import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="items-center flex pl-[140px] mr-0 ml-0 text-white text-[18px] justify-center leading-7 h-[170px] w-[1519px] z-[1000]">
      <div className="flex h-[53px] items-center justify-between w-full px-4 py-4 mx-auto md:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="https://surielementor.com/montenohtml/assets/images/logo.png"
              alt="logo"
              width={217}
              height={48}
              className="inline"
            />
          </a>
        </div>
        <div className="flex items-center justify-end pr-[140px]">
          <a
            href="/"
            className="px-4 py-2 font-semibold rounded-md hover:text-[#fd562a] active:text-[#fd562a]"
          >
            Home
          </a>
          <a
            href="/"
            className="px-4 py-2 font-semibold rounded-md hover:text-[#fd562a]"
          >
            About
          </a>
          <a
            href="/"
            className="px-4 py-2 font-semibold rounded-md hover:text-[#fd562a]"
          >
            Collection
          </a>
          <a
            href="/"
            className="px-4 py-2 font-semibold rounded-md hover:text-[#fd562a]"
          >
            Pages
          </a>
          <a
            href="/"
            className="px-4 py-2 pr-[30px] font-semibold rounded-md hover:text-[#fd562a]"
          >
            Contact
          </a>
          <div className="flex text-lg leading-7">
            <a
              href="/"
              className="flex font-semibold rounded-[27px] divide-solid text-[18px] leading-7 px-11 py-3 border-2 border-[#fd562a] hover:bg-[#fd562a] transition duration-[0.4s] ease-linear delay-[0s] hover:text-black"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
