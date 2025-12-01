import "./globals.css";
import "../styles/transitionStyle.css";

import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import Layout from "@/components/layouts/layout";
import Script from "next/script";
import { ReactNode } from "react";
import { PerformanceOptimizer } from "@/components/libs/performance";
import { MetaTags } from "@/components/libs";
import { META_TAGS } from "@/content/metaTag";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: ReactNode;
}

// Metadata for Next.js
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.com"),
  title: {
    default: META_TAGS.title,
    template: "%s | Ali Reza - Full Stack Developer",
  },
  description: META_TAGS.description,
  keywords: [
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Laravel",
    "Web Developer",
    "JavaScript",
    "Node.js",
    "PHP",
  ],
  authors: [{ name: "Ali Reza Rezayee" }],
  creator: "Ali Reza Rezayee",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: META_TAGS.url,
    title: META_TAGS.title,
    description: META_TAGS.description,
    siteName: "Ali Reza Rezayee - Full Stack Developer",
    images: [
      {
        url: META_TAGS.image,
        width: 1200,
        height: 630,
        alt: "Ali Reza - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TAGS.title,
    description: META_TAGS.twitter.description,
    creator: META_TAGS.twitter.creator,
    images: [META_TAGS.twitter.image.src],
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="min-h-screen m-0 p-0">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A192B" />
      </head>

      <body
        className={`${montserrat.className} bg-primary-500 min-h-screen m-0 p-0`}
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

        {/* Google Optimize */}
        <Script
          src="https://www.googleoptimize.com/optimize.js?id=OPT-P3RB9RT"
          strategy="afterInteractive"
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
