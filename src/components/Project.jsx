import React from 'react'
import {motion} from 'framer-motion'

export default function Project() {
  return (
    <div id='projects' className="bg-gray-800 py-16">
      <motion.h1
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{
           duration: 1,
           delay: 0.6,
       }}
      className="text-center text-4xl md:text-6xl text-gray-200 font-semibold">
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 py-10 not-odd:">
        {/* Project Card */}
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col text-gray-200 gap-5 bg-gray-950 p-5 rounded-md w-full hover:scale-105 duration-300">
          <img src="" alt="" className="w-full h-48 bg-gray-700 rounded-md" />
          <h1 className="font-semibold text-2xl">Ecom-DZ</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            voluptatibus doloremque facere laborum non quas...
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full">Next.js</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">Laravel</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">MySQL</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">Tailwind</span>
          </div>
        </motion.div>

     

        <motion.div
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col text-gray-200 gap-5 bg-gray-950 p-5 rounded-md w-full hover:scale-105 duration-300">
          <img src="" alt="" className="w-full h-48 bg-gray-700 rounded-md" />
          <h1 className="font-semibold text-2xl">Ecom-DZ</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            voluptatibus doloremque facere laborum non quas...
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full">Next.js</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">Laravel</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">MySQL</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">Tailwind</span>
          </div>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col text-gray-200 gap-5 bg-gray-950 p-5 rounded-md w-full hover:scale-105 duration-300">
          <img src="" alt="" className="w-full h-48 bg-gray-700 rounded-md" />
          <h1 className="font-semibold text-2xl">Ecom-DZ</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            voluptatibus doloremque facere laborum non quas...
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full">Next.js</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">Laravel</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">MySQL</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full">Tailwind</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
