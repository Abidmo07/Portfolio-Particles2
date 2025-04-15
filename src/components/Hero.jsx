import React from 'react'
import borz from '../assets/borzz.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
    return (
        <>
            <div className='bg-gray-950 flex  items-center-safe w-full px-6  '>
                <div className='flex flex-col w-1/2 '>
                    <h1 className='text-white md:text-6xl text-4xl font-semibold'>Hi👋,I'm</h1>
                    <h1 className='text-blue-500 md:text-6xl text-4xl font-semibold'>Ramzi Borz</h1>
                    <h3 className='text-white text-2xl my-5'>Full-Stack Developer | Laravel&Next Stack Enthusiast</h3>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam deleniti, libero odit debitis, ab est itaque, quasi sed iure fugiat repellat? Ducimus quidem minus non? Illum eum labore suscipit dicta!</p>
                    <button className=' cursor-pointer flex items-center bg-blue-500 w-fit px-3 py-2 rounded-md gap-2 my-5 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-blue-500 border-blue-400 border-2 ' type="button">

                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                        </svg>

                        <p className='text-white font-normal'>Download CV</p>
                    </button>

                    <div className='flex items-center gap-5'>
                        <a href="#"><FaLinkedin className='text-white' size={25} /></a>
                        <a href="#"><FaGithub className='text-white' size={25} /></a>
                        <a href="#"><FaFacebook className='text-white' size={25} /></a>
                        <a href="#"><FaXTwitter className='text-white' size={25} /></a>
                    </div>

                </div>
                <div className='flex justify-center items-center w-1/2'>
                    <img  src={borz} alt="" />
                </div>

            </div>
        </>
    )
}
