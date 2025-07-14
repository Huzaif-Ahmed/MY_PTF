// src/App.tsx
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './components/Scene';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css'; // Import your CSS styles

export default function App() {
  const [clickmesh, setClickmesh] = useState<boolean>(false);
  const [targetSphere, setTargetSphere] = useState<THREE.Mesh | null>(null);
  const [index, setIndex] = useState<number>(-1);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Use any width breakpoint you want
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for resize

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  useEffect(() => {
    if (targetSphere) {
      // console.log('Target sphere set:', targetSphere);
      console.log("Modal index:", index); // Place this right before your modal JSX

    }
  }, [index, targetSphere]);

  if (!isDesktop) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#111',


      }}>
        <div
          style={{

            height: '100vh',
            backgroundColor: '#111',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            textAlign: 'center',

          }}
        >
          Please open this portfolio on a wider screen like a desktop or laptop for the best experience.
        </div>

      </div>
    );
  }

  return (
    <>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        onPointerMissed={() => {
          console.log('Missed click');
          setClickmesh(true);
          // setIndex(-1);
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
          setindex={setIndex}
          index={index}

        />



      </Canvas>
      <AnimatePresence>
        {index !== -1 && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}   // Slide in from bottom
            animate={{ opacity: 1, y: 0 }}     // Fade and slide to position
            exit={{ opacity: 0, y: -100 }}     // Slide out to top
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '40vw',
              height: '80vh',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              padding: '30px',
              borderRadius: '12px',
              color: '#fff',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <h2 style={{ marginBottom: '15px', fontSize: '2rem' }}>
              {["Profile", "Projects", "Skills", "Experience", "Education", "Contact"][index]}
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              More details about this section coming soon...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
