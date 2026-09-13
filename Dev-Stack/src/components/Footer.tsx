import Logo from "../assets/logo-text.png";

import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full max-w-[1280px] mx-auto min-h-[224px]  rounded-2xl px-8 py-8 box-border bg-white">
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 w-full">

                {/* Brands */}
                
                <div className="w-full md:w-[446.7px] flex flex-col">
                    <img src={Logo} alt="Logo" className="w-[180px] h-[28px] object-contain object-left mb-3" />
                    <p className="w-full max-w-[384px] text-sm text-gray-500 leading-relaxed mb-3">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <ul className="flex items-center gap-4 text-sm font-medium text-gray-800">
                        <li className="cursor-pointer hover:text-pink-500">GitHub</li>
                        <li className="cursor-pointer hover:text-pink-500">Twitter</li>
                        <li className="cursor-pointer hover:text-pink-500">LinkedIn</li>
                    </ul>
                </div>

                {/* Product part */}
                <div className="w-full md:w-[211.2px]">
                    <h5 className="text-xs font-semibold tracking-wide text-gray-900 mb-3">
                        PRODUCT
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="cursor-pointer hover:text-gray-900">Home</li>
                        <li className="cursor-pointer hover:text-gray-900">Technologies</li>
                        <li className="cursor-pointer hover:text-gray-900">Projects</li>
                    </ul>
                </div>

                {/* Company part */}
                <div className="w-full md:w-[211.2px]">
                    <h5 className="text-xs font-semibold tracking-wide text-gray-900 mb-3">
                        COMPANY
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="cursor-pointer hover:text-gray-900">About</li>
                        <li className="cursor-pointer hover:text-gray-900">Contact</li>
                        <li className="cursor-pointer hover:text-gray-900">Careers</li>
                    </ul>
                </div>

                {/* Legal part */}
                <div className="w-full md:w-[211.2px]">
                    <h5 className="text-xs font-semibold tracking-wide text-gray-900 mb-3">
                        LEGAL
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="cursor-pointer hover:text-gray-900">Privacy Policy</li>
                        <li className="cursor-pointer hover:text-gray-900">Terms of Service</li>
                    </ul>
                </div>
            </div>

            {/* Bottom part */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full mt-8 pt-6 border-t border-gray-200 text-sm text-gray-400">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <ul className="flex items-center gap-6">
                    <li className="cursor-pointer hover:text-gray-600">Privacy</li>
                    <li className="cursor-pointer hover:text-gray-600">Terms</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;