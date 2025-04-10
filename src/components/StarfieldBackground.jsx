import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useState } from "react";

const AnimatedStars = () => {

  const { scene } = useThree();
  
  useFrame(() => {
    scene.rotation.y -= 0.00009; 
  });

  return (
    <Stars
      radius={100} // Hur långt bort stjärnorna är
      depth={50}   // Hur djupt in i rymden
      count={600} // Antal stjärnor
      factor={5}   // Storleksfaktor
      saturation={0} // 0 = vit
      fade={true}  // Fade-effekt
      speed={1}    // Hastighet (kan justeras, men påverkar inte denna lösning)
    />
  );
};

const MovingCamera = () => {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  useFrame(() => {
    const targetZ = 1 + scrollY * 0.03;
    camera.position.z += (targetZ - camera.position.z) * 0.6;
  });

  return null;
};

export const StarfieldBackground = () => {
  return (
    <Canvas
      camera={{ position: [10, 0, 1], fov: 75 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
        pointerEvents: "none",
      }}
    >
      <color attach="background" args={["#000000"]} />
      <AnimatedStars />
      <MovingCamera />
    </Canvas>
  );
};
