import Lottie from 'lottie-react';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import animation from '../lotties/animation.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const container = useRef(null);
    const form = useRef();
    const [loading, setLoading] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".contact-header", {
                scrollTrigger: { trigger: ".contact-header", start: "top 80%" },
                y: 50, opacity: 0, duration: 1, ease: "power3.out"
            });

            gsap.from(".contact-info", {
                scrollTrigger: { trigger: ".contact-content", start: "top 70%" },
                x: -50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2
            });

            gsap.from(".contact-form", {
                scrollTrigger: { trigger: ".contact-content", start: "top 70%" },
                x: 50, opacity: 0, duration: 1, ease: "power3.out", delay: 0.4
            });

        }, container);
        return () => ctx.revert();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = "service_lbg8s7k";
        const TEMPLATE_ID = "template_7o5nzfr";
        const PUBLIC_KEY = "7X8Jo7nAZUX4hoeBf";

        // Check if placeholders are still present
        if (SERVICE_ID === "YOUR_SERVICE_ID") {
            toast.error("Configuration Missing! Please set your EmailJS credentials in Contact.jsx");
            setLoading(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                toast.success("Message sent! I'll get back to you soon.");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                toast.error("Failed to send message. Please try again later.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id='contact' ref={container} className='bg-[var(--bg-color)] py-20 relative overflow-hidden'>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

            <h1 className='contact-header text-center text-5xl md:text-6xl font-bold text-white mb-16 relative z-10'>
                Get In <span className="text-[var(--accent-cyan)]">Touch</span>
            </h1>

            <div className='contact-content max-w-7xl mx-auto flex flex-col md:flex-row items-start px-6 gap-12 relative z-10'>

                {/* Left Side Info */}
                <div className='contact-info w-full md:w-1/3 flex flex-col gap-8'>
                    <div className="space-y-4">
                        <h2 className='text-3xl font-bold text-white'>Let's Talk</h2>
                        <p className='text-gray-400 leading-relaxed'>
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>
                    </div>

                    <div className='glass p-6 rounded-2xl space-y-4 border border-white/10'>
                        <div>
                            <h3 className='text-sm text-gray-500 uppercase tracking-wider mb-1'>Email</h3>
                            <a href="mailto:tommshelby111@gmail.com" className='text-xl text-[var(--accent-cyan)] hover:opacity-80 transition-opacity'>tommshelby111@gmail.com</a>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-500 uppercase tracking-wider mb-1'>Phone</h3>
                            <a href="tel:+213541027222" className='text-xl text-white hover:text-[var(--accent-cyan)] transition-colors'>+213 541 027 222</a>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        {[FaLinkedin, FaGithub, FaFacebook, FaXTwitter].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className='w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-[var(--accent-cyan)] hover:text-black text-white transition-all duration-300 border border-white/10'
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    <div className="w-full max-w-[200px] mx-auto opacity-80 mix-blend-screen">
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className='contact-form w-full md:w-2/3'>
                    <div className='glass p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl'>
                        <h2 className='text-2xl font-bold text-white mb-6'>Send a Message</h2>

                        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className='flex flex-col gap-2'>
                                    <label className='text-sm text-gray-400 font-medium ml-1'>Name</label>
                                    <input
                                        className='p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-[var(--accent-cyan)] focus:outline-none transition-all placeholder:text-gray-600'
                                        type="text"
                                        name="user_name"
                                        placeholder='John Doe'
                                        required
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-sm text-gray-400 font-medium ml-1'>Email</label>
                                    <input
                                        className='p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-[var(--accent-cyan)] focus:outline-none transition-all placeholder:text-gray-600'
                                        type="email"
                                        name="user_email"
                                        placeholder='john@example.com'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-gray-400 font-medium ml-1'>Message</label>
                                <textarea
                                    rows={6}
                                    className='p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:border-[var(--accent-cyan)] focus:outline-none transition-all resize-none placeholder:text-gray-600'
                                    name="message"
                                    placeholder='Tell me about your project...'
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className='bg-gradient-to-r from-[var(--accent-cyan)] to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,242,234,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
