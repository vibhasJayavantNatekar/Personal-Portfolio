// ./components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // covers the whole page, behind content
        background: { color: "#0d0d0d" }, // dark background
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: ["#ffffff", "#9b59b6"] }, // white and purple dots
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 1, max: 4 }, random: true },
          links: {
            enable: true,
            distance: 150,
            color: "#9b59b6",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

