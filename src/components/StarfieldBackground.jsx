import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useState } from "react"; // Här importerar vi useEffect och useState från React

const AnimatedStars = () => {

  const { scene } = useThree();
  
  // Roterar stjärnorna kontinuerligt
  useFrame(() => {
    scene.rotation.y -= 0.00007; // Roterar scenen för att skapa rörelse på stjärnorna
  });

  return (
    <Stars
      radius={100} // Hur långt bort stjärnorna är
      depth={50}   // Hur djupt in i rymden
      count={1600} // Antal stjärnor
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
  }, []); // Sätt tom array för att endast lyssna på scroll när komponenten mountas

  useFrame(() => {
    // Mappa scrollY till en Z-position
    const targetZ = 1 - scrollY * 0.02;
    camera.position.z += (targetZ - camera.position.z) * 0.1; // smooth lerp
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
