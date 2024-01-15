import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto h-full flex flex-row items-center justify-between px-2 md:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Enok Dev
          </span>
        </a>

        <div className="w-full md:w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-[15px] sm:mr-4 px-[20px] py-[10px] rounded-full text-gray-200 md:flex">
            <a href="#about-me" className="cursor-pointer">
              Apropos
            </a>
            <a href="#skills" className="cursor-pointer">
              <span className="">Compétences</span>
            </a>
            <a href="#projects" className="cursor-pointer">
              Projets
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
