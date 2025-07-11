
import {motion} from 'framer-motion'
import React from 'react'

export default function ProjectCard({ img, name, description, techUsed, prev, git }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col text-gray-200 gap-5 bg-gray-950 p-5 rounded-md w-full hover:scale-105 duration-300">
                <img src={img} alt={name} className="w-full h-48 bg-gray-700 rounded-md" />
                <h1 className="font-semibold text-2xl">{name}</h1>
                <p>
                    {description}
                </p>
                <div className="flex flex-wrap gap-3">
                    {techUsed.map((tech, index) => {
                        return (
                            <span key={index} className="bg-gray-800 px-3 py-2 rounded-full">{tech}</span>
                        )
                    })}

                </div>
                <div className='flex justify-between '>
                    <a href={prev} className='bg-blue-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-700' >Preview</a>
                    <a href={git} className='bg-gray-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-700' >See in Github</a>

                </div>
            </motion.div>
        </>
    )
}
