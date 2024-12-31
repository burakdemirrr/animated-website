'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParallaxSection from './ParallaxSection';

const cases = [
  {
    title: "Mobile Vikings",
    category: "Mobile App",
    image: "/images/case1.jpg",
    bgColor: "bg-[#ff4d4d]",
  },
  {
    title: "SD Worx",
    category: "Web Platform",
    image: "/images/case2.jpg",
    bgColor: "bg-[#1a1a1a]",
  },
  {
    title: "European Schoolnet",
    category: "Digital Platform",
    image: "/images/case3.jpg",
    bgColor: "bg-[#ff4d4d]",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Work() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Patterns */}
      <ParallaxSection offset={100} speed={0.5} direction="down">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff4d4d] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a1a1a] rounded-full blur-3xl" />
        </div>
      </ParallaxSection>

      <div className="container">
        <ParallaxSection offset={60} speed={1.2} direction="up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've helped ambitious companies achieve their digital goals.
            </p>
          </motion.div>
        </ParallaxSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((item, index) => (
            <ParallaxSection
              key={index}
              offset={40}
              speed={1 + index * 0.2}
              direction={index % 2 === 0 ? 'up' : 'down'}
            >
              <motion.div
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`aspect-[4/3] relative ${item.bgColor}`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"
                    whileHover={{ opacity: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.div>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ y: 100 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-medium mb-2 opacity-80">{item.category}</p>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </motion.div>
              </motion.div>
            </ParallaxSection>
          ))}
        </motion.div>

        <ParallaxSection offset={40} speed={1.5} direction="up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              className="button-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all cases
            </motion.button>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
} 