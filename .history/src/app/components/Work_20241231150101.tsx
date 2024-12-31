'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cases = [
  {
    title: "Mobile Vikings",
    category: "Mobile App",
    image: "https://placehold.co/600x400/ff4d4d/ffffff?text=Mobile+Vikings",
  },
  {
    title: "SD Worx",
    category: "Web Platform",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=SD+Worx",
  },
  {
    title: "European Schoolnet",
    category: "Digital Platform",
    image: "https://placehold.co/600x400/ff4d4d/ffffff?text=European+Schoolnet",
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
    <section className="section">
      <div className="container">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors duration-300 z-10" />
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <p className="text-sm font-medium mb-2">{item.category}</p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <button className="button-secondary">View all cases</button>
        </motion.div>
      </div>
    </section>
  );
} 