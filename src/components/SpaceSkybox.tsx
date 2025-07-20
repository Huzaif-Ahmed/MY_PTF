import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useCubeTexture } from '@react-three/drei';

export function SpaceSkybox() {
  const { scene } = useThree();
  
  // Use the useCubeTexture hook which works with Suspense
  const cubeTexture = useCubeTexture(
    [
      'px.jpg', 'nx.jpg', 
      'py.jpg', 'ny.jpg', 
      'pz.jpg', 'nz.jpg'
    ],
    { path: '/SpaceTextures/' }
  );
  
  useEffect(() => {
    // Set the scene background
    scene.background = cubeTexture;
  }, [scene, cubeTexture]);

  return null;
}