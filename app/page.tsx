"use client";

import { useState } from "react";
import { Upload, Download, Loader2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setProcessedImage(null);
      setError(null);
    }
  };

  const removeBackground = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image_file", image);

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_REMOVEBG_API_KEY || "",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to remove background");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setProcessedImage(url);
    } catch (err) {
      setError("Failed to process image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (processedImage) {
      const link = document.createElement("a");
      link.href = processedImage;
      link.download = "removed-background.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Background Remover
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Remove backgrounds from your images instantly using advanced AI
            technology. Perfect for e-commerce, social media, and professional
            content creation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <span className="text-gray-600">
                  Click or drag to upload an image
                </span>
                <span className="text-sm text-gray-500 mt-2">
                  Supports JPG, PNG files
                </span>
              </label>
            </div>

            {preview && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Original Image
                  </h3>
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={preview}
                      alt="Original"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Processed Image
                  </h3>
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    {processedImage ? (
                      <Image
                        src={processedImage}
                        alt="Processed"
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        No processed image yet
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex justify-center gap-4">
              <button
                onClick={removeBackground}
                disabled={!image || loading}
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${
                  !image || loading
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Remove Background"
                )}
              </button>

              {processedImage && (
                <button
                  onClick={downloadImage}
                  className="px-6 py-3 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fast Processing
            </h3>
            <p className="text-gray-600">
              Get your images processed in seconds with our advanced AI technology
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              High Quality
            </h3>
            <p className="text-gray-600">
              Maintain excellent image quality with precise background removal
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Easy to Use
            </h3>
            <p className="text-gray-600">
              Simple drag and drop interface for quick background removal
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}