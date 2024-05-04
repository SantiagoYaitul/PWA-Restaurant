import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between">
                <div>
                    <Link href="/">
                        <span className="flex items-center text-white">
                            <h1>Logo</h1>
                        </span>
                    </Link>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/pages/Details">
                                <span className="text-white hover:text-gray-400">Details</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="text-white hover:text-gray-400">Home</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

