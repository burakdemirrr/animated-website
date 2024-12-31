'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const words = ['Digital Products', 'Web Applications', 'Mobile Apps', 'User Experiences'];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-16 flex items-center">
      <div className="container">
        <div className="max-w-4xl">
          <h1 className="heading-xl mb-6">
            We create
            <span className="block text-[#ff4d4d] min-h-[1.2em] transition-all duration-500">
              {words[currentWord]}
            </span>
            that make an impact
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            We're a digital agency that helps ambitious companies create 
            impactful digital products and experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary">
              Start your project
            </Link>
            <Link href="/cases" className="button-secondary">
              View our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 