import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleBackground = () => {
  const pointsRef = useRef();

  const particleCount = 5000;

  // Generate positions
  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 30; // x
      arr[i + 1] = (Math.random() - 0.5) * 30; // y
      arr[i + 2] = (Math.random() - 0.5) * 20; // z
    }

    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    // mouse.x & mouse.y sudah normalized (-1 sampai 1)
    const targetRotationY = state.mouse.x * 0.3;
    const targetRotationX = state.mouse.y * 0.3;

    pointsRef.current.rotation.y +=
      (targetRotationY - pointsRef.current.rotation.y) * 0.05;

    pointsRef.current.rotation.x +=
      (targetRotationX - pointsRef.current.rotation.x) * 0.05;

    // slow ambient rotation
    pointsRef.current.rotation.z += delta * 0.03;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.05}
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default ParticleBackground;
