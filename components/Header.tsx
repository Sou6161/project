"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "How it Works", href: "how-it-works" },
    { name: "About", href: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={() => window.location.reload()}>
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-white to-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">
                  <img src="./HeaderLogo.png" alt="" />
                </span>
              </div>
              <span className="text-2xl font-bold gradient-text">ZeroBG</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
