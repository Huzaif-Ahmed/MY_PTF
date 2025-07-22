// src/components/AnimatedCard.tsx
import { motion } from 'framer-motion'
import './AnimatedCard.css'
// import JavaIcon from '../assets/java.png' // adjust your path

interface AnimatedCardProps {
  label?: string
  path: string
}

export function AnimatedCard({ label = 'Java', path }: AnimatedCardProps) {
  return (
    <div className="card-scene">
      <motion.div
        className="card"
        animate={{ rotateY: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 8
        }}
      >
        <div className="card-content">
          <img src={path} alt="Java Logo" className="card-icon" />
          <div className="card-label">{label}</div>
        </div>
        <div className="card-content back">
          <img src={path} alt="Java Logo" className="card-icon" />
          <div className="card-label">{label}</div>
        </div>
      </motion.div>
    </div>
  )
}
