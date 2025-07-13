// src/App.tsx
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './components/Scene';
import { useState, useEffect } from 'react';

export default function App() {
  const [clickmesh, setClickmesh] = useState<boolean>(false);
  const [targetSphere, setTargetSphere] = useState<THREE.Mesh | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Use any width breakpoint you want
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for resize

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isDesktop) {
    return (
      <div
        style={{
          width: '90vw',
          height: '100vh',
          backgroundColor: '#111',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          textAlign: 'center',
          padding: '10rem',
          marginRight: '10rem',
        }}
      >
        Please open this portfolio on a wider screen like a desktop or laptop for the best experience.
      </div>
    );
  }

  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      onPointerMissed={() => {
        console.log('Missed click');
        setClickmesh(true);
      }}
      gl={{
        preserveDrawingBuffer: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      dpr={1}
    >
      <Scene
        targetSphere={targetSphere}
        setTargetSphere={setTargetSphere}
        clickmesh={clickmesh}
        setClickmesh={setClickmesh}
      />
      
    </Canvas>
  );
}
