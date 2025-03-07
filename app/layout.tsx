import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Background Remover - Remove Image Backgrounds Instantly',
  description: 'Professional background removal tool powered by AI. Remove backgrounds from images instantly with high accuracy. Perfect for e-commerce, social media, and professional content creation.',
  keywords: 'background remover, remove background, AI background removal, image editing, transparent background, photo editor',
  openGraph: {
    title: 'AI Background Remover - Remove Image Backgrounds Instantly',
    description: 'Remove backgrounds from images instantly with our AI-powered tool. Get high-quality results in seconds.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}