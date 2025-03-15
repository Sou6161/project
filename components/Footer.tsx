import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="card bg-[var(--card-bg)] py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-2">
            ZeroBG
          </h3>
          <p className="text-sm text-gray-400 mb-4">© 2025 ZeroBG. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}