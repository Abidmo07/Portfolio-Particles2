import React, { useLayoutEffect, useRef } from 'react';
import borz from '../assets/borzz.png'
import ramzi from "../assets/ramzi.png"
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import cv from '../assets/CV.pdf';
import gsap from 'gsap';
import Particle from './Particle';

export default function Hero() {
    const comp = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Text Stagger
            gsap.from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            });

            // Image Entrance
            gsap.from(".hero-image", {
                scale: 0.5,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)",
                delay: 0.8
            });

        }, comp);
        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e) => {
        if (!imageRef.current) return;
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;

        gsap.to(imageRef.current, {
            rotationY: x,
            rotationX: -y,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        if (!imageRef.current) return;
        gsap.to(imageRef.current, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <section id="hero" ref={comp} className='relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-color)] pt-20 px-6'>
            {/* Background Particles */}
            <div className="absolute inset-0 z-0">
                <Particle />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-10">
                {/* Text Content */}
                <div className='flex flex-col w-full md:w-1/2 space-y-6'>
                    <h1 className='hero-text text-5xl md:text-7xl font-bold leading-tight'>
                        Hi👋, I'm <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-pink)]'>
                            Ramzi Borz
                        </span>
                    </h1>

                    <h3 className='hero-text text-2xl md:text-3xl font-medium text-gray-300'>
                        Full-Stack Developer | <span className='text-[var(--accent-cyan)]'>Laravel & Next.js</span>
                    </h3>

                    <p className='hero-text text-gray-400 text-lg max-w-xl leading-relaxed'>
                        Creating stunning digital experiences with code. Passionate about clean architecture, SOLID principles, and building scalable applications. Currently mastering TypeScript & Next.js.
                    </p>

                    <div className='hero-text flex flex-wrap gap-4 mt-8'>
                        <a
                            href={cv}
                            download
                            className='px-8 py-3 bg-[var(--accent-cyan)] text-black font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,242,234,0.6)] hover:scale-105 active:scale-95'
                        >
                            Download CV
                        </a>

                        <div className='flex items-center gap-6 ml-4'>
                            <a href="https://www.linkedin.com/in/mohamed-abid-4061b8325/" className='text-white hover:text-[var(--accent-cyan)] transition-colors transform hover:scale-125'>
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://github.com/Abidmo07" className='text-white hover:text-[var(--accent-cyan)] transition-colors transform hover:scale-125'>
                                <FaGithub size={30} />
                            </a>
                            <a href="https://www.facebook.com/" className='text-white hover:text-[var(--accent-cyan)] transition-colors transform hover:scale-125'>
                                <FaFacebook size={30} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3D Image Section */}
                <div
                    className='hero-image w-full md:w-1/2 flex justify-center perspective-1000'
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div ref={imageRef} className='relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-pink)] shadow-[0_0_50px_rgba(0,242,234,0.3)]'>
                        <div className='w-full h-full rounded-full overflow-hidden bg-[var(--bg-color)] relative z-10'>
                            <img
                                src={ramzi}
                                alt="Ramzi Borz"
                                className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500'
                            />
                        </div>
                        {/* Floating Tech Orbs */}
                        {/* We could add floating icons here too using absolute positioning */}
                    </div>
                </div>
            </div>
        </section>
    );
}
