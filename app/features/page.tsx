"use client";

import { motion } from "framer-motion";
import { Wand2, Image, Zap, Download, Code, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "AI-Powered Precision",
      description: "State-of-the-art AI technology for accurate background removal in seconds.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
      demo: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2000",
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "High Resolution Output",
      description: "Get high-quality, high-resolution images with perfectly removed backgrounds.",
      image: "https://images.unsplash.com/photo-1620674156044-52b714665d46?q=80&w=800",
      demo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Processing",
      description: "Process images in real-time with our lightning-fast AI engine.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=800",
      demo: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Batch Processing",
      description: "Remove backgrounds from multiple images at once with our batch processing feature.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800",
      demo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    },
    // {
    //   icon: <Code className="w-8 h-8" />,
    //   title: "API Integration",
    //   description: "Seamlessly integrate background removal into your applications with our API.",
    //   image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=800",
    //   demo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071",
    // },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Free for Everyone",
      description: "No subscription required. Remove backgrounds for free, anytime.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800",
      demo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Powerful Features for Perfect Results
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our AI-powered technology makes background removal easier than ever.
              Discover all the features that make ZeroBG the best choice for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={feature.demo}
                      alt={`${feature.title} demo`}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <Link href="/how-it-works">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See How It Works
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}