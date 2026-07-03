"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.22;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.42} floatIntensity={0.8}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.12, 4]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.24}
          roughness={0.28}
          emissive="#8b5cf6"
          emissiveIntensity={0.05}
        />
      </mesh>
      <mesh scale={1.18} rotation={[0.5, 0.2, 0.1]}>
        <torusGeometry args={[1.02, 0.018, 16, 120]} />
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
}

export function AccentOrbScene() {
  return (
    <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 4.4], fov: 38 }} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={2} />
        <pointLight position={[-2, 1, 3]} intensity={6} color="#f472b6" />
        <Orb />
      </Suspense>
    </Canvas>
  );
}
