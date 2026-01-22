import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text } from "@react-three/drei";
import * as THREE from "three";

const SkillOrb = ({ position, color, skill, index, totalOrbs }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Orbital animation
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    const radius = 3;
    const speed = 0.3;
    const offset = (index / totalOrbs) * Math.PI * 2;

    // Orbit in circular path
    meshRef.current.position.x = Math.cos(time * speed + offset) * radius;
    meshRef.current.position.y = Math.sin(time * speed + offset) * radius;
    meshRef.current.position.z = Math.sin(time * speed * 0.5 + offset) * 1.5;

    // Gentle rotation
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;

    // Scale on hover
    const targetScale = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1,
    );
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[0.3, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>

      {/* Skill label on hover */}
      {hovered && (
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          {skill}
        </Text>
      )}
    </group>
  );
};

const SkillOrbs = () => {
  const skills = [
    { name: "React", color: "#61DAFB", category: "frontend" },
    { name: "Three.js", color: "#000000", category: "frontend" },
    { name: "TypeScript", color: "#3178C6", category: "frontend" },
    { name: "Next.js", color: "#000000", category: "frontend" },
    { name: "Node.js", color: "#339933", category: "backend" },
    { name: "Python", color: "#3776AB", category: "backend" },
    { name: "MongoDB", color: "#47A248", category: "backend" },
    { name: "Git", color: "#F05032", category: "tools" },
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />

      {/* Skill Orbs */}
      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.name}
          skill={skill.name}
          color={skill.color}
          index={index}
          totalOrbs={skills.length}
        />
      ))}
    </>
  );
};

export default SkillOrbs;
