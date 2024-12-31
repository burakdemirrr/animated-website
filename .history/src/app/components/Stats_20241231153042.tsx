'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { number: 150, label: "Projects Completed", suffix: "+" },
  { number: 12, label: "Years Experience", suffix: "+" },
  { number: 95, label: "Satisfied Clients", suffix: "%" },
  { number: 25, label: "Team Members", suffix: "" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += value / steps;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Animated background patterns */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 grid grid-cols-8 gap-4 transform -skew-y-6">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-32 bg-white/10 rounded-lg"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We've helped numerous companies achieve their digital goals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <motion.div
                className="mb-4 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-[#ff4d4d] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <Counter value={stat.number} suffix={stat.suffix} />
              </motion.div>
              <p className="text-gray-400 group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 