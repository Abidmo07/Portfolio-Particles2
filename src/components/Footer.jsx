import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black py-8 border-t border-white/10'>
      <div className="container mx-auto px-6 text-center">
        <p className='text-gray-500 text-sm'>
          © {new Date().getFullYear()} <span className="text-white font-semibold">Ramzi Borz</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
