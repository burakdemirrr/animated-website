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
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.1,
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const linkVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#1a1a1a]">
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
            className="md:hidden w-10 h-10 relative focus:outline-none"
            onClick={toggleMenu}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <div className="absolute w-6 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.span
                className="absolute h-0.5 w-6 bg-black transform transition-all duration-300"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? 0 : -8,
                }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-black transform transition-all duration-300"
                animate={{
                  opacity: isOpen ? 0 : 1
                }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-black transform transition-all duration-300"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? 0 : 8,
                }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-[73px] right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="p-6 space-y-6">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={linkVariants}
                  custom={i}
                  className="block"
                >
                  <Link
                    href={item.href}
                    className="text-xl font-medium text-gray-800 hover:text-[#ff4d4d] transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={linkVariants}
                className="pt-4 border-t border-gray-200"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary w-full"
                  onClick={toggleMenu}
                >
                  Let's talk
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 