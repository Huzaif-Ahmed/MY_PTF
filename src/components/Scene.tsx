import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { DeformablePlane } from './DeformablePlane';
import { Spheres } from './Spheres';
import { SpaceSkybox } from './SpaceSkybox';
import { OrbitControls as OrbitCon } from 'three-stdlib';



type SceneProps = {
  // onSphereClick?: (mesh: THREE.Mesh) => void;
  targetSphere: THREE.Mesh | null;
  setTargetSphere: (mesh: THREE.Mesh | null) => void;
  clickmesh: boolean;
  setClickmesh: (value: boolean) => void;
  setindex: (index: number) => void;
  index: number;
};

export function Scene(
  {
    // onSphereClick,
    targetSphere,
    setTargetSphere,
    clickmesh,
    setClickmesh,
    setindex,
    index
  }: SceneProps
) {


  const mainCamera = useRef<THREE.PerspectiveCamera>(null);
  const panningCamera = useRef<THREE.PerspectiveCamera>(null);
  const controlsRef = useRef<OrbitCon>(null);
  const sphereRefs = useRef<THREE.Mesh[]>([]);

  const spherePositions = [
    new THREE.Vector3(0, 4, 0),
    new THREE.Vector3(-20, 4, 20),
    new THREE.Vector3(30, 4, 30),
    new THREE.Vector3(-40, 4, 40),
    new THREE.Vector3(50, 4, 50),
    new THREE.Vector3(-60, 4, 60),
  ];
  const sphereRadii = [10, 2, 3, 4, 5, 3];
  const sphereSpeeds = [0.5, 0.3, 0.2, -0.17, 0.12, -0.1];
  const sphereLabels = ["Profile", "Projects", "Skills", "Experience", "Education", "Contact"];
  const logoColors = ['#5E02E8', '#04CD08', '#E8CA02', '#0F1DB8', '#5E02E8', '#A50B5E'];
  const logoPaths = ['./profile_icon.stl', './project_icon.stl', './skills_icon.stl', './experience_icon.stl', './education_icon.stl', './contact_icon.stl'];

  const sphereParams = {
    radii: sphereRadii,
    speeds: sphereSpeeds,
    positions: spherePositions,
    labels: sphereLabels,
    logoColors: logoColors,
    logoPaths: logoPaths
  };




  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enabled = !targetSphere;
    }
  }, [targetSphere]);

  const prevTargetRef = useRef<THREE.Mesh | null>(null);
  const currentLookAtRef = useRef(new THREE.Vector3());

  useEffect(() => {
    if (targetSphere && mainCamera.current && panningCamera.current) {
      if (!prevTargetRef.current) {
        panningCamera.current.position.copy(mainCamera.current.position);
        const currentForward = new THREE.Vector3();
        mainCamera.current.getWorldDirection(currentForward);
        currentLookAtRef.current.copy(mainCamera.current.position).add(currentForward);
      }
    }
    prevTargetRef.current = targetSphere;
  }, [targetSphere]);

  useFrame(() => {
    //console.log camera position


    if (targetSphere && mainCamera.current && panningCamera.current) {
      if (clickmesh) {
        const desiredPosition = mainCamera.current.position.clone();
        const desiredForward = new THREE.Vector3();
        mainCamera.current.getWorldDirection(desiredForward);
        const desiredLookAt = new THREE.Vector3().addVectors(desiredPosition, desiredForward);

        panningCamera.current.position.lerp(desiredPosition, 0.04);
        currentLookAtRef.current.lerp(desiredLookAt, 0.04);
        panningCamera.current.lookAt(currentLookAtRef.current);
        if (index !== -1) {
          setindex(-1); // Only reset index if needed
        }

        if (panningCamera.current.position.distanceTo(desiredPosition) < 0.1) {
          setTargetSphere(null);
          setClickmesh(false);
          if (index !== -1) {
              setindex(-1); // Only reset index if needed
              }
        }
      } else {
        const ind = sphereRefs.current.indexOf(targetSphere);
        setindex(ind);
        if (ind !== -1) {
          const sphereRadius = sphereParams.radii[ind];
          const fov = mainCamera.current.fov;
          const distanceMultiplier = 3.5;
          const cameraDistance = (sphereRadius * distanceMultiplier) / Math.tan(THREE.MathUtils.degToRad(fov) / 2);

          const fixedOffset = new THREE.Vector3(cameraDistance, 5, 0);
          const desiredPosition = new THREE.Vector3().addVectors(targetSphere.position, fixedOffset);
          panningCamera.current.position.lerp(desiredPosition, 0.04);

          const baseRightOffset = 9;
          const baseSphereRadius = 3;
          const rightOffsetAmount = baseRightOffset * (sphereRadius / baseSphereRadius);

          const forward = new THREE.Vector3();
          panningCamera.current.getWorldDirection(forward);
          const right = new THREE.Vector3()
            .crossVectors(forward, panningCamera.current.up)
            .normalize();

          const desiredLookAt = new THREE.Vector3().addVectors(
            targetSphere.position,
            right.multiplyScalar(rightOffsetAmount)
          );

          currentLookAtRef.current.lerp(desiredLookAt, 0.04);
          panningCamera.current.lookAt(currentLookAtRef.current);

        }
      }
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={mainCamera}
        makeDefault={!targetSphere}
        position={[0, 50, 100]}
        fov={60}
      />
      <PerspectiveCamera
        ref={panningCamera}
        makeDefault={!!targetSphere}
        position={[0, 0, 0]}
        fov={60}
      />

      <ambientLight intensity={1} color={0x404040} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} />
      <SpaceSkybox />
      <OrbitControls ref={controlsRef} enableDamping dampingFactor={0.05} enabled={!targetSphere} enableZoom={false}
      //   minPolarAngle={THREE.MathUtils.degToRad(90)}
      //  maxPolarAngle={THREE.MathUtils.degToRad(90)}
      />

      <Spheres
        params={sphereParams}
        sphereRefs={sphereRefs}
        onSphereClick={setTargetSphere}

      />

      <DeformablePlane
        spherePositions={spherePositions}
        sphereRadii={sphereRadii}
        sphereSpeeds={sphereSpeeds}
        planeHeight={4}
        bendHeight={0.6}
        smoothness={20}
        rippleFrequency={0.23}
        rippleAmplitude={1}
      />
    </>
  );
}
