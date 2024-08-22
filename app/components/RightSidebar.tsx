import React from 'react'

const RightSidebar = () => {

  const submenu = [
    {
      id: 1,
      title: "Overview",
    },
    {
      id: 2,
      title: "Get all products",
    }
  ];

  return (
    <aside className='hidden xl:block order-2 relative w-full max-w-[25%]'>
        <div className='fixed top-0 pt-[57px] '>
          <div className='pl-[30px]'>
            <ul className='rightSidebar-submenu relative my-[16px] text-[14px]'>

              {submenu.map((sub) => (
                <li key={sub.id} className='submenu__element relative pl-[30px] mb-[6px] text-nav-purple rounded-[4px] hover:text-white'>
                  <a href="">{sub.title}</a>
                </li>
              ))}

              {/* <li className='submenu__element relative pl-[30px] mb-[6px] text-nav-purple rounded-[4px] hover:text-white'>
                <a href="">Overview</a>
              </li>
              <li className='submenu__element relative pl-[30px] mb-[6px] text-nav-purple rounded-[4px] hover:text-white'>
                <a href="">Get all products</a>
              </li> */}
            </ul>
          </div>
        </div>
    </aside>
  )
}

export default RightSidebar