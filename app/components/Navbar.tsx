import React from "react";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center gap-[30px] w-full px-[20px] h-[56px] bg-slate-purple">
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

            <div className="text-[24px] text-lavender-gray font-medium">
              <mark className="bg-transparent font-bold text-white">Skiva</mark>
              .shop API
            </div>
          </a>
        </div>

        <div className="grow flex justify-end">
          <button
            type="button"
            className="flex justify-between items-center w-full max-w-[250px] h-[36px] px-[8px] bg-search-dark rounded-[8px] border border-white"
          >
            <span className="flex items-center gap-[5px]">
              <span className="text-[22px]">
                <LuSearch />
              </span>
              <span className="text-placehold-search font-medium">Search</span>
            </span>
            <span>
              <Image src="" alt="" />
            </span>
          </button>
        </div>

        <div className="flex gap-[15px]">
          <a
            href=""
            className="w-8 h-8 text-[24px] flex justify-center items-center"
          >
            <IoLogoGithub />
          </a>

          <div className="pl-[15px] border-l border-light-gray max-h-8">
            <button
              type="button"
              className="w-8 h-8 text-[24px] flex justify-center items-center"
            >
              <MdOutlineDarkMode />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
