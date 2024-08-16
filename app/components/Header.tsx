import React from "react";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const Header = () => {
  return (
    <nav className="fixed w-full">
      <div className="flex justify-between items-center gap-[30px] w-full px-[20px] h-[56px] bg-dark-purple">
        <div
          // onClick={props.handleClick}
          className={`BurgerButton block sm:hidden`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div>
          <a href="" className="flex justify-center items-center gap-[15px]">
            <div>
              <Image
                src="/images/store-logo.png"
                alt="store-logo"
                width={45}
                height={45}
              />
            </div>

            <div className="hidden sm:block text-[24px] text-lavender-gray font-medium">
              <mark className="bg-transparent font-bold text-white">Skiva</mark>
              .shop API
            </div>
          </a>
        </div>

        <div className="hidden grow sm:flex justify-end">
          <button
            type="button"
            className="flex justify-between items-center w-full max-w-[250px] h-[36px] px-[8px] bg-search-dark rounded-[8px] border border-transparent hover:border-white"
          >
            <span className="flex items-center gap-[5px]">
              <span className="text-[22px]">
                <LuSearch />
              </span>
              <span className="text-placehold-search font-medium">Search</span>
            </span>
            <span className="flex items-center gap-[5px]">
              <span>ctrl</span>
              <span>k</span>
            </span>
          </button>
        </div>

        <div className="hidden md:flex gap-[15px]">
          <a
            href="#"
            className="w-8 h-8 text-[24px] flex justify-center items-center hover:opacity-[0.6]"
          >
            <IoLogoGithub />
          </a>

          <div className="pl-[15px] border-l border-lavender-gray max-h-8">
            <button
              type="button"
              className="w-8 h-8 text-[24px] flex justify-center items-center rounded-full hover:bg-emphasis-200"
            >
              <MdOutlineDarkMode />
            </button>
          </div>
        </div>

        <SearchButton />
      </div>
    </nav>
  );
};

const SearchButton = () => {
  return (
    <button
      type="button"
      className="flex sm:hidden w-8 h-8 text-[24px] justify-center items-center"
    >
      <LuSearch />
    </button>
  );
};

export default Header;
