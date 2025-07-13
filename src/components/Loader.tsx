import { Html, useProgress } from '@react-three/drei';

export function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '1rem 2rem',
          borderRadius: '8px',
        }}
      >
        Loading {Math.floor(progress)}%
      </div>
    </Html>
  );
}
