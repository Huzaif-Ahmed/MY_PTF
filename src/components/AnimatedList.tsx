// src/components/AnimatedList.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './MyPages/css/AnimatedList.css' // Adjust the path as necessary

interface AnimatedListProps {
    items: React.ReactNode[];
}

export function AnimatedList({ items }: AnimatedListProps) {
    return (
        <div className="animated-list-container">
            {items.map((item, index) => (
                <AnimatedListItem key={index} item={item} />
            ))}
        </div>
    )
}

function AnimatedListItem({ item }: { item: React.ReactNode }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: '20% -20% -20% -20% ',
    });
    
    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{
                scale: inView ? 1 : 0.8,
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
                filter: inView ? 'blur(0px)' : 'blur(4px)',
            }}
            transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1.0]
            }}
            className="animated-list-item"
        >
            {item}
        </motion.div>
    );
}