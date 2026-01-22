import { useThree } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const Scene = () => {
  const three = useThree();

  return (
    <>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.6} />
      
      {/* Hemisphere Light - sky and ground colors */}
      <hemisphereLight args={["#ffffff", "#444444", 0.8]} />
      
      {/* Main Directional Lights */}
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-10, 10, -5]} intensity={0.8} />
      
      {/* Spotlight for dramatic effect */}
      <spotLight 
        position={[0, 15, 0]} 
        angle={0.5} 
        penumbra={0.5} 
        intensity={1} 
        castShadow 
      />
      
      {/* Point Lights for fill lighting */}
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, 3, -5]} intensity={0.4} color="#aaccff" />
      <pointLight position={[0, -2, 3]} intensity={0.3} color="#ffeecc" />

      {/* GLTF Model */}
      <Model modelPath="/molang_3_d_copy.gltf" position={[0, -2, -5]} scale={1} />

      {/* Camera Controls - Improved */}
      <OrbitControls 
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        minDistance={3}
        maxDistance={15}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
};

export default Scene;
