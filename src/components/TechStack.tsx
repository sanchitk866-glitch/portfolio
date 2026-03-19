import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const skills = [
  "Social Services",
  "Supportive Services",
  "School Social Work",
  "Research Skills",
  "Research Projects",
  "Research Support",
  "Canva",
  "Leadership",
  "English",
  "Hindi",
  "Marketing",
  "Finance",
  "Teaching",
];

// Combine words to create enough points for a lush sphere
const wordsList = [...skills, ...skills, ...skills];

function Cloud({ count, radius }: { count: number; radius: number }) {
  const words = useMemo(() => {
    const temp = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    // We use all the words up to the count
    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);

      const x = Math.cos(theta) * Math.sin(phi) * radius;
      const y = Math.sin(theta) * Math.sin(phi) * radius;
      const z = Math.cos(phi) * radius;
      const word = wordsList[i % wordsList.length];
      temp.push({ position: new THREE.Vector3(x, y, z), word });
    }
    return temp;
  }, [count, radius]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {words.map((item, index) => (
        <Word key={index} position={item.position}>
          {item.word}
        </Word>
      ))}
    </group>
  );
}

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
  const ref = useRef<any>(null);
  const color = new THREE.Color();
  const [hovered, setHovered] = useState(false);

  // Make the text face the camera and glow on hover
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
      ref.current.material.color.lerp(
        color.set(hovered ? "#00ff9d" : "#ffffff"),
        0.15
      );
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={1.3}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
}

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>
        My <span>Skills</span>
      </h2>

      <Canvas
        camera={{ position: [0, 0, 22], fov: 60 }}
        className="tech-canvas"
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={1} />
        <Cloud count={wordsList.length} radius={11} />
      </Canvas>
    </div>
  );
};

export default TechStack;
