import Link from 'next/link';
import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className="bg-white fixed top-0 w-full z-10 shadow-md">
            <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center py-4">
                <div className="text-[30px] font-bold">Asiket</div>
                <div className="flex gap-6 font-semibold">
                    <Link href="/" className="hover:text-[#ff4D41]">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-[#ff4D41]">
                        About
                    </Link>
                    <Link href="/portfolio" className="hover:text-[#ff4D41]">
                        Portfolio
                    </Link>
                    <Link href="/blog" className="hover:text-[#ff4D41]">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-[#ff4D41]">
                        Contact
                    </Link>
                </div>
                <a
                    href="#"
                    className="flex items-center gap-2 bg-red-500 text-white border border-red-600 font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out"
                >
                    Download CV
                    <MdOutlineFileDownload className="text-xl" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
