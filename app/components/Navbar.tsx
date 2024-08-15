import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="">
          <div>
            <Image src="" alt="" />
          </div>

          <div>
            <mark>Skiva</mark>.shop API
          </div>
        </a>

        <button type="button">
          <div>
          <div><Image src="" alt=""/></div>
          Search
          </div>
          <div>
            <Image src="" alt="" />
          </div>

        </button>


      </div>

      <div>
        <a href="">
          <Image src="" alt="" />
        </a>
        
        <button type="button">
          <Image src="" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
