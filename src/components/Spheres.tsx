
/* eslint-disable */
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { LogoMesh } from './LogoMesh';

interface Props {
  params: {
    radii: number[];
    speeds: number[];
    positions: THREE.Vector3[];
    labels: string[];
    logoColors: string[];
    logoPaths: string[];
  };
  sphereRefs: React.MutableRefObject<THREE.Mesh[]>;
  onSphereClick?: (mesh: THREE.Mesh) => void;
 
}

export function Spheres({ params, sphereRefs, onSphereClick }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const hoverTimeout = useRef<any | null>(null);

  useFrame(() => {
    sphereRefs.current.forEach((sphere, i) => {
      if (sphere) {
        sphere.position.copy(params.positions[i]);
      }
    });
  });

  return (
    <>
      {params.positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (sphereRefs.current[i] = el!)}
          position={[pos.x, pos.y, pos.z]}
          scale={params.radii[i]}
          onClick={(e) => {
            e.stopPropagation();
            if (onSphereClick && sphereRefs.current[i]) {
              onSphereClick(sphereRefs.current[i]);
              
            }
          }}
          onPointerOver={() => {
            clearTimeout(hoverTimeout.current!);
            setHoveredIndex(i);
            setVisibleIndex(i);
          }}
          onPointerOut={() => {
            setHoveredIndex(null);
            hoverTimeout.current = setTimeout(() => {
              setVisibleIndex(null);
            }, 300); // wait for fade-out transition
          }}
        >
          {/* Sphere Shell */}
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial
            transmission={1}
            roughness={0}
            ior={1.5}
            thickness={0.01}
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0}
            transparent
            side={THREE.FrontSide}
            color={0xffffff}
          />

          {/* Logo inside sphere */}
          <LogoMesh
            url={params.logoPaths[i]}
            scale={0.3}
            color={params.logoColors[i] || 0xa50b5e}
          />

          {/* Optional light inside */}
          <pointLight
            color={0xffffaa}
            intensity={1}
            distance={params.radii[i] * 2}
            decay={1.5}
          />

          {/* Hover Label */}
          {visibleIndex === i && (
            <Html distanceFactor={10} position={[0, 1.5, 0]} center>
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '200px',
                  fontFamily: 'Arial, sans-serif',
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  opacity: hoveredIndex === i ? 1 : 0,
                  transform: hoveredIndex === i ? 'scale(1)' : 'scale(0.8)',
                }}
              >
                {params.labels[i]}
              </div>
            </Html>
          )}
        </mesh>
      ))}
    </>
  );
}
