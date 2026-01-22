import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CubeParticleBackground = () => {
  const meshRef = useRef();
  const tempObject = useMemo(() => new THREE.Object3D(), []);

  const particleCount = 1000; // jangan terlalu besar (cube lebih berat dari points)

  // Generate initial positions
  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < particleCount; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
        ),
        rotation: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ),
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    return arr;
  }, []);

  useFrame((state, delta) => {
    const mouseX = state.mouse.x * 0.5;
    const mouseY = state.mouse.y * 0.5;

    particles.forEach((p, i) => {
      // subtle floating
      p.position.y += Math.sin(state.clock.elapsedTime * p.speed) * 0.002;

      tempObject.position.copy(p.position);

      // tempObject.rotation.x += 0.01;
      // tempObject.rotation.y += 0.01;

      // // mouse influence
      // tempObject.rotation.x += mouseY * 0.02;
      // tempObject.rotation.y += mouseX * 0.02;

      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, particleCount]}>
      <boxGeometry args={[0.04, 0.04, 0.04]} />
      <ambientLight />
      <meshStandardMaterial
        color="#22d3ee"
        transparent
        opacity={0.8}
        // roughness={0.4}
        // metalness={0.2}
      />
    </instancedMesh>
  );
};

export default CubeParticleBackground;
