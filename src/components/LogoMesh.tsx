// src/components/LogoMesh.tsx
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three-stdlib';
import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface LogoMeshProps {
    url: string;
    scale: number;
    color?: THREE.ColorRepresentation;
}

export function LogoMesh({ url, scale, color = 0xa50b5e }: LogoMeshProps) {
    const geometry = useLoader(STLLoader, url);
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01; // rotate with the sphere
        }
    });

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            scale={scale}
        // rotation={[Math.PI / 2, 0, 0]}
        >
            <meshStandardMaterial
                color={color}
                wireframe
                emissive={color}
                emissiveIntensity={2}
                toneMapped={false}
            />
        </mesh>
    );
}
