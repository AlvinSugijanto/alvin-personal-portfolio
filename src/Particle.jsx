import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";

const Particle = () => {
  const particles = useRef();

  useFrame((_, delta) => {
    particles.current.rotation.y += delta * 0.1;
    particles.current.rotation.x += delta * 0.1;
  });
  const texture = useLoader(THREE.TextureLoader, "/img/snow.jpg");

  const verticesAmount = 2000;
  const positionArray = new Float32Array(verticesAmount * 3);

  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length}
          array={positionArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        alphaMap={texture}
        transparent
        depthTest={false}
      />
    </points>
  );
};

export default Particle;
