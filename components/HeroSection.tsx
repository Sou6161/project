"use client";

import { motion } from "framer-motion";
import { ArrowRight, Image, Wand2 } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black pt-16 sm:pt-24">
      <div className="absolute inset-0 bg-grid-gray-200/20 dark:bg-grid-gray-800/20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight gradient-text mb-8 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Remove Background from
            <br/>Images for Free
          </motion.h1>
          
          <motion.p
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            100% automatic and free. Remove backgrounds from images of humans,
            animals, or objects with AI in seconds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#upload"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Remove Background
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              {
                icon: <Image className="h-6 w-6" />,
                title: "100% Automatic",
                description: "AI-powered background removal in seconds"
              },
              {
                icon: <Wand2 className="h-6 w-6" />,
                title: "Free to Use",
                description: "No credit card or sign up required"
              },
              {
                icon: <Image className="h-6 w-6" />,
                title: "High Resolution",
                description: "Export in full resolution and HD quality"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}