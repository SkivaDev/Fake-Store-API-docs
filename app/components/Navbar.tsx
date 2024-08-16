import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center gap-[30px] w-full px-[20px] h-[56px] bg-slate-500">
        <div>
          <a href="" className="flex">
            <div>
              <Image src="/images/logo-store.png" alt="logo-store" width={45} height={45}/>
            </div>

            <div>
              <mark>Skiva</mark>.shop API
            </div>
          </a>
        </div>

        <div>
          <button type="button">
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

        <div className="flex">
          <a href="">
            i
            <Image src="" alt="" />
          </a>

          <button type="button">
            o
            <Image src="" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
