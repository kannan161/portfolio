'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function ClayShape({ position, color, type }: { position: [number, number, number]; color: string; type: 'torus' | 'sphere' | 'box' | 'knot' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.12 + (type === 'torus' ? 0.4 : 0);
    meshRef.current.rotation.y = time * 0.18;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={meshRef} position={position} castShadow receiveShadow>
        {type === 'torus' && <torusGeometry args={[0.9, 0.35, 32, 64]} />}
        {type === 'sphere' && <sphereGeometry args={[0.8, 64, 64]} />}
        {type === 'box' && <boxGeometry args={[1.1, 1.1, 1.1]} />}
        {type === 'knot' && <torusKnotGeometry args={[0.65, 0.22, 128, 16]} />}
        <meshPhysicalMaterial
          color={color}
          roughness={0.6}
          metalness={0.15}
          clearcoat={0.35}
          clearcoatRoughness={0.3}
          reflectivity={0.25}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    // Gentle mouse follow effect
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.3, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.3, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* Central main shape */}
      <ClayShape position={[0, 0, 0]} color="#7c3aed" type="knot" />
      
      {/* Orbiting side shapes */}
      <ClayShape position={[-2.8, 1.5, -1]} color="#06b6d4" type="torus" />
      <ClayShape position={[2.8, -1.2, -1]} color="#38bdf8" type="sphere" />
      <ClayShape position={[-2.2, -1.8, -1.5]} color="#475569" type="box" />
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.0} />
        <pointLight position={[-6, -4, -4]} color="#7c3aed" intensity={1.5} />
        <pointLight position={[6, 4, 4]} color="#06b6d4" intensity={2.0} />
        <spotLight position={[0, 5, 0]} intensity={1.2} color="#38bdf8" />
        
        <SceneContent />
      </Canvas>
    </div>
  );
}
