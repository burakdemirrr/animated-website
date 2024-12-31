'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <CodeBracketIcon className="w-12 h-12" />,
    title: "Web Development",
    description: "We develop your concept from prototype to an elegant and functional website or web application.",
  },
  {
    icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences.",
  },
  {
    icon: <CommandLineIcon className="w-12 h-12" />,
    title: "Digital Solutions",
    description: "We assist you with starting, expanding, and maintaining a digital ecosystem.",
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
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#ff4d4d] mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 