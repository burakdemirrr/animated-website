'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff4d4d] origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm font-medium z-50"
        style={{
          opacity: scrollYProgress
        }}
      >
        <motion.div
          style={{
            rotate: scrollYProgress.get() * 360
          }}
        >
          ↑
        </motion.div>
      </motion.div>
    </>
  );
} 