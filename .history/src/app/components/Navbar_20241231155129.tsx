'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { title: 'Cases', href: '/cases' },
  { title: 'Services', href: '/services' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.1,
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const linkVariants = {
    closed: {
      y: 50,
      opacity: 0
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isOpen ? 'bg-[#1a1a1a]' : 'bg-white/80 backdrop-blur-lg'} border-b border-gray-200 transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`text-2xl font-bold ${isOpen ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Digital<span className="text-[#ff4d4d]">Agency</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-gray-600 hover:text-[#ff4d4d] transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              Let's talk
            </motion.button>
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 relative focus:outline-none z-50"
            onClick={toggleMenu}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <div className="absolute w-6 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.span
                className={`absolute h-0.5 w-6 ${isOpen ? 'bg-white' : 'bg-black'} transform transition-all duration-300`}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? 0 : -8,
                }}
              />
              <motion.span
                className={`absolute h-0.5 w-6 ${isOpen ? 'bg-white' : 'bg-black'} transform transition-all duration-300`}
                animate={{
                  opacity: isOpen ? 0 : 1
                }}
              />
              <motion.span
                className={`absolute h-0.5 w-6 ${isOpen ? 'bg-white' : 'bg-black'} transform transition-all duration-300`}
                animate={{
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? 0 : 8,
                }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#1a1a1a] z-40 md:hidden flex items-center justify-center"
          >
            <motion.div 
              className="relative z-50 w-full max-w-lg px-6 py-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={linkVariants}
                    custom={i}
                    className="block text-center"
                  >
                    <Link
                      href={item.href}
                      className="text-3xl font-bold text-white hover:text-[#ff4d4d] transition-colors inline-block"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={linkVariants}
                  className="pt-8 text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="button-primary bg-[#ff4d4d] text-white px-12 py-4 text-xl"
                    onClick={toggleMenu}
                  >
                    Let's talk
                  </motion.button>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-[#ff4d4d] rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 bg-[#ff4d4d] rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 