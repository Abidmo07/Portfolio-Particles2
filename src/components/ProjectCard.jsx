import React from 'react'
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

export default function ProjectCard({ img, name, description, techUsed, prev, git }) {
    return (
        <div className="group relative h-full bg-[var(--bg-color)] rounded-xl overflow-hidden border border-white/10 hover:border-[var(--accent-cyan)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,234,0.3)] hover:-translate-y-2">

            {/* Image Overlay */}
            <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all z-10" />
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent-cyan)] transition-colors">{name}</h2>
                <p className="text-gray-400 mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {techUsed.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                    <a
                        href={prev}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[var(--accent-cyan)] text-black font-semibold hover:bg-white transition-colors"
                    >
                        <HiExternalLink size={20} /> Demo
                    </a>
                    <a
                        href={git}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
                    >
                        <FaGithub size={20} /> Code
                    </a>
                </div>
            </div>
        </div>
    )
}
