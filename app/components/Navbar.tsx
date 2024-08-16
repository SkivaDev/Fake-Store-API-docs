import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='w-full max-w-[300px] pt-[57px]'>
            <div className='bg-slate-purple px-4 pt-4'>
                <ul>
                    <li>
                        <details >
                            <summary className='text-white'>
                                <span>About</span>
                            </summary>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span>Introduction</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Showcase</span>
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar