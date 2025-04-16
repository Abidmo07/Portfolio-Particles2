import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import dev from "../assets/dev.jpeg"


export default function About() {
    return (
        <div className='bg-gray-800 w-full py-10'>
            <h1 className='text-gray-300 text-4xl md:text-6xl font-semibold text-center'>About Me</h1>
            <div className='w-full md:flex-row flex flex-col items-center px-6 mt-10 gap-5'>
                <div className='md:w-1/2 w-full'>
                    <img className=' rounded-full border-2 border-blue-400 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-blue-500 ' src={dev} alt="" />
                </div>
                <div className=' bg-gray-950 w-full  md:w-1/2 border-2 p-10 border-blue-500 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]  shadow-blue-500 space-y-6'>

                    <p className='text-gray-200' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque repellat qui molestias unde optio a amet beatae quas sapiente rem explicabo pariatur nostrum, minima at natus fuga quos esse architecto quod nobis, repudiandae temporibus culpa et! Eligendi, hic recusandae. Quia inventore aliquid nam numquam cupiditate atque, ducimus enim nulla!</p>
                    <p className='text-gray-200' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque repellat qui molestias unde optio a amet beatae quas sapiente rem explicabo pariatur nostrum, minima at natus fuga quos esse architecto quod nobis, repudiandae temporibus culpa et! Eligendi, hic recusandae. Quia inventore aliquid nam numquam cupiditate atque, ducimus enim nulla!</p>
                    <p className='text-gray-200' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque repellat qui molestias unde optio a amet beatae quas sapiente rem explicabo pariatur nostrum, minima at natus fuga quos esse architecto quod nobis, repudiandae temporibus culpa et! Eligendi, hic recusandae. Quia inventore aliquid nam numquam cupiditate atque, ducimus enim nulla!</p>
                    <p className='text-gray-200' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eaque repellat qui molestias unde optio a amet beatae quas sapiente rem explicabo pariatur nostrum, minima at natus fuga quos esse architecto quod nobis, repudiandae temporibus culpa et! Eligendi, hic recusandae. Quia inventore aliquid nam numquam cupiditate atque, ducimus enim nulla!</p>
                    <h3 className='text-blue-500 font-semibold text-2xl'>My Skills</h3>
                    <div className='flex items-center gap-6'>
                        <RiNextjsFill className='text-white' size={40} />
                        <FaLaravel className='text-red-500' size={40} />
                        <RiTailwindCssFill className='text-blue-500' size={40} />
                        <SiMysql className='text-white' size={40} />
                        <FaGitSquare className='text-orange-600' size={40} />
                    </div>
                    <a className=' flex items-center bg-blue-500 px-3 py-1 rounded-md  border-blue-400 border-2 text-gray-200 w-fit ' href="/Contact">Contact

                        <IoIosArrowForward size={24} />


                    </a>

                </div>

            </div>
        </div>
    )
}
