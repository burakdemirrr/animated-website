'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <CodeBracketIcon className="w-12 h-12" />,
    title: "Web Development",
    description: "We develop your concept from prototype to an elegant and functional website or web application.",
    color: "#ff4d4d",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
    color: "#1a1a1a",
  },
  {
    icon: <CommandLineIcon className="w-12 h-12" />,
    title: "Digital Solutions",
    description: "We assist you with starting, expanding, and maintaining a digital ecosystem.",
    color: "#ff4d4d",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section bg-gray-50" ref={ref}>
      <div className="container">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-[#ff4d4d] mb-6"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff4d4d] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              
              {/* Interactive background element */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-[#ff4d4d] rounded-b-2xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Hover effect circles */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 rounded-full"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}10, transparent)`,
                }}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 