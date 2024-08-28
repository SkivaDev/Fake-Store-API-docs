import React from "react";
import RightSidebar from "../components/RightSidebar";

const ProductsPage = () => {
  return (
    <>
      <main className="order-1 min-h-screen w-full xl:max-w-[75%] font-IBM_Plex">
        <div className="p-[24px] w-full">
          <div className="ml-auto w-full max-w-[900px]">
            <h1 className="text-[42px] font-bold">Products</h1>
          </div>
        </div>
        <div className="mt-[1px] p-[24px] w-full">
          <div className="ml-auto w-full max-w-[900px]">
            <div className="text-medium-gray">
              <h2 className="text-[35px] font-semibold text-white">
                Get all products
              </h2>

              <p className="mt-[20px]">
                You can access the list of 200 products by using the{" "}
                <code dir="auto">/products</code> endpoint.
              </p>

              <p className="mt-[20px]">Request:</p>

              <pre className="mt-[20px] px-[16px] py-[12px] border border-white bg-pre-background text-[14px] text-white overflow-x-auto">
                <code>
                  <span className="line-code">
                    <span>[GET] http://localhost:3000/api/v1/products</span>
                  </span>
                </code>
              </pre>

              <p className="mt-[20px]">Response:</p>

              <pre className="mt-5 p-4 border border-white bg-pre-background text-sm text-white overflow-x-auto">
                <code className="whitespace-pre">
                  <span className="block">{"["}</span>
                  <span className="block ml-4">{"{"}</span>
                </code>
              </pre>
            </div>
            <footer>footer</footer>
          </div>
        </div>
      </main>
      <RightSidebar />
    </>
  );
};

export default ProductsPage;
