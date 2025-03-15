import { Button } from "@radix-ui/themes";
import { Loader2, Download } from "lucide-react";
import { motion } from "framer-motion";

interface ActionButtonsProps {
  onRemoveBackground: () => void;
  onBatchProcess: () => void;
  onDownload: (index: number) => void;
  onDownloadAll: () => void;
  loading: boolean;
  images: File[];
  processedImages: { url: string; blob: Blob }[];
  error: string | null;
  className?: string;
}

export default function ActionButtons({
  onRemoveBackground,
  onBatchProcess,
  onDownload,
  onDownloadAll,
  loading,
  images,
  processedImages,
  error,
  className,
}: ActionButtonsProps) {
  return (
    <motion.div className={`flex flex-wrap gap-6 justify-center ${className}`}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          onClick={onRemoveBackground}
          disabled={loading || !images.length}
          variant="solid"
          className="px-8 py-4 bg-indigo-600 text-white rounded-full"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Remove Single"}
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          onClick={onBatchProcess}
          disabled={loading || !images.length}
          variant="solid"
          className="px-8 py-4 bg-purple-600 text-white rounded-full"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Batch Process"}
        </Button>
      </motion.div>
      {processedImages.map((_, index) => (
        <motion.div key={index} whileHover={{ scale: 1.05 }}>
          <Button
            onClick={() => onDownload(index)}
            variant="solid"
            className="px-8 py-4 bg-amber-500 text-gray-900 rounded-full flex items-center gap-2"
          >
            <Download /> Download #{index + 1}
          </Button>
        </motion.div>
      ))}
      {processedImages.length > 1 && (
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            onClick={onDownloadAll}
            variant="solid"
            className="px-8 py-4 bg-green-500 text-gray-900 rounded-full flex items-center gap-2"
          >
            <Download /> Download All
          </Button>
        </motion.div>
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 bg-red-900/20 p-4 rounded-xl"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}