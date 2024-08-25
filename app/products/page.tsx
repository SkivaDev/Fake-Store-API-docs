import React from "react";
import RightSidebar from "../components/RightSidebar";

const ProductsPage = () => {
  return (
    <>
      <main className="order-1 min-h-screen w-full xl:max-w-[75%] ">
        <div className="p-[24px] w-full">
          <div className="ml-auto w-full max-w-[900px]">
            <h1 className="text-[42px] font-bold">Products</h1>
          </div>
        </div>
        <div className="mt-[1px] p-[24px] w-full">
          <div className="ml-auto w-full max-w-[900px]">main content</div>
          <footer>footer</footer>
        </div>
      </main>
      <RightSidebar />
    </>
  );
};

export default ProductsPage;
