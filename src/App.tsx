// src/App.tsx
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './components/Scene';
import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Html, useProgress } from '@react-three/drei'; // Import Html
import { Stats } from '@react-three/drei';
import PageRouter from './components/MyPages/PageRouter';
import './App.css';

// Custom loader component inside the Canvas
function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backdropFilter: 'blur(6px)',
        background: 'rgba(23, 23, 34, 0.75)',
        padding: '2rem 3rem',
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
        gap: '1.5rem'
      }}>
        {/* SVG Animated Circular Progress */}
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ marginBottom: '1rem' }}>
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#3535fd22"
            strokeWidth="7"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#45f2fd"
            strokeWidth="7"
            fill="none"
            strokeDasharray={2 * Math.PI * 35}
            strokeDashoffset={2 * Math.PI * 35 * (1 - progress / 100)}
            style={{
              transition: 'stroke-dashoffset 0.5s ease',
              filter: 'drop-shadow(0 0 6px #45f2fd66)'
            }}
            strokeLinecap="round"
          />
        </svg>

        {/* Percentage Text */}
        <div style={{
          color: '#FFFFFF',
          fontSize: '2rem',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textShadow: '0 2px 4px #1117',
        }}>
          {`Loading ${Math.floor(progress)}%`}
        </div>

        {/* (Optional) Subtext or animation */}
        <div style={{
          marginTop: '0.5rem',
          fontSize: '1rem',
          color: '#d3eafd',
          fontStyle: 'italic',
          opacity: 0.7,
        }}>
          Preparing your experience...
        </div>
      </div>
    </Html>
  );
}

export default function App() {
  const [clickmesh, setClickmesh] = useState<boolean>(false);
  const [targetSphere, setTargetSphere] = useState<THREE.Mesh | null>(null);
  const [index, setIndex] = useState<number>(-1);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (targetSphere) {
      console.log("Modal index:", index);
    }
  }, [index, targetSphere]);

  if (!isDesktop) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#111',
      }}>
        <div style={{
          height: '100vh',
          backgroundColor: '#111',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          textAlign: 'center',
        }}>
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
        }}
        gl={{
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={1}
      // frameloop="demand" 
      >
        <Stats />
        <Suspense fallback={<CanvasLoader />}>
          <Scene
            targetSphere={targetSphere}
            setTargetSphere={setTargetSphere}
            clickmesh={clickmesh}
            setClickmesh={setClickmesh}
            setindex={setIndex}
            index={index}
          />
        </Suspense>
      </Canvas>


      <AnimatePresence>
        {index !== -1 && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '40vw',
              height: '80vh',
              backgroundColor: 'rgba(9, 9, 9, 0.85)',
              padding: '30px',
              borderRadius: '12px',
              color: '#fff',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              overflowY: 'auto',
              scrollbarWidth: 'none',
            }}
          >
            {/* <h2 style={{ marginBottom: '15px', fontSize: '2rem' }}>
              {["Profile", "Projects", "Skills", "Experience", "Education", "Contact"][index]}
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              More details about this section coming soon...
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' ,}}>
              {skills_data.map((skill) => (
                <AnimatedCard
                  key={skill.id}
                  label={skill.name}
                  path={skill.iconSrc}
                />
              ))}
            </div>
            <Contact /> */}
            <PageRouter index={index} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}