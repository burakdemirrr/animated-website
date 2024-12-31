'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
}

export default function ParallaxSection({ 
  children, 
  offset = 50,
  className = "",
  direction = 'up',
  speed = 1
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-offset * speed, offset * speed]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-offset * speed, offset * speed]);
      default:
        return useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed]);
    }
  };

  const springConfig = {
    stiffness: 400,
    damping: 90,
    mass: 2
  };

  const transformValue = getTransform();
  const springTransform = useSpring(transformValue, springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const springOpacity = useSpring(opacity, springConfig);

  const style = {
    [direction === 'left' || direction === 'right' ? 'x' : 'y']: springTransform,
    opacity: springOpacity
  };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
} 