import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({ title, subtitle, date, description, icon, align = 'left' }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 mb-12 relative timeline-item ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>

      {/* Center Line Dot */}
      <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)] transform md:-translate-x-1/2 z-10" />

      {/* Content Box */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${align === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className="glass p-6 rounded-xl hover:border-[var(--accent-cyan)] transition-colors duration-300">
          <div className={`text-5xl mb-4 ${align === 'left' ? 'md:ml-auto' : ''} w-fit`}>{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <h4 className="text-[var(--accent-pink)] font-semibold mb-2">{subtitle}</h4>
          <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 mb-4">{date}</span>
          <p className="text-gray-300 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
      <div className="hidden md:block w-1/2" />
    </div>
  )
}

export default function EdEx() {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".section-title", {
        scrollTrigger: { trigger: ".section-title", start: "top 80%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
      });

      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.1
        })
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div id='edex' ref={container} className='bg-[var(--bg-color)] min-h-screen py-20 relative'>
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-40 bottom-20 w-0.5 bg-gradient-to-b from-[var(--accent-cyan)] to-transparent opacity-30"></div>

      <h1 className='section-title text-center text-white text-5xl md:text-6xl font-bold mb-20'>
        Education & <span className='text-[var(--accent-cyan)]'>Experience</span>
      </h1>

      <div className='max-w-6xl mx-auto px-6'>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">My Journey</h2>

          <TimelineItem
            align="left"
            icon="🎓"
            title="Higher School of Computer Science SBA"
            subtitle="Engineering & Master Degree"
            date="2021 - Present"
            description="Currently pursuing advanced studies in computer science, focusing on software engineering, algorithms, and distributed systems."
          />

          <TimelineItem
            align="right"
            icon="💻"
            title="Sarl FlamboSoft (Internship)"
            subtitle="Laravel Developer"
            date="2024 - 2025"
            description="Developed and maintained web applications using Laravel. Integrated payment gateways and optimized database queries for improved performance."
          />

          <TimelineItem
            align="left"
            icon="🎓"
            title="High School Omar Harayeg"
            subtitle="Baccalauréat"
            date="2018 - 2021"
            description="Completed secondary education with a focus on mathematics and sciences, building a strong foundation for computer science."
          />
        </div>

      </div>
    </div>
  )
}
