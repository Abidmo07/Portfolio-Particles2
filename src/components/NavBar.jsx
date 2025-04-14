import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function NavBar() {
    return (
        <div className='bg-gray-950 text-white p-5 flex justify-between items-center fixed top-0 w-full '>
            <div>
                <h1 className='text-2xl font-semibold'>Ramzi.<span className='text-blue-500'>Borz</span></h1>
            </div>
            <div>
                <ul className='font-semibold text-xl flex items-center gap-7'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/Education&Experience">Education & Experience</a></li>
                    <li><a href="/Projects">Projects</a></li>
                    <li  ><a className=' flex items-center bg-blue-500 px-3 py-1 rounded-md shadow-[0_0_10px_rgba(59,130,246,0.7)]  shadow-blue-500 border-blue-400 border-2 ' href="/Contact">Contact

                        <IoIosArrowForward size={24} />


                    </a>

                    </li>
                </ul>
            </div>
        </div>
    )
}
