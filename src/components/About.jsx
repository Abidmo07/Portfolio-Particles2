import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import dev from "../assets/dev.jpeg"
import { motion } from "framer-motion"


export default function About() {
  return (
    <div id="about" className='bg-gray-800 w-full py-16'>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        className='text-gray-300 text-4xl md:text-6xl font-semibold text-center'>About Me</motion.h1>
      <div className='w-full md:flex-row flex flex-col items-center px-6 mt-10 gap-5'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='md:w-1/2 w-full'>
          <img className=' rounded-full border-2 border-blue-400 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-blue-500 ' src={dev} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=' bg-gray-950 w-full  md:w-1/2 border-2 p-10 border-blue-500 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-blue-500 space-y-6'>

<p className="text-gray-200">
  I’m a passionate full-stack web developer and computer science student at ESI SBA, driven by a constant curiosity to explore new technologies and deliver elegant, user-centric solutions. With a strong foundation in Laravel and React, I specialize in building robust e-commerce platforms and responsive web applications tailored to client needs.
</p>
<p className="text-gray-200">
  My expertise extends to crafting seamless cash-on-delivery workflows and integrating third-party delivery APIs, ensuring both simplicity for customers and efficiency for administrators. I take pride in designing intuitive interfaces with Blade, Elementor, and Tailwind CSS, backed by clean, maintainable code.
</p>
<p className="text-gray-200">
  Beyond web development, I’m a network enthusiast working towards CCNA certification and an IoT hobbyist who loves prototyping smart devices. This blend of software, networking, and hardware experience helps me deliver end-to-end solutions—from backend APIs to connected devices.
</p>
<p className="text-gray-200">
  Anchored by my Salafi Muslim values, I approach every project with integrity, attention to detail, and a commitment to continuous learning—whether that’s mastering TypeScript, improving my English and French skills, or exploring the latest tools that keep me at the forefront of web innovation.
</p>


          <h3 className='text-blue-500 font-semibold text-2xl'>My Skills</h3>
          <div className='flex w-full justify-center   md:flex items-center  gap-6'>
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: [-8, 8] }}
              transition={{
                duration: 1,
                delay: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >                        <RiNextjsFill className='text-white' size={40} />
            </motion.div>
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: [-8, 8] }}
              transition={{
                duration: 1,
                delay: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >                        <FaLaravel className='text-red-500' size={40} />
            </motion.div>
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: [-8, 8] }}
              transition={{
                duration: 1,
                delay: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >                        <RiTailwindCssFill className='text-blue-500' size={40} />
            </motion.div>
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: [-8, 8] }}
              transition={{
                duration: 1,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >                        <SiMysql className='text-white' size={40} />
            </motion.div>
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: [-8, 8] }}
              transition={{
                duration: 1,
                delay: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >                        <FaGitSquare className='text-orange-600' size={40} />
            </motion.div>
          </div>
          <a className=' flex items-center bg-blue-500 px-3 py-1 rounded-md  border-blue-400 border-2 text-gray-200 w-fit ' href="/Contact">Contact

            <IoIosArrowForward size={24} />


          </a>

        </motion.div>

      </div>
    </div>
  )
}
