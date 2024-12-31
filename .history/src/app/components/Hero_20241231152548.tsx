'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ParallaxSection from './ParallaxSection';

const words = ['Digital Products', 'Web Applications', 'Mobile Apps', 'User Experiences'];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ 
          opacity,
          y,
        }}
      >
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#ff4d4d]/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#1a1a1a]/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15
          }}
        />
      </motion.div>

      <div className="container">
        <div className="max-w-4xl">
          <ParallaxSection offset={30}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-xl mb-6"
            >
              We create
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block text-[#ff4d4d] min-h-[1.2em] md:text-7xl text-4xl"
              >
                {words[currentWord]}
              </motion.span>
              that make an impact
            </motion.h1>
          </ParallaxSection>

          <ParallaxSection offset={40}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl mb-8 text-gray-700"
            >
              We're a digital agency that helps ambitious companies create 
              impactful digital products and experiences.
            </motion.p>
          </ParallaxSection>

          <ParallaxSection offset={50}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#ff4d4d] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <Link href="/contact" className="button-primary relative">
                  Start your project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <Link href="/cases" className="button-secondary relative">
                  View our work
                </Link>
              </motion.div>
            </motion.div>
          </ParallaxSection>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-20 h-20 border-4 border-[#ff4d4d] rounded-full hidden md:block"
        animate={{
          x: mousePosition.x * 3,
          y: mousePosition.y * 3 + -20,
          rotate: [0, 180, 360],
        }}
        transition={{
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          },
          x: {
            type: "spring",
            stiffness: 150,
            damping: 15
          },
          y: {
            type: "spring",
            stiffness: 150,
            damping: 15
          }
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-16 h-16 bg-[#1a1a1a] rounded-lg hidden md:block"
        animate={{
          x: mousePosition.x * -3,
          y: mousePosition.y * -3 + 20,
          rotate: [0, -180, -360],
        }}
        transition={{
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          },
          x: {
            type: "spring",
            stiffness: 150,
            damping: 15
          },
          y: {
            type: "spring",
            stiffness: 150,
            damping: 15
          }
        }}
      />
    </section>
  );
} 