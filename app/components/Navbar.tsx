import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
            <div>
                <ul>
                    <li>
                        <details>
                            <summary></summary>
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