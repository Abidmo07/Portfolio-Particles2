import About from "./components/About"
import Contact from "./components/Contact"
import EdEx from "./components/EdEx"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ParticlesComponent from "./components/Particle"
import Particle from "./components/Particle"
import Project from "./components/Project"


function App() {
  return (
    <>
      <div className="overflow-x-hidden max-w-screen scroll-smooth">
        <div className="fixed inset-0 -z-10 h-screen">
          <ParticlesComponent />
        </div>
        <NavBar />
        <Hero />
        <About />
        <EdEx />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

