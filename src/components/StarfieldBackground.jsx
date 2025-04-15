import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { throttle } from "../utils.js"; // <-- Import throttle

// === Custom Hook ===
const useThrottledScrollY = (delay = 100) => {
  const scrollY = useRef(0);

  useEffect(() => {
    const updateScroll = () => {
      scrollY.current = window.scrollY;
    };

    const throttledScroll = throttle(updateScroll, delay);

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [delay]);

  return scrollY;
};

// === AnimatedStars ===
const AnimatedStars = () => {
  const { scene } = useThree();

  useFrame(() => {
    scene.rotation.y -= 0.00009;
  });

  return (
    <Stars
      radius={100}
      depth={50}
      count={600}
      factor={5}
      saturation={0}
      fade={true}
      speed={1}
    />
  );
};

// === MovingCamera ===
const MovingCamera = () => {
  const { camera } = useThree();
  const scrollY = useThrottledScrollY(25);

  useFrame(() => {
    const targetZ = 1 + scrollY.current * 0.03;
    camera.position.z += (targetZ - camera.position.z) * 0.6;
  });

  return null;
};

// === BackgroundFade ===
const BackgroundFade = () => {
  const { scene } = useThree();
  const scrollY = useThrottledScrollY(25);

  const startColor = useMemo(() => new THREE.Color("#000414"), []);
  const endColor = useMemo(() => new THREE.Color("#000000"), []);
  const bgColor = useRef(new THREE.Color("#000414"));

  useFrame(() => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollY.current / (maxScroll / 2), 1);
    bgColor.current.copy(startColor).lerp(endColor, scrollPercent);
    scene.background = bgColor.current;
  });

  return null;
};

// === StarfieldBackground ===
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
      <color attach="background" args={["#000414"]} />
      <AnimatedStars />
      <MovingCamera />
      <BackgroundFade />
    </Canvas>
  );
};
