import React from 'react';
import Link from 'next/link';
import style from './Navbar.module.css';
import { FaA, FaPlus } from "react-icons/fa6";

const Navbar = () => {
    return <nav className={`${style.navbar}`}>
        <div className={`${style.flexContainer}`}>
            <Link href="/">
                <span className='flex items-center text-palette-foreground'>
                    <h1 className='flex flex-row'><FaA className='text-2xl md:text-3xl' /><FaPlus className='text-xl -m-3 md:text-2xl' /><FaPlus className='text-2xl md:text-3xl' /></h1>
                </span>
            </Link>
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
    </nav>;
};

export default Navbar;

