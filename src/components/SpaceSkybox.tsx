import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function SpaceSkybox() {
  const { scene } = useThree();
  // const [cubeTexture, setCubeTexture] = useState<THREE.CubeTexture | null>(null);
  // console.log(cubeTexture)

  useEffect(() => {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      '/SpaceTextures/px.jpg',
      '/SpaceTextures/nx.jpg',
      '/SpaceTextures/py.jpg',
      '/SpaceTextures/ny.jpg',
      '/SpaceTextures/pz.jpg',
      '/SpaceTextures/nz.jpg',
    ], () => {
      scene.background = texture;
      // setCubeTexture(texture);
    });
  }, [scene]);

  return null;
}
