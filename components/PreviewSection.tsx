import { motion } from "framer-motion";

interface PreviewSectionProps {
  previews: string[];
  processedImages: { url: string; blob: Blob }[];
  onRemoveBackground: (index: number) => void;
  className?: string;
}

export default function PreviewSection({ previews, processedImages, onRemoveBackground, className }: PreviewSectionProps) {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {previews.map((preview, index) => (
        <motion.div
          key={index}
          className="card bg-[var(--card-bg)]"
          whileHover={{ y: -5, boxShadow: "var(--glow)" }}
        >
          <div className="flex flex-col items-center p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Original #{index + 1}</h3>
            <motion.img
              src={preview}
              alt={`Preview ${index + 1}`}
              className="w-full h-64 object-contain rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <h3 className="text-xl font-semibold mt-6 mb-4 text-white">Processed #{index + 1}</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-800/20">
              {processedImages[index]?.url ? (
                <motion.img
                  src={processedImages[index].url}
                  alt={`Processed ${index + 1}`}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              ) : (
                <motion.button
                  onClick={() => onRemoveBackground(index)}
                  className="w-full h-full bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
                  whileHover={{ scale: 1.05 }}
                >
                  Process Now
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}