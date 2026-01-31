import React, { useLayoutEffect, useRef } from 'react'
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel, FaGitSquare } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import dev from "../assets/dev.jpeg"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".about-img", {
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 70%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from(".skill-icon", {
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div id="about" ref={container} className='bg-[var(--bg-color)] w-full py-20 relative overflow-hidden'>
      {/* Background flourish */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] -z-10" />

      <h1 className='about-title text-white text-5xl md:text-6xl font-bold text-center mb-16'>
        About <span className="text-[var(--accent-cyan)]">Me</span>
      </h1>

      <div className='about-container max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12'>

        {/* Image Side */}
        <div className='about-img w-full md:w-1/2 flex justify-center'>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-pink)] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              className='relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-black shadow-2xl'
              src={dev}
              alt="Developer"
            />
          </div>
        </div>

        {/* Text Side */}
        <div className='about-content w-full md:w-1/2'>
          <div className='glass p-8 rounded-2xl relative'>
            <div className="space-y-4 text-gray-300 leading-relaxed font-light text-lg">
              <p>
                I’m a passionate full-stack web developer and computer science student at ESI SBA. I specialize in building robust e-commerce platforms and responsive web applications tailored to client needs using Laravel and React.
              </p>
              <p>
                My expertise extends to crafting seamless workflows and integrating third-party delivery APIs. I design intuitive interfaces with Tailwind CSS, ensuring clean, maintainable code.
              </p>
              <p>
                Beyond web development, I’m a network enthusiast pursuing CCNA certification and an IoT hobbyist prototyping smart devices.
              </p>
            </div>

            <div className="mt-8">
              <h3 className='text-[var(--accent-cyan)] font-bold text-2xl mb-6'>My Tech Stack</h3>
              <div className='skills-container flex flex-wrap gap-6 text-4xl'>
                <div className="skill-icon hover:text-[var(--accent-cyan)] transition-colors"><RiNextjsFill /></div>
                <div className="skill-icon text-red-500 hover:text-red-400 transition-colors"><FaLaravel /></div>
                <div className="skill-icon text-blue-500 hover:text-blue-400 transition-colors"><RiTailwindCssFill /></div>
                <div className="skill-icon text-blue-300 hover:text-blue-200 transition-colors"><SiMysql /></div>
                <div className="skill-icon text-orange-600 hover:text-orange-500 transition-colors"><FaGitSquare /></div>
              </div>
            </div>

            <a
              href="/Contact"
              className='inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/10 hover:bg-[var(--accent-cyan)] hover:text-black border border-white/20 rounded-full transition-all duration-300 font-medium group'
            >
              Let's Talk
              <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
