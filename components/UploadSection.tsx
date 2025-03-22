"use client";

import { Upload, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

interface UploadSectionProps {
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentImageCount: number; // Add prop for current image count
  maxImages: number; // Add prop for max image limit
  className?: string;
}

export default function UploadSection({
  onImageUpload,
  currentImageCount,
  maxImages,
  className,
}: UploadSectionProps) {
  const supportedFormats = ["JPG", "PNG", "WEBP"];

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-3xl" />
      
      <div className="relative glass-card rounded-3xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500" />
        
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full min-h-[400px] cursor-pointer group"
        >
          <motion.div
            className="flex flex-col items-center max-w-xl mx-auto text-center p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full flex items-center justify-center mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Upload className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Upload Your Images
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Drag and drop your images here, or click to browse (up to {maxImages} images)
            </p>

            {/* Display current image count */}
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {currentImageCount}/{maxImages} images uploaded
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {supportedFormats.map((format) => (
                <div
                  key={format}
                  className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full"
                >
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {format}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Maximum file size: 5MB
            </p>
          </motion.div>

          <input
            id="image-upload"
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={onImageUpload}
          />
        </label>
      </div>
    </motion.div>
  );
}