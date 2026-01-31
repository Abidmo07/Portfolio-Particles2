import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';
import gsap from 'gsap';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        // Entrance animation
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(linksRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.5, ease: "power2.out" }
        );
    }, []);

    const addToRefs = (el) => {
        if (el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    };

    return (
        <nav ref={navRef} className='glass fixed w-full z-50 px-6 py-4 flex justify-between items-center text-white'>
            {/* Logo */}
            <div className='relative z-50'>
                <h1 className='text-3xl font-bold tracking-tighter cursor-pointer select-none'>
                    Ramzi<span className='text-[var(--accent-cyan)]'>.Borz</span>
                </h1>
            </div>

            {/* Desktop Links */}
            <ul className='hidden md:flex items-center gap-8 font-medium text-lg'>
                {['Home', 'About', 'Education & Experience', 'Projects'].map((item, index) => (
                    <li key={index} ref={addToRefs}>
                        <Link
                            to={item === 'Home' ? 'hero' : item === 'Education & Experience' ? 'edex' : item.toLowerCase()}
                            smooth={true}
                            duration={1000}
                            className='relative group cursor-pointer hover:text-[var(--accent-cyan)] transition-colors'
                        >
                            {/* Animated Underline */}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-cyan)] transition-all group-hover:w-full"></span>
                            {item}
                        </Link>
                    </li>
                ))}

                {/* Contact Button */}
                <li ref={addToRefs}>
                    <Link
                        to='contact'
                        smooth={true}
                        duration={1000}
                        className='flex items-center gap-2 px-5 py-2 bg-[var(--accent-cyan)] text-black font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,242,234,0.6)] hover:scale-105 active:scale-95 cursor-pointer'
                    >
                        Contact <IoIosArrowForward size={20} />
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className='md:hidden z-50' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoMdClose size={32} /> : <IoMenu size={32} />}
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#050510] flex flex-col justify-center items-center gap-10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                {['Home', 'About', 'Education & Experience', 'Projects', 'Contact'].map((item, index) => (
                    <Link
                        key={index}
                        to={item === 'Home' ? 'hero' : item === 'Education & Experience' ? 'edex' : item.toLowerCase()}
                        smooth={true}
                        duration={1000}
                        onClick={() => setIsOpen(false)}
                        className='text-2xl font-bold hover:text-[var(--accent-cyan)] cursor-pointer'
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
