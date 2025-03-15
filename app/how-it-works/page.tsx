"use client";

import { motion } from "framer-motion";
import { Upload, Wand2, Download, Image, Layers, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Your Image",
      description: "Simply drag and drop your image or click to upload",
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070",
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "AI Processing",
      description: "Our AI automatically detects and removes the background",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download Result",
      description: "Get your image with transparent background instantly",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974",
    },
  ];

  const features = [
    {
      icon: <Image />,
      title: "Supports All Image Types",
      description: "Works with JPG, PNG, and other common formats",
    },
    {
      icon: <Layers />,
      title: "Batch Processing",
      description: "Process multiple images at once",
    },
    {
      icon: <CheckCircle />,
      title: "High Accuracy",
      description: "Precise edge detection and smooth results",
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
              How It Works
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Remove backgrounds from images in three simple steps with our AI-powered technology.
            </p>
          </motion.div>

          <div className="space-y-24 mb-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <div className="glass-card p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-24 text-center"
          >
            <Link href="/">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try It Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}