"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  // Estado inicial para almacenar la apertura/cierre de cada detalle
  const [openDetails, setOpenDetails] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
  });

  // Función para alternar el estado de apertura/cierre
  const toggleOpen = (id: number) => {
    setOpenDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const details = [
    {
      id: 1,
      title: "About",
      items: ["Introduction", "Showcase"],
    },
    {
      id: 2,
      title: "REST API",
      items: ["Products", "Filter products"],
    },
  ];

  return (
    <nav className="fixed z-40 w-full">
      <div className="w-full max-w-[300px] h-screen pt-[57px]">
        <div className="w-full h-full bg-deep-blue px-4 pt-4">
          <ul>
            {details.map((detail) => (
              <Detail
                key={detail.id}
                id={detail.id}
                isOpen={openDetails[detail.id]}
                title={detail.title}
                items={detail.items}
                toggleOpen={toggleOpen}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Detail = ({
  id,
  isOpen,
  title,
  items,
  toggleOpen,
}: {
  id: number;
  isOpen: boolean;
  title: string;
  items: string[];
  toggleOpen: (id: number) => void;
}) => {
  return (
    <li>
      <summary
        className="flex items-center gap-[8px] py-[8px] leading-[100%] cursor-pointer"
        onClick={() => toggleOpen(id)}
      >
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        >
          <IoIosArrowDown />
        </span>
        <span className="text-[.938rem] font-semibold text-white">{title}</span>
      </summary>
      <ul
        className={`mt-[4px] overflow-hidden transition-max-height duration-[350ms] ${
          isOpen ? "max-h-[100px]" : "max-h-0"
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="block w-full px-[10px] py-[7px] text-[13.6px] font-medium leading-[100%] text-nav-purple rounded-[4px] hover:text-white"
            >
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Navbar;
