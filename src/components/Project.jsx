import React, { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";
import chat from "../assets/chat.png";
import movie from "../assets/movie.png";
import port from "../assets/port.png";
import store from "../assets/store.png";
import ai from "../assets/ai.png";
import track from "../assets/track.png"

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".project-header", {
        scrollTrigger: {
          trigger: ".project-header",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".swiper-container", {
        scrollTrigger: {
          trigger: ".swiper-container",
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });

    }, container);
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      img: chat,
      name: "BorzChatt",
      description: "A real-time chat app using Supabase with typing indicators, active status, and group chat support.",
      techUsed: ["Next.js", "Tailwind", "Supabase"],
      prev: "https://real-time-chatapp-chi.vercel.app",
      git: "https://github.com/Abidmo07/real-time-chatapp",
    },
    {
      img: movie,
      name: "Movie App",
      description: "A movie browser with search, trailers, and ratings using the IMDB API.",
      techUsed: ["Next.js", "Axios", "IMDB API"],
      prev: "https://moviedz.vercel.app/",
      git: "https://github.com/Abidmo07/Movie-next-app",
    },
    {
      img: store,
      name: "E-commerce Store",
      description: "Cash-on-delivery online store with delivery pricing by wilaya and a simple order system.",
      techUsed: ["Laravel", "Next.js", "Filament"],
      prev: "#",
      git: "https://github.com/Abidmo07/Ecom-DZ.git",
    },
    {
      img: port,
      name: "Developer Portfolio",
      description: "A personal portfolio site with animated transitions and project showcase.",
      techUsed: ["React", "Tailwind", "GSAP"],
      prev: "https://portfolio-particles-xi.vercel.app/",
      git: "https://github.com/Abidmo07/Portfolio-Particles.git",
    },
    {
      img: ai,
      name: "Borz AI",
      description: "A full-stack web app that simulate chatgpt in text generation using deepseek model through OpenRouterAPI",
      techUsed: ["Next.js", "Laravel API", "OpenRouter"],
      prev: "#",
      git: "https://github.com/Abidmo07/BorzAI.git",
    },
    {
      img: track,
      name: "Crypto Portfolio Tracker",
      description: "A crypto tracker app with favorites management using Next.js, Zustand, and TypeScript",
      techUsed: ["Next.js", "CoinGecko API"],
      prev: "https://crypto-track-app-zqq8.vercel.app/",
      git: "https://github.com/Abidmo07/Crypto-Track-app",
    },
  ];

  return (
    <section id="projects" ref={container} className="relative bg-[var(--bg-color)] py-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-cyan)]/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-pink)]/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="project-header text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured <span className="text-[var(--accent-cyan)]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore a collection of my recent work, showcasing my improved skills in Full-Stack development.
          </p>
        </div>

        <div className="swiper-container relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 !overflow-visible"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
