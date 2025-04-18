import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';



export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-gray-950 text-white p-3   flex justify-between items-center fixed w-full z-50 '>
            {/* Logo */}
            <div >
                <h1 className='text-2xl font-semibold'>
                    Ramzi.<span className='text-blue-500'>Borz</span>
                </h1>
            </div>

            {/* Desktop Links */}
            <ul className='font-semibold text-xl hidden md:flex items-center gap-7'>
                <li><a className=' hover:text-blue-500 hover:duration-300' href="/">Home</a></li>
                <li><a
                   href='#about'
                    className=' hover:text-blue-500 hover:duration-300 cursor-pointer'>About</a></li>
                <li><a
                  href='#edex'
                    className=' hover:text-blue-500 hover:duration-300 cursor-pointer' >Education & Experience</a></li>
                <li><a
                   href='#projects'
                    className=' hover:text-blue-500 hover:duration-300 cursor-pointer' >Projects</a></li>
                <li>
                    <a
                        href='#contact'
                        className='flex items-center gap-1 bg-blue-500 px-3 py-1 rounded-md shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2'

                    >
                        Contact <IoIosArrowForward size={24} />
                    </a>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <IoMenu
                onClick={() => setIsOpen(true)}
                size={28}
                className='md:hidden cursor-pointer'
            />

            {/* Mobile Menu */}
            {isOpen && (
                <div className='bg-gray-950 fixed top-0 right-0 w-3/4 h-screen p-5 md:hidden z-40 border-t border-gray-700'>
                    <IoMdClose onClick={() => setIsOpen(false)} className='cursor-pointer' size={24} />
                    <ul className='flex flex-col gap-7 text-lg font-semibold mt-12'>
                        <li><a href="/">Home</a></li>
                        <li><a
                        href='#about'  
                        >About</a></li>
                        <li><Link
                            to='edex'
                            smooth={true}
                            duration={1000}
                        >Education & Experience</Link></li>
                        <li><Link
                            to='projects'
                            smooth={true}
                            duration={1000}
                        >Projects</Link></li>
                        <li>
                            <Link
                                to='contact'
                                smooth={true}
                                duration={1000}
                                className='flex items-center w-fit gap-1 bg-blue-500 px-3 py-1 rounded-md shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2'

                            >
                                Contact <IoIosArrowForward size={24} />
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
