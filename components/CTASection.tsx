import { motion } from "framer-motion";

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className }: CTASectionProps) {
  return (
    <motion.section
      className={`relative card bg-[var(--card-bg)] py-16 px-8 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-purple-900/20 to-rose-900/20 z-0 animate-pulse-slow" />

      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-400 mb-6"
        >
          Elevate Your Creations
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl max-w-xl mx-auto mb-8 text-gray-300"
        >
          Join a community of innovators transforming images with ZeroBG’s magic.
        </motion.p>
        <motion.a
          href="#upload"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "var(--glow)" }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700"
        >
          Start Now
        </motion.a>
      </div>

      <motion.div
        className="absolute w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl animate-float"
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-rose-400/20 rounded-full blur-2xl animate-float"
        style={{ bottom: "15%", right: "15%" }}
      />
    </motion.section>
  );
}