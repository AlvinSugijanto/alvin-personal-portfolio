import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Model = ({ modelPath, hideFloor = true, followMouse = true, ...props }) => {
  const modelRef = useRef();
  const { scene } = useGLTF(modelPath);
  const { viewport, pointer } = useThree();
  
  // Target rotation based on mouse position
  const targetRotation = useRef({ x: 0, y: 0 });

  // Hide floor/ground objects if needed
  useEffect(() => {
    if (hideFloor && scene) {
      scene.traverse((child) => {
        // Hide objects with names containing floor, ground, or plane
        if (child.isMesh && child.name) {
          const name = child.name.toLowerCase();
          if (name.includes("floor") || name.includes("ground") || name.includes("plane")) {
            child.visible = false;
            console.log("Hiding:", child.name);
          }
        }
      });
    }
  }, [scene, hideFloor]);

  // Mouse tracking and smooth rotation
  // useFrame((state, delta) => {
  //   if (modelRef.current && followMouse) {
  //     // Calculate target rotation based on mouse position
  //     targetRotation.current.y = pointer.x * 0.5;
  //     targetRotation.current.x = -pointer.y * 0.3;
      
  //     // Smooth interpolation (lerp) for natural movement
  //     modelRef.current.rotation.y = THREE.MathUtils.lerp(
  //       modelRef.current.rotation.y,
  //       targetRotation.current.y,
  //       0.1
  //     );
      
  //     modelRef.current.rotation.x = THREE.MathUtils.lerp(
  //       modelRef.current.rotation.x,
  //       targetRotation.current.x,
  //       0.1
  //     );
  //   }
  // });

  return <primitive ref={modelRef} object={scene} {...props} />;
};

// Preload the model for better performance
export const preloadModel = (modelPath) => {
  useGLTF.preload(modelPath);
};

export default Model;
