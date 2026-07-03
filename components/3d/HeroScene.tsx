"use client";

import { Environment, Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function useIsSmallScreen() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.7, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.45 + 0.08, 0.035);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6 + Math.sin(t * 0.32) * 0.18, 0.025);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function MetallicRing() {
  const group = useRef<THREE.Group>(null);
  const small = useIsSmallScreen();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, 0.48 + Math.sin(t * 0.28) * 0.08, 0.04);
    group.current.rotation.y += small ? 0.003 : 0.005;
    group.current.rotation.z = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={group} scale={small ? 0.86 : 1}>
      <Float speed={1.2} rotationIntensity={0.34} floatIntensity={0.55}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[1.55, 0.25, 96, 192]} />
          <meshStandardMaterial
            color="#f8f5ff"
            metalness={0.72}
            roughness={0.18}
            envMapIntensity={1.25}
          />
        </mesh>
        <mesh rotation={[0.6, 0.16, -0.55]} scale={0.72}>
          <torusKnotGeometry args={[1.05, 0.055, 170, 18]} />
          <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.18} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.55} floatIntensity={0.82}>
        <mesh position={[-1.95, -0.92, 0.4]} rotation={[0.4, 0.1, 0.2]}>
          <icosahedronGeometry args={[0.36, 2]} />
          <MeshTransmissionMaterial
            color="#ffffff"
            thickness={0.72}
            roughness={0.18}
            transmission={0.82}
            chromaticAberration={0.04}
            anisotropy={0.18}
          />
        </mesh>
      </Float>
      <Float speed={1.45} rotationIntensity={0.42} floatIntensity={0.7}>
        <mesh position={[1.95, 0.9, -0.2]}>
          <octahedronGeometry args={[0.32, 1]} />
          <meshStandardMaterial
            color="#36c5f0"
            metalness={0.28}
            roughness={0.22}
            emissive="#36c5f0"
            emissiveIntensity={0.08}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleField() {
  const small = useIsSmallScreen();
  const positions = useMemo(() => {
    const count = small ? 36 : 90;
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 4
    ] as [number, number, number]);
  }, [small]);

  return (
    <group>
      {positions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[index % 4 === 0 ? 0.014 : 0.009, 8, 8]} />
          <meshBasicMaterial color={index % 3 === 0 ? "#f472b6" : "#ffffff"} transparent opacity={0.65} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#fbf9ff"]} />
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 5, 6]} intensity={2.4} color="#ffffff" />
      <pointLight position={[-3, 2, 3]} intensity={18} color="#f472b6" distance={7} />
      <pointLight position={[3, -2, 3]} intensity={12} color="#36c5f0" distance={7} />
      <MetallicRing />
      <ParticleField />
      <Sparkles count={34} speed={0.35} size={2.4} color="#8b5cf6" opacity={0.34} scale={[5, 3, 3]} />
      <Environment preset="city" />
      <CameraRig />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.65]}
      camera={{ position: [0, 0.25, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
