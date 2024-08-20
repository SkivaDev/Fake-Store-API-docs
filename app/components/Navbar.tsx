"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    about: true,
    restApi: true,
  });

  const toggleOpen = (key: string) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <nav className="fixed z-40 w-full">
      <div className="w-full max-w-[300px] h-screen pt-[57px]">
        <div className="w-full h-full bg-deep-blue px-4 pt-4">
          <ul>
            <li>
              <summary
                className="flex items-center gap-[8px] py-[8px] leading-[100%]"
                onClick={() => toggleOpen("about")}
              >
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen["about"] ? "rotate-0" : "-rotate-90"
                  }`}
                >
                  <IoIosArrowDown />
                </span>
                <span className="text-[.938rem] font-semibold text-white">
                  About
                </span>
              </summary>
              <ul
                className={`mt-[4px] overflow-hidden transition-max-height duration-[350ms] ${
                  isOpen["about"] ? "max-h-[100px]" : "max-h-0"
                }`}
              >
                <li className="">
                  <a
                    href="#"
                    className="block w-full px-[10px] py-[7px] text-[13.6px] font-medium leading-[100%] text-white bg-royal-purple rounded-[4px] hover:text-white"
                  >
                    <span>Introduction</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block w-full px-[10px] py-[7px] text-[13.6px] font-medium leading-[100%] text-nav-purple hover:text-white"
                  >
                    <span>Showcase</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <summary
                className="flex items-center gap-[8px] py-[8px] leading-[100%]"
                onClick={() => toggleOpen("restApi")}
              >
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen["restApi"] ? "rotate-0" : "-rotate-90"
                  }`}
                >
                  <IoIosArrowDown />
                </span>
                <span className="text-[.938rem] font-semibold text-white">
                  REST API
                </span>
              </summary>
              <ul
                className={`mt-[4px] overflow-hidden transition-max-height duration-[350ms] ${
                  isOpen["restApi"] ? "max-h-[100px]" : "max-h-0"
                }`}
              >
                <li className="">
                  <a
                    href="#"
                    className="block w-full px-[10px] py-[7px] text-[13.6px] font-medium leading-[100%] text-nav-purple rounded-[4px] hover:text-white"
                  >
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block w-full px-[10px] py-[7px] text-[13.6px] font-medium leading-[100%] text-nav-purple hover:text-white"
                  >
                    <span>Filter products</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
