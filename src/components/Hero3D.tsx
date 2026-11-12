import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

const ORANGE = "#FF8A00";
const SKY = "#20A8EF";

function Globe() {
  const g = useRef<Group>(null);
  useFrame((state, d) => {
    if (!g.current) return;
    g.current.rotation.y += d * 0.25;
    g.current.rotation.x = state.pointer.y * 0.25;
    g.current.rotation.z = state.pointer.x * 0.15;
  });
  return (
    <group ref={g}>
      <mesh>
        <icosahedronGeometry args={[1.5, 3]} />
        <meshStandardMaterial color={SKY} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.32, 48, 48]} />
        <meshStandardMaterial
          color="#082D69"
          roughness={0.3}
          metalness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.1, 0.03, 16, 120]} />
        <meshStandardMaterial color={ORANGE} emissive={ORANGE} emissiveIntensity={0.8} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, 0.6, 0]}>
        <torusGeometry args={[2.45, 0.015, 16, 120]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function Orb({ pos, color, size }: { pos: [number, number, number]; color: string; size: number }) {
  return (
    <Float speed={2} floatIntensity={2} rotationIntensity={1.5}>
      <mesh position={pos}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 5]} intensity={1.6} />
      <pointLight position={[-4, -2, 3]} color={ORANGE} intensity={30} />
      <Float speed={1.4} floatIntensity={0.8}>
        {/* <Globe /> */}
      </Float>
      <Orb pos={[2.4, 1.4, 0.5]} color={ORANGE} size={0.22} />
      <Orb pos={[-2.3, -1.3, 0.8]} color={SKY} size={0.28} />
      <Orb pos={[-2.1, 1.6, -0.5]} color="#ffffff" size={0.14} />
      {/* <Sparkles count={70} scale={7} size={2.5} speed={0.4} color="#ffffff" /> */}
    </Canvas>
  );
}
