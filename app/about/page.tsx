"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const stats = [
    { number: "10M+", label: "Images Processed" },
    { number: "150+", label: "Countries Served" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-First Approach",
      description: "We believe in making powerful technology accessible to everyone.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Helping creators worldwide bring their vision to life.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Continuous Innovation",
      description: "Constantly improving our AI to deliver better results.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Your images are processed securely and never stored.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
    },
  ];

  const teamImages = [
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
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
              About ZeroBG
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're on a mission to make professional background removal accessible to everyone.
              Our AI-powered platform helps creators, businesses, and individuals achieve perfect results in seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-16 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 h-80">
              {teamImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image}
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}