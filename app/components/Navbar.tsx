import React from "react";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";

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

            <div className="text-[24px] text-lavender-gray">
              <mark className="bg-transparent font-bold text-white">Skiva</mark>
              .shop API
            </div>
          </a>
        </div>

        <div className="grow flex justify-end">
          <button
            type="button"
            className="w-full max-w-[300px] border border-white"
          >
            <div>
              <div>
                <Image src="" alt="" />
              </div>
              Search
            </div>
            <div>
              <Image src="" alt="" />
            </div>
          </button>
        </div>

        <div className="flex gap-[15px]">
          <a href="" className="w-8 h-8 text-[24px] flex justify-center items-center">
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
