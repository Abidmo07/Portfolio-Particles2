import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import ProjectCard from './ProjectCard'
import chat from '../assets/chat.png'
import movie from '../assets/movie.png'
import port from '../assets/port.png'
import store from '../assets/store.png'
import ai from '../assets/ai.png'


export default function Project() {
  const projects = [
    {
      img: chat,
      name: "BorzChatt",
      description: "A real-time chat app using Supabase with typing indicators, active status, and group chat support.",
      techUsed: ["Next.js", "Tailwind", "Supabase"],
      prev: "https://real-time-chatapp-chi.vercel.app",
      git: "https://github.com/Abidmo07/real-time-chatapp"
    },
    {
      img: movie,
      name: "Movie App",
      description: "A movie browser with search, trailers, and ratings using the IMDB API.",
      techUsed: ["Next.js", "Axios", "IMDB API"],
      prev: "https://moviedz.vercel.app/",
      git: "https://github.com/Abidmo07/Movie-next-app"
    },
    {
      img: store,
      name: "E-commerce Store",
      description: "Cash-on-delivery online store with delivery pricing by wilaya and a simple order system.",
      techUsed: ["Laravel", "Nextjs", "filment"],
      prev: "#",
      git: "https://github.com/Abidmo07/Ecom-DZ.git"
    },
    {
      img: port,
      name: "Developer Portfolio",
      description: "A personal portfolio site with animated transitions and project showcase.",
      techUsed: ["React", "Tailwind", "Framer Motion"],
      prev: "https://portfolio-particles-xi.vercel.app/",
      git: "https://github.com/Abidmo07/Portfolio-Particles.git"
    },
    {
      img: ai,
      name: "Borz AI",
      description: "A full-stack web app that simulate chatgpt in text generation using deepseek model through OpenRouterAPI",
      techUsed: ["Nextjs", "Laravel API","OpenRouterAPI"],
      prev: "#",
      git: "https://github.com/Abidmo07/BorzAI.git"
    },

  ]

  return (
    <section id="projects" className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of my featured works. Each project was built with different technologies and challenges.
          </p>
        </motion.div>

        <div className="relative">
          {/* Custom navigation buttons */}
          <button className="project-swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="project-swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.project-swiper-button-next',
              prevEl: '.project-swiper-button-prev',
            }}
            pagination={{
              el: '.project-swiper-pagination',
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bg-white opacity-20 hover:opacity-50 transition-all duration-300 w-3 h-3 mx-1 rounded-full"></span>`;
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-5"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    img={project.img}
                    name={project.name}
                    description={project.description}
                    techUsed={project.techUsed}
                    prev={project.prev}
                    git={project.git}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="project-swiper-pagination flex justify-center mt-8"></div>
        </div>
      </div>
    </section>
  )
}