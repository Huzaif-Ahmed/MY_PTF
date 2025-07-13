import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import vertexShader from '../shaders/deformable.vert.glsl';
import fragmentShader from '../shaders/deformable.frag.glsl';
import { useFrame } from '@react-three/fiber';

interface Props {
    spherePositions: THREE.Vector3[];
    sphereRadii: number[];
    planeHeight: number;
    bendHeight: number;
    smoothness: number;
    rippleFrequency: number;
    rippleAmplitude: number;
    sphereSpeeds?: number[]; // Optional: speeds for each sphere
}

export function DeformablePlane({
    spherePositions,
    sphereRadii,
    planeHeight,
    bendHeight,
    smoothness,
    rippleFrequency,
    rippleAmplitude,
    sphereSpeeds = [] // Default to empty array if not provided
}: Props) {
    const meshRef = useRef<THREE.Points>(null);
    const timeRef = useRef(0);

    const geometry = new THREE.PlaneGeometry(250, 250, 400, 400);
    geometry.rotateX(-Math.PI * 0.5);

    const uniforms = {
        spherePositions: { value: new Array(10).fill(new THREE.Vector3()) },
        r: { value: new Array(10).fill(1) },
        planeHeight: { value: planeHeight },
        bendHeight: { value: bendHeight },
        smoothness: { value: smoothness },
        rippleFrequency: { value: rippleFrequency },
        rippleAmplitude: { value: rippleAmplitude },
        time: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true
    });

    useEffect(() => {
        return () => {
            geometry.dispose();
            material.dispose();
            console.log("🧹 DeformablePlane cleaned up");
        };
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;
        timeRef.current = state.clock.getElapsedTime();
        material.uniforms.time.value = timeRef.current;
        for (let i = 0; i < spherePositions.length; i++) {
            const initial = spherePositions[i];
            const radius = Math.sqrt(initial.x * initial.x + initial.z * initial.z);
            const angle = timeRef.current * (sphereRadii[i] * sphereSpeeds[i] ? sphereSpeeds[i] : 1) // Use speed if provided

            spherePositions[i].set(
                Math.cos(angle) * radius,
                initial.y,
                Math.sin(angle) * radius
            );

            material.uniforms.spherePositions.value[i] = spherePositions[i];
            material.uniforms.r.value[i] = sphereRadii[i];
        }

        material.uniforms.planeHeight.value = planeHeight;
        material.uniforms.bendHeight.value = bendHeight;
        material.uniforms.smoothness.value = smoothness;
        material.uniforms.rippleFrequency.value = rippleFrequency;
        material.uniforms.rippleAmplitude.value = rippleAmplitude;
    });

    return <points ref={meshRef} geometry={geometry} material={material} />;
}