'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import ParallaxSection from './ParallaxSection';

const services = [
  {
    icon: <CodeBracketIcon className="w-12 h-12" />,
    title: "Web Development",
    description: "We develop your concept from prototype to an elegant and functional website or web application.",
    color: "#ff4d4d",
    direction: "up" as const,
  },
  {
    icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    color: "#1a1a1a",
    direction: "down" as const,
  },
  {
    icon: <CommandLineIcon className="w-12 h-12" />,
    title: "Digital Solutions",
    description: "We assist you with starting, expanding, and maintaining a digital ecosystem.",
    color: "#ff4d4d",
    direction: "up" as const,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Animated background patterns */}
      <ParallaxSection offset={150} speed={0.3} direction="down">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[#ff4d4d]/5 to-[#1a1a1a]/5"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.3 } : { scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
      </ParallaxSection>

      <div className="container relative">
        <ParallaxSection offset={60} speed={1.2} direction="up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We transform complexity into beautiful simplicity through our comprehensive digital services.
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ParallaxSection
              key={index}
              offset={40 + index * 20}
              speed={1 + index * 0.2}
              direction={service.direction}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color}10, transparent)`,
                  }}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <motion.div
                    className="text-[#ff4d4d] mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold mb-4 relative"
                  animate={{
                    color: isInView ? "#1a1a1a" : "#ff4d4d",
                  }}
                >
                  {service.title}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-[#ff4d4d]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>

                <p className="text-gray-600 relative z-10">{service.description}</p>

                {/* Interactive corner accents */}
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#ff4d4d] rounded-tr-2xl opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#ff4d4d] rounded-bl-2xl opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
} 