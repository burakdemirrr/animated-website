'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and challenges to create the perfect strategy.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team crafts beautiful and functional designs that align with your brand and user needs.",
  },
  {
    number: "03",
    title: "Development",
    description: "We bring designs to life with clean, efficient code and cutting-edge technologies.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "After thorough testing, we launch your project and provide ongoing support and maintenance.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section relative overflow-hidden" ref={ref}>
      {/* Animated background line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional results
          </p>
        </motion.div>

        <div className="space-y-24 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step number with animated circle */}
              <motion.div
                className="relative w-32 h-32 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#ff4d4d] rounded-full opacity-20"
                  animate={{
                    scale: activeStep === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: activeStep === index ? Infinity : 0,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                  {step.number}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex-1 p-8 bg-white rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
                animate={{
                  boxShadow: activeStep === index
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-4"
                  animate={{
                    color: activeStep === index ? "#ff4d4d" : "#1a1a1a",
                  }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 