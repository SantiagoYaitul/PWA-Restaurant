import React from 'react';
import Link from 'next/link';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${style.navbar}`}>
            <div className={`${style.flexContainer}`}>
                <div>
                    <Link href="/">
                        <span className={`${style.logo}`}>
                            <h1>A++</h1>
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

