import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div

      className='bg-gray-800 py-3'>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-gray-300 text-center' >© 2025 Abid Ramzi. All rights reserved.</motion.p>
    </div>
  )
}
