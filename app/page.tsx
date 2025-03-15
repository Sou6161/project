"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Upload,
  Wand2,
  Download,
  Image as LucideImage,
  Layers,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import PreviewSection from "@/components/PreviewSection";
import ActionButtons from "@/components/ActionButtons";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import JSZip from "jszip";
import BeforeImage1 from "../Images/Before_Image_1-removebg-preview.png";
import BeforeImage2 from "../Images/Before_Image_2-removebg-preview.png";
import BeforeImage3 from "../Images/Before_Image_3-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [processedImages, setProcessedImages] = useState<
    { url: string; blob: Blob }[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const oversizedFiles = files.filter((file) => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setError(
        "One or more files exceed the 5MB limit. Please upload smaller images."
      );
      return;
    }

    setImages((prev) => [...prev, ...files]);
    setPreviews((prev) =>
      prev.concat(files.map((file) => URL.createObjectURL(file)))
    );
    setProcessedImages([]);
    setError(null);
  };

  const removeBackground = async (index?: number) => {
    const imagesToProcess = index !== undefined ? [images[index]] : images;
    if (imagesToProcess.length === 0) return;

    setLoading(true);
    setError(null);

    const processPromises = imagesToProcess.map(async (image, idx) => {
      const formData = new FormData();
      formData.append("image_file", image);

      try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
          method: "POST",
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_REMOVEBG_API_KEY || "",
          },
          body: formData,
        }); // Fixed: Added missing closing parenthesis

        if (!response.ok) {
          throw new Error(
            `Failed to remove background: ${response.statusText}`
          );
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return { url, blob };
      } catch (err) {
        console.error(
          `API Error for image ${index !== undefined ? index : idx}:`,
          err
        );
        return null;
      }
    });

    const results = await Promise.all(processPromises);
    setProcessedImages((prev) => {
      if (index !== undefined) {
        const newProcessed = [...prev];
        newProcessed[index] = results[0] ||
          prev[index] || { url: "", blob: new Blob() };
        return newProcessed;
      }
      return prev.concat(
        results.filter((r) => r !== null) as { url: string; blob: Blob }[]
      );
    });

    setLoading(false);
  };

  const downloadImage = (index: number) => {
    if (processedImages[index]) {
      try {
        const url = window.URL.createObjectURL(processedImages[index].blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `removed-background-${index + 1}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (err) {
        setError("Failed to download the processed image. Please try again.");
      }
    } else {
      setError("No processed image available to download.");
    }
  };

  const downloadAll = async () => {
    if (processedImages.length === 0) {
      setError("No processed images available to download.");
      return;
    }

    const zip = new JSZip();
    processedImages.forEach((img, index) => {
      zip.file(`removed-background-${index + 1}.png`, img.blob);
    });

    try {
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "batch-removed-backgrounds.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError("Failed to download the batch. Please try again.");
    }
  };

  const demoImages = [
    {
      before:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
      after: BeforeImage1,
    },
    {
      before:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
      after: BeforeImage2,
    },
    {
      before:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60",
      after: BeforeImage3,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-pink-500/10 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20" />

          <motion.div
            className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "10%", left: "15%" }}
          />

          <motion.div
            className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ bottom: "20%", right: "10%" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold gradient-text mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Remove Background from
                <br />
                Images Instantly
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Professional background removal powered by AI. 100% automatic
                and free to use.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="#upload"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Remove Background
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                {
                  icon: <Sparkles className="h-6 w-6" />,
                  title: "AI-Powered",
                  description: "Advanced AI for precise results",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Lightning Fast",
                  description: "Process images in seconds",
                },
                {
                  icon: <Download className="h-6 w-6" />,
                  title: "Free Downloads",
                  description: "No watermarks or limitations",
                },
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
          </div>
        </section>

        <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                See the Magic in Action
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Watch how our AI transforms your images instantly
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demoImages.map((demo, index) => (
                <motion.div
                  key={index}
                  className="relative group rounded-2xl  overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="relative w-full h-96">
                    <img
                      src={demo.before}
                      alt="Before/After"
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={
                        typeof demo.after === "string"
                          ? demo.after
                          : demo.after.src
                      }
                      alt="After"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      <p className="text-sm font-medium">
                        Hover to see the result
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
          <UploadSection
            onImageUpload={handleImageUpload}
            className="section"
          />

          {previews.length > 0 && (
            <PreviewSection
              previews={previews}
              processedImages={processedImages}
              onRemoveBackground={removeBackground}
              className="section"
            />
          )}

          <ActionButtons
            onRemoveBackground={() => removeBackground()}
            onBatchProcess={() => removeBackground()}
            onDownload={downloadImage}
            onDownloadAll={downloadAll}
            loading={loading}
            images={images}
            processedImages={processedImages}
            error={error}
            className="section"
          />

          <FeaturesSection className="section" />
        </div>
      </main>
      <Footer />
    </div>
  );
}