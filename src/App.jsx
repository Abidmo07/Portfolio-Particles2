import { useEffect } from "react";
import { Toaster } from "sonner";
import About from "./components/About";
import Contact from "./components/Contact";
import EdEx from "./components/EdEx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import CustomCursor from "./components/CustomCursor";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative text-white antialiased selection:bg-[var(--accent-cyan)] selection:text-black">
      <Toaster richColors position="top-right" />
      <CustomCursor />
      <NavBar />
      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        <EdEx />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
