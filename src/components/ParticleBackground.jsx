import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleBackground = () => {
  const particlesRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  // Create particle geometry with proper BufferAttribute
  const particleCount = 5000;

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30; // x - wider spread
      positions[i + 1] = (Math.random() - 0.5) * 30; // y - taller spread
      positions[i + 2] = (Math.random() - 0.5) * 20; // z - deeper spread
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Track mouse movement
  React.useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate particles based on mouse position
  useFrame((state, delta) => {
    if (particlesRef.current) {
      // Smooth rotation following mouse
      const targetRotationY = mousePosition.current.x * 0.1;
      const targetRotationX = mousePosition.current.y * 0.1;

      particlesRef.current.rotation.y +=
        (targetRotationY - particlesRef.current.rotation.y) * 0.01;
      particlesRef.current.rotation.x +=
        (targetRotationX - particlesRef.current.rotation.x) * 0.01;

      // Slow continuous rotation
      particlesRef.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <pointsMaterial
        size={0.05}
        color="#22d3ee"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleBackground;
