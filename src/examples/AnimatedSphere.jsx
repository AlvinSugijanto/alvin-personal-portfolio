import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Animated Sphere with Morphing Effect
 * Demonstrates: useFrame, vertex manipulation, advanced animations
 */
const AnimatedSphere = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Rotate on multiple axes
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.5;
      
      // Pulsating scale effect
      const scale = 1 + Math.sin(time * 2) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }

    // Animate material color
    if (materialRef.current) {
      const hue = (state.clock.elapsedTime * 0.1) % 1;
      materialRef.current.color = new THREE.Color().setHSL(hue, 0.7, 0.6);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial 
        ref={materialRef}
        metalness={0.8}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};

export default AnimatedSphere;
