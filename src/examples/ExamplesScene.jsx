import { OrbitControls } from "@react-three/drei";
import InteractiveBox from "./InteractiveBox";
import AnimatedSphere from "./AnimatedSphere";
import ParticleField from "./ParticleField";

/**
 * Examples Scene
 * Combines all example components to demonstrate various R3F features
 */
const ExamplesScene = () => {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ecdc4" />
      
      {/* Particle Background */}
      <ParticleField count={2000} />
      
      {/* Interactive Boxes */}
      <InteractiveBox position={[-3, 0, 0]} />
      <InteractiveBox position={[0, 0, 0]} />
      <InteractiveBox position={[3, 0, 0]} />
      
      {/* Animated Spheres */}
      <AnimatedSphere position={[-2, 2, -2]} />
      <AnimatedSphere position={[2, 2, -2]} />
      
      {/* Grid Helper (for reference) */}
      <gridHelper args={[20, 20, "#444444", "#222222"]} />
      
      {/* Camera Controls */}
      <OrbitControls 
        enableDamping 
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={20}
      />
    </>
  );
};

export default ExamplesScene;
