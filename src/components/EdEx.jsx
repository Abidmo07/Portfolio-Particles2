import React from 'react'
import {motion} from 'framer-motion'

export default function EdEx() {
  return (
    <div id='edex' className='bg-gray-950  py-16'>

      <motion.h1
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{
           duration: 1,
           delay: 0.6,
       }}
      className='text-center text-gray-300 md:text-6xl text-4xl font-semibold'>Education & Experience</motion.h1>
      <div className=' flex flex-col  md:flex-row  w-full mt-10 px-10 gap-10'>
        <motion.div
         initial={{ x: -100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
        className='flex flex-col w-full md:w-1/2 gap-10'>

          <motion.h3 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{
               duration: 1,
               delay: 0.6,
           }}
          className='text-gray-300 font-semibold text-2xl'>Education</motion.h3>
          <div className='bg-gray-800 w-fit p-5 md:flex flex flex-col   gap-3 rounded-md'>
            <p className='text-5xl'>🎓</p>
            <span className='text-gray-400'>
              <h2 className='text-gray-300 text-2xl font-semibold'>Higher School of Computer Science SBA</h2>
              <p className='font-semibold'>Ingenerie and Master degree</p>
              <p>2021-present</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit cupiditate ad. Libero consectetur, sequi ipsum nam quasi, voluptates aliquid voluptatem velit consequatur quia rerum. Quaerat impedit debitis soluta. Sed!</p>
            </span>
          </div>

          <div className='bg-gray-800 w-fit p-5 md:flex flex flex-col   gap-3 rounded-md'>
            <p className='text-5xl'>🎓</p>
            <span className='text-gray-400'>
              <h2 className='text-gray-300 text-2xl font-semibold'>High school Omar Harayeg</h2>
              <p className='font-semibold'>Ingenerie and Master degree</p>
              <p>2018-2021</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit cupiditate ad. Libero consectetur, sequi ipsum nam quasi, voluptates aliquid voluptatem velit consequatur quia rerum. Quaerat impedit debitis soluta. Sed!</p>
            </span>
          </div>
     
   


        </motion.div>
        <motion.div
         initial={{ x: 100, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
        className='flex flex-col md:w-1/2 w-full gap-10'>
          <motion.h3
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{
               duration: 1,
               delay: 0.6,
           }}
          className='text-gray-300 font-semibold text-2xl'>Experience</motion.h3>
          <div className='bg-gray-800 w-fit p-5 md:flex flex flex-col   gap-3 rounded-md'>
            <p className='text-5xl'>💻</p>
            <span className='text-gray-400'>
              <h2 className='text-gray-300 text-2xl font-semibold'>Sarl FlamboSoft (InterShip)</h2>
              <p className='font-semibold'>Laravel Developper</p>
              <p>2024-2025</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit cupiditate ad. Libero consectetur, sequi ipsum nam quasi, voluptates aliquid voluptatem velit consequatur quia rerum. Quaerat impedit debitis soluta. Sed!</p>
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
