import React from 'react'

export default function EdEx() {
  return (
    <div className='bg-gray-950  py-10'>

      <h1 className='text-center text-gray-300 md:text-6xl text-4xl font-semibold'>Education & Experience</h1>
      <div className='flex w-full mt-10 px-10 gap-10'>
        <div className='flex flex-col w-1/2 gap-10'>

          <h3 className='text-gray-300 font-semibold text-2xl'>Education</h3>
          <div className='bg-gray-800 w-fit p-5 flex  gap-3 rounded-md'>
            <p className='text-5xl'>🎓</p>
            <span className='text-gray-400'>
              <h2 className='text-gray-300 text-2xl font-semibold'>Higher School of Computer Science SBA</h2>
              <p className='font-semibold'>Ingenerie and Master degree</p>
              <p>2021-present</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit cupiditate ad. Libero consectetur, sequi ipsum nam quasi, voluptates aliquid voluptatem velit consequatur quia rerum. Quaerat impedit debitis soluta. Sed!</p>
            </span>
          </div>

          <div className='bg-gray-800 w-fit p-5 flex  gap-3 rounded-md'>
            <p className='text-5xl'>🎓</p>
            <span className='text-gray-400'>
              <h2 className='text-gray-300 text-2xl font-semibold'>High school Omar Harayeg</h2>
              <p className='font-semibold'>Ingenerie and Master degree</p>
              <p>2018-2021</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit cupiditate ad. Libero consectetur, sequi ipsum nam quasi, voluptates aliquid voluptatem velit consequatur quia rerum. Quaerat impedit debitis soluta. Sed!</p>
            </span>
          </div>
     
   


        </div>
        <div className='flex flex-col w-1/2 gap-10'>
          <h3 className='text-gray-300 font-semibold text-2xl'>Experience</h3>
          <div className='bg-gray-800 w-fit p-5 flex  gap-3 rounded-md'>
            <p className='text-5xl'>💻</p>
            <span className='text-gray-400'>
              <h2 className='text-gray-300 text-2xl font-semibold'>Sarl FlamboSoft (InterShip)</h2>
              <p className='font-semibold'>Laravel Developper</p>
              <p>2024-2025</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur sit cupiditate ad. Libero consectetur, sequi ipsum nam quasi, voluptates aliquid voluptatem velit consequatur quia rerum. Quaerat impedit debitis soluta. Sed!</p>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
