import React from 'react';
import Link from 'next/link';
import style from './Navbar.module.css';
import { FaA, FaPlus } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className={`${style.navbar}`}>
            <div className={`${style.flexContainer}`}>
                <div>
                    <Link href="/">
                        <span className={`${style.logo}`}>
                            <h1 className='flex flex-row'><FaA className='text-lg' /><FaPlus className='text-lg -m-2' /><FaPlus className='text-lg' /></h1>
                        </span>
                    </Link>
                </div>
                <div>
                    <ul className={`${style.navLinks}`}>
                        <li>
                            <Link href="/pages/Menu">
                                <span className={`${style.navLink} ${style.hoverEffect}`}>Menu</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className={`${style.navLink} ${style.hoverEffect}`}>Home</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

