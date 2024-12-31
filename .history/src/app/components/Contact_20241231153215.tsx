'use client';

import { motion, useInView } from 'framer-motion';
import ParallaxSection from './ParallaxSection';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section bg-[#1a1a1a] text-white relative overflow-hidden" ref={ref}>
      {/* Animated background patterns */}
      <ParallaxSection offset={200} speed={0.5} direction="down">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.line
                key={i}
                x1={i * 10}
                y1="0"
                x2={i * 10 + 100}
                y2="100"
                stroke="#ff4d4d"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            ))}
          </svg>
        </div>
      </ParallaxSection>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ParallaxSection offset={80} speed={1.2} direction="left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="absolute -top-20 -left-20 w-40 h-40 bg-[#ff4d4d] rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <h2 className="heading-lg mb-6">Let's create something amazing together</h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to transform your digital presence? Get in touch with us and let's discuss your project.
              </p>
              <div className="space-y-4">
                <motion.p
                  className="flex items-center gap-2"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-[#ff4d4d]">Email:</span>
                  <a href="mailto:hello@example.com" className="hover:text-[#ff4d4d] transition-colors">
                    hello@example.com
                  </a>
                </motion.p>
                <motion.p
                  className="flex items-center gap-2"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-[#ff4d4d]">Phone:</span>
                  <a href="tel:+1234567890" className="hover:text-[#ff4d4d] transition-colors">
                    +1 (234) 567-890
                  </a>
                </motion.p>
              </div>
            </motion.div>
          </ParallaxSection>

          <ParallaxSection offset={80} speed={1.2} direction="right">
            <motion.form
              className="space-y-6 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#1a1a1a] rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <motion.input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <motion.input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <label className="block text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d4d] h-32"
                  placeholder="Tell us about your project"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary w-full relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff4d4d] to-[#ff6b6b]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </motion.form>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
} 