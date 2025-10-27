import Lottie from 'lottie-react';
import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import animation from '../lotties/animation.json';
import {motion} from 'framer-motion'

export default function Contact() {
    return (
        <div id='contact' className='bg-gray-950 py-16'>
            <motion.h1
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
                 duration: 1,
                 delay: 0.6,
             }}
            className='text-center md:text-6xl text-4xl font-semibold text-gray-300'>Contact</motion.h1>
            
            <div className='flex flex-col md:flex-row w-full items-center p-5 md:p-10 gap-10  mx-auto'>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                
                className='w-full md:w-1/4 flex flex-col gap-5'>
                    <h1 className='text-gray-300 md:text-6xl text-4xl font-semibold'>Let's Talk</h1>
                    <p className='text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem est fugiat saepe, quaerat ipsam ducimus possimus corrupti quisquam inventore.
                    </p>

                    <div className='space-y-3'>
                        <h2 className='text-gray-300 text-2xl font-semibold'>Email</h2>
                        <p className='text-blue-500 hover:underline cursor-pointer text-lg'>abidmo2003@gmail.com</p>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-gray-300 text-2xl font-semibold'>Phone</h2>
                        <p className='text-blue-500 hover:underline cursor-pointer text-lg'>+213 541027222</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <a href="#" title="LinkedIn"><FaLinkedin className='text-white hover:text-blue-500 transition' size={25} /></a>
                        <a href="#" title="GitHub"><FaGithub className='text-white hover:text-gray-400 transition' size={25} /></a>
                        <a href="#" title="Facebook"><FaFacebook className='text-white hover:text-blue-600 transition' size={25} /></a>
                        <a href="#" title="Twitter"><FaXTwitter className='text-white hover:text-sky-400 transition' size={25} /></a>
                    </div>
                </motion.div>

                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5,delay:0.8}}

                
                className='w-full md:w-1/4'>
                    <Lottie animationData={animation} loop={true} />
                </motion.div>

                <motion.div
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.2}}
                
                className='w-full md:w-1/2 bg-gray-800 border-2 p-8 md:p-10 border-blue-500 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 space-y-5'>
                    <h1 className='text-gray-300 font-semibold text-3xl md:text-4xl'>Get in Touch</h1>
                    
                    <form className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-300' htmlFor="name">Name</label>
                            <input className='p-3 text-gray-300 rounded-md border bg-gray-950' type="text" name="name" placeholder='Type your name' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-300' htmlFor="email">Email</label>
                            <input className='p-3 text-gray-300 rounded-md border bg-gray-950' type="email" name="email" placeholder='Type your email' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-gray-300' htmlFor="message">Message</label>
                            <textarea rows={5} className='border rounded-md text-gray-300 p-3 bg-gray-950' name="message" placeholder='Type your message'></textarea>
                        </div>

                        <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md self-start'>
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        
            

        </div>
    );
}
