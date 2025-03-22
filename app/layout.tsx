// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ZeroBG - Free AI Background Remover',
    template: '%s | ZeroBG',
  },
  description:
    'Remove backgrounds from images instantly with ZeroBG, the best free AI background remover. Fast, automatic, and no watermarks.',
  keywords: [
    'free AI background remover',
    'best background removal tool',
    'remove background from image',
    'ZeroBG',
  ],
  openGraph: {
    title: 'ZeroBG - Free AI Background Remover',
    description:
      'Professional background removal powered by AI. 100% automatic and free to use.',
    url: 'https://zero-bg.vercel.app',
    siteName: 'ZeroBG',
    images: [
      {
        url: 'https://t4.ftcdn.net/jpg/01/35/07/55/360_F_135075568_S87PSNuaUDjBgnsvUtlTvgLFf3elOOdg.jpg',
        width: 1200,
        height: 630,
        alt: 'ZeroBG Background Remover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeroBG - Free AI Background Remover',
    description:
      'Remove backgrounds from images instantly with ZeroBG. Powered by AI, our tool offers fast, automatic, and free background removal.',
    images: [
      'https://t4.ftcdn.net/jpg/01/35/07/55/360_F_135075568_S87PSNuaUDjBgnsvUtlTvgLFf3elOOdg.jpg',
    ],
  },
  other: {
    'google-adsense-account': 'ca-pub-7936833075670517',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png', // Reference the favicon in the public directory
        type: 'image/png',
        sizes: '32x32', // Adjust based on the actual size of your favicon
      },
    ],
    apple: [
      {
        url: '/favicon.png', // You can create a separate apple-touch-icon.png (e.g., 180x180)
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme appearance="light" accentColor="iris" radius="large">
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}