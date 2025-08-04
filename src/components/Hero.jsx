import React from 'react'
import borz from '../assets/borzz.png'
import ramzi from "../assets/ramzi.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion"
import cv from '../assets/ramzi_cv.pdf';
import { ImOpera } from 'react-icons/im';

export default function Hero() {
    return (
        <>
            <div className='bg-gray-950  flex flex-col md:flex-row  items-center justify-between  w-full px-6 py-20   '>
                <div className='flex flex-col w-full md:w-1/2 pl-5 '>
                    <motion.h1 
                    initial={{x:-300,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.2}} 
                    className='text-white md:text-6xl text-4xl font-semibold'>Hi👋,I'm</motion.h1>
                    <motion.h1
                    initial={{x:-300,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.4}} 
                    className='text-blue-500 md:text-6xl text-4xl font-semibold'>Ramzi Borz</motion.h1>
                    <motion.h3
                    initial={{x:-100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.6}} 
                    className='text-white text-2xl my-5'>Full-Stack Developer | Laravel&Next Stack Enthusiast</motion.h3>
                    <motion.p
                    initial={{x:-100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.6}} 
                    className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam deleniti, libero odit debitis, ab est itaque, quasi sed iure fugiat repellat? Ducimus quidem minus non? Illum eum labore suscipit dicta!</motion.p>
                    <motion.a
                    initial={{x:-100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.8}} 
                    href={cv}
                    className=' cursor-pointer flex items-center bg-blue-500 w-fit px-3 py-2 rounded-md gap-2 my-5 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-blue-500 border-blue-400 border-2 ' type="button">

                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                        </svg>

                        <p className='text-white font-normal'>Download CV</p>
                    </motion.a>

                    <motion.div
                    initial={{x:-100,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.8}} 
                    className='flex items-center gap-5'>
                        <a href="#"><FaLinkedin className='text-white' size={25} /></a>
                        <a href="#"><FaGithub className='text-white' size={25} /></a>
                        <a href="#"><FaFacebook className='text-white' size={25} /></a>
                        <a href="#"><FaXTwitter className='text-white' size={25} /></a>
                    </motion.div>

                </div>
             <motion.div
    initial={{opacity:0, scale:0.5}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1.4, delay:0}} 
    className='flex justify-center items-center w-full md:w-1/2 relative'>
    
    {/* Animated gradient border */}
    <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-pulse">
        <div className="bg-gray-950 rounded-full p-2">
            <img 
                className='w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl shadow-blue-500/50' 
                src={ramzi} 
                alt="Ramzi Borz" 
            />
        </div>
    </div>
    
    {/* Floating particles effect */}
    <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-75"></div>
    </div>
</motion.div>

            </div>
        </>
    )
}
