import React from 'react'

export default function Project() {
  return (
    <div className="bg-gray-800 py-10">
      <h1 className="text-center text-4xl md:text-6xl text-gray-200 font-semibold">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 py-10 not-odd:">
        {/* Project Card */}
        <div className="flex flex-col text-gray-200 gap-5 bg-gray-950 p-5 rounded-md w-full hover:scale-105 duration-300">
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
        </div>

     

        <div className="flex flex-col text-gray-200 gap-5 bg-gray-950 p-5 rounded-md w-full hover:scale-105 duration-300">
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
        </div>
        <div className="flex flex-col text-gray-200 gap-5 bg-gray-950 p-5 rounded-md w-full hover:scale-105 duration-300">
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
        </div>
      </div>
    </div>
  )
}
