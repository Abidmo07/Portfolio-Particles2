import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle({ className = "" }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInitialized(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // you can inspect container if needed
  }, []);

  return (
    initialized && (
      <Particles
        id="tsparticles"
        className={className}
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#1a202c" } },
          fpsLimit: 120,
          detectRetina: true,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "bubble" },
              resize: true,
            },
            modes: {
              bubble: { distance: 200, duration: 2, size: 6, opacity: 0.8 },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#33CCCC" },
            links: { enable: true, distance: 150, color: "#33CCCC", opacity: 0.4 },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.5 },
          },
        }}
      />
    )
  );
}
