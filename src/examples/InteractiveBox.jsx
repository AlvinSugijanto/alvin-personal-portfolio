import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Interactive Box Component
 * Demonstrates: useState, useFrame, pointer events, animations
 */
const InteractiveBox = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Animate rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate faster when clicked
      meshRef.current.rotation.y += delta * (clicked ? 2 : 0.5);
      
      // Bounce animation using sine wave
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={clicked ? 1.5 : hovered ? 1.2 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={clicked ? "#ff6b6b" : hovered ? "#4ecdc4" : "#45b7d1"} 
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
};

export default InteractiveBox;
