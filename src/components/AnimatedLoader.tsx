import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import "../App.css"; // Or move this to App.tsx

export function AnimatedLoader({ onFinish }: { onFinish: () => void }) {
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (progress >= 100) {
        setShowLoader(false);
        onFinish();
      }
    }, 2500); // ⏱️ Minimum 2.5 seconds delay

    return () => clearTimeout(timeout);
  }, [progress, onFinish]);

  if (!showLoader) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="loader-bar" style={{ width: `${progress}%` }} />
        <p>{Math.floor(progress)}%</p>
      </div>
    </div>
  );
}
