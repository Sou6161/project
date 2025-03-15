import { Upload, ImageIcon, Download } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturesSectionProps {
  className?: string;
}

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  const features = [
    {
      icon: <Upload className="w-12 h-12 text-indigo-400" />,
      title: "Seamless Upload",
      description: "Effortlessly upload images with a drag-and-drop interface.",
    },
    {
      icon: <ImageIcon className="w-12 h-12 text-purple-400" />,
      title: "AI Mastery",
      description: "Precision background removal powered by cutting-edge AI.",
    },
    {
      icon: <Download className="w-12 h-12 text-rose-400" />,
      title: "Instant Results",
      description: "Download your enhanced images in a flash.",
    },
  ];

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="card bg-[var(--card-bg)] flex flex-col items-center text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ y: -5, boxShadow: "var(--glow)" }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full flex items-center justify-center mb-6 animate-float">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
          <p className="text-gray-400 text-lg">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}