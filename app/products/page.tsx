import React from 'react'
import RightSidebar from '../components/RightSidebar'

const page = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 order-1 w-full xl:max-w-[75%] ">
        <div>
          <div>
            <h1>Products</h1>
          </div>
        </div>
        <div>
            <div>main content</div>
            <footer>footer</footer>
        </div>
      </main>
      <RightSidebar />
    </>
  )
}

export default page