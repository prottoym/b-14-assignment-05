import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 z-50 h-[80px] border-b border-gray-200 bg-white">
            <div className="flex h-full items-center justify-between px-6">

                {/* hamburger */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Logo */}
                <img src={Logo} alt="Dev Stack" className="w-[110px] md:w-[130px] h-auto" />

                {/* Middle nav links — hidden on mobile/tablet, shown on desktop */}
                <ul className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-gray-500">
                    <li className="text-pink-500">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* Buttons */}
                <div className="flex items-center gap-2 sm:gap-5">
                    <button className="text-[13px] sm:text-[14px] font-medium text-gray-600">
                        Sign In
                    </button>
                    <button className="rounded-full bg-pink-600 px-4 sm:px-6 py-2 sm:py-3 text-[13px] sm:text-[14px] font-medium text-white">
                        Sign Up
                    </button>
                </div>
            </div>

            {/*  menu */}
            {open && (
                <ul className="lg:hidden flex flex-col gap-4 px-6 py-4 border-t border-gray-200 bg-white text-[14px] font-medium text-gray-600">
                    <li className="text-pink-500">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;