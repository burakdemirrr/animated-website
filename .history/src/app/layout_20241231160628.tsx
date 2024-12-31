'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from './components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <CustomCursor />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
