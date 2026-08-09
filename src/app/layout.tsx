import "./globals.css";

import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import Layout from "@/components/layouts/layout";
import Script from "next/script";
import { ReactNode } from "react";
import { PerformanceOptimizer } from "@/components/libs/performance";
import { MetaTags } from "@/components/libs";
import { META_TAGS } from "@/content";
import { generateImageUrl } from "@/components/libs/imageCreator";
import { heroImage } from "@/configs/cloudinary";

const DEFAULT_BASE_URL = "https://www.imali.dev";
const socialImageUrl = generateImageUrl(heroImage.metaTagImage);

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

interface RootLayoutProps {
  children: ReactNode;
}

// Metadata for Next.js
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL),
  title: {
    default: META_TAGS.title,
    template: "%s | Ali Reza - Lead Full-Stack Software Engineer",
  },
  description: META_TAGS.description,
  keywords: [
    "Lead Full-Stack Software Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "FinTech",
    "EdTech",
    "AI Integration",
    "PostgreSQL",
  ],
  authors: [{ name: "Ali Reza Rezayee" }],
  creator: "Ali Reza Rezayee",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: META_TAGS.url,
    title: META_TAGS.title,
    description: META_TAGS.description,
    siteName: "Ali Reza Rezayee - Lead Full-Stack Software Engineer",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Ali Reza - Lead Full-Stack Software Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TAGS.title,
    description: META_TAGS.twitter.description,
    creator: META_TAGS.twitter.creator,
    images: [socialImageUrl],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  applicationName: "ArFolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ArFolio",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0C0F",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="min-h-screen m-0 p-0">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} font-sans bg-primary-500 min-h-screen m-0 p-0`}
        id="top"
      >
        {/* Structured Data (JSON-LD) - Must be in body to avoid hydration mismatch */}
        <MetaTags />
        
        <PerformanceOptimizer />
        <Layout>{children}</Layout>
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        {/* Hotjar */}
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3384548,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </body>
    </html>
  );
}
