// app/page.tsx
import PageClient from "./PageClient";

// Define SEO metadata for the page
export const metadata = {
  title: "ZeroBG - Remove Background from Images Instantly",
  description:
    "Remove backgrounds from your images instantly with ZeroBG. Powered by AI, our tool offers fast, automatic, and free background removal with no watermarks.",
  keywords: [
    "background remover",
    "remove background",
    "AI background removal",
    "image editing",
    "photo editor",
    "free background remover",
    "ZeroBG",
  ],
  openGraph: {
    title: "ZeroBG - Remove Background from Images Instantly",
    description:
      "Professional background removal powered by AI. 100% automatic and free to use.",
    url: "https://yourwebsite.com", // Replace with your website URL
    siteName: "ZeroBG",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with a relevant image URL
        width: 1200,
        height: 630,
        alt: "ZeroBG Background Remover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroBG - Remove Background from Images Instantly",
    description:
      "Remove backgrounds from your images instantly with ZeroBG. Powered by AI, our tool offers fast, automatic, and free background removal.",
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Replace with a relevant image URL
  },
};

export default function Page() {
  return <PageClient />;
}