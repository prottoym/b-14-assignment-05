import React from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (

        <nav className="w-full h-[80px] border-b border-gray-200 bg-white">

            <div className="flex h-full items-center justify-between px-6">

                {/* Logo */} 
                <img src={Logo} alt="Dev Stack" className="w-[130px] h-auto" />

                {/* Middle items part */}
                <ul className="flex items-center gap-8 text-[14px] font-medium text-gray-500">
                    <li className="text-pink-500">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* buttons part */}
                <div className="flex items-center gap-5">
                    <button className="text-[14px] font-medium text-gray-600">
                        Sign In
                    </button>

                    <button className="rounded-full bg-pink-600 px-6 py-3 text-[14px] font-medium text-white">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;