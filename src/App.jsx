import { useState } from "react";
import "./App.css";
import Hero from "@/sections/hero/view";
import Navbar from "@/components/Navbar";
import AboutMe from "@/sections/about-me/view";
import { Canvas } from "@react-three/fiber";
import ParticleBackground from "@/components/ParticleBackground";

function App() {
  return (
    <div className="app">
      {/* Fixed Full-Screen Particle Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
