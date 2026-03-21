import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useDeviceType from "@/hooks/useDeviceType";

const ParticleText = ({ text = ["HELLO", "I'M ALVIN"] }) => {
  const particlesRef = useRef();
  const animationProgress = useRef(0);
  const deviceType = useDeviceType();
  // Generate particle positions from text
  const { positions, targetPositions, colors } = useMemo(() => {
    // ini digunakan untuk buat imaginary canvas supaya bisa mengerti posisi text
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 1200;
    canvas.height = 400;

    const fontSize =
      deviceType === "mobile" ? 60 : deviceType === "tablet" ? 90 : 120;
    // Configure text rendering
    ctx.fillStyle = "black";
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw each line of text
    const lineHeight = fontSize;
    const startY = canvas.height / 2 - ((text.length - 1) * lineHeight) / 2;

    text.forEach((line, index) => {
      ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
    });

    // Sample pixels to create particles
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // ini merupakan hasil dari cetakan teks nya, data nya berupa data rgba
    const pixels = imageData.data;

    const targetPos = [];
    const particleColors = [];

    // Sample every nth pixel to control particle count
    // datanya dibaca per 4 data (komponen utama yang dilihat itu A (opacity))
    const sampling = 4;

    for (let y = 0; y < canvas.height; y += sampling) {
      for (let x = 0; x < canvas.width; x += sampling) {
        const index = (y * canvas.width + x) * 4;
        const alpha = pixels[index + 3];

        // If pixel is not transparent, create a particle
        if (alpha > 128) {
          // Convert canvas coordinates to 3D space
          const posX = (x - canvas.width / 2) / 100;
          const posY = -(y - canvas.height / 1.3) / 100;

          const posZ = 0;

          targetPos.push(posX, posY, posZ);

          // Add color variation
          const colorVariation = Math.random() * 0.3 + 0.7;
          particleColors.push(
            0.13, // Cyan R
            0.83, // Cyan G
            0.93, // Cyan B
          );
        }
      }
    }

    const particleCount = targetPos.length / 3;
    const initialPos = new Float32Array(particleCount * 3);

    // Create random initial positions (scattered)
    for (let i = 0; i < particleCount * 3; i += 3) {
      initialPos[i] = (Math.random() - 0.5) * 40; // x
      initialPos[i + 1] = (Math.random() - 0.5) * 40; // y
      initialPos[i + 2] = (Math.random() - 0.5) * 20; // z
    }

    return {
      positions: initialPos,
      targetPositions: new Float32Array(targetPos),
      colors: new Float32Array(particleColors),
    };
  }, [text]);

  // Create geometry
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute(
      "targetPosition",
      new THREE.BufferAttribute(targetPositions, 3),
    );
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [positions, targetPositions, colors]);

  // console.log(positions);

  // Track mouse movement
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     mousePosition.current = {
  //       x: (event.clientX / window.innerWidth) * 2 - 1,
  //       y: -(event.clientY / window.innerHeight) * 2 + 1,
  //     };
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  // Animation loop
  useFrame((state, delta) => {
    delta = Math.min(delta, 0.033);
    // Kalau points belum siap, hentikan frame ini
    if (!particlesRef.current) return;

    // Ambil attribute posisi saat ini (acak)
    const positionAttribute = particlesRef.current.geometry.attributes.position;

    // Ambil attribute posisi target (bentuk text)
    const targetAttribute =
      particlesRef.current.geometry.attributes.targetPosition;

    // Array Float32 posisi sekarang
    const positions = positionAttribute.array;

    // Array Float32 posisi tujuan (hasil dari canvas text)
    const targets = targetAttribute.array;

    // ===============================
    // 1. Progress animasi (0 → 1)
    // ===============================

    // Selama progress < 1, tambahkan nilai berdasarkan delta (waktu antar frame)
    // delta / 3 artinya animasi selesai dalam ±3 detik
    if (animationProgress.current < 1) {
      animationProgress.current += delta / 3;
      animationProgress.current = Math.min(animationProgress.current, 1);
    }

    // Easing supaya gerakan tidak kaku (melambat di akhir)
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    // Progress akhir yang sudah di-easing
    const progress = easeOutCubic(animationProgress.current);

    // ===============================
    // 2. Loop tiap partikel
    // ===============================

    for (let i = 0; i < positions.length; i += 3) {
      // Target posisi partikel ke-i
      const targetX = targets[i];
      const targetY = targets[i + 1];
      const targetZ = targets[i + 2];

      // ===============================
      // 3. Proses "menyatukan"
      // ===============================
      // Rumus ini inti dari semuanya:
      // current + (target - current) * progress * speed

      if (animationProgress.current >= 1) {
        positions[i] = targetX;
        positions[i + 1] = targetY;
        positions[i + 2] = targetZ;
        continue;
      }

      let x = positions[i] + (targetX - positions[i]) * progress * 0.1;

      let y = positions[i + 1] + (targetY - positions[i + 1]) * progress * 0.1;

      let z = positions[i + 2] + (targetZ - positions[i + 2]) * progress * 0.1;

      // Simpan kembali posisi baru
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
    }

    // Beri tahu Three.js bahwa posisi berubah
    positionAttribute.needsUpdate = true;

    // ===============================
    // 4. Sedikit rotasi biar hidup
    // ===============================
    particlesRef.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
  });

  return (
    <points ref={particlesRef} geometry={particleGeometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleText;
