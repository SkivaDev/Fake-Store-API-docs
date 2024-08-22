import React from 'react'

const RightSidebar = () => {
  return (
    <aside className='hidden xl:block order-2 relative w-full max-w-[25%]'>
        <div className='fixed top-0 pt-[57px] bg-red-400'>
          <div>
            <ul>
              <li>
                <a href="">Controllers</a>
              </li>
            </ul>
          </div>
        </div>
    </aside>
  )
}

export default RightSidebar