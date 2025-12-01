"use client";

import { generateImageUrl } from "./imageCreator";
import { heroImage } from "@/utils/cloudinary";

interface StructuredDataPerson {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs: string[];
  image: string;
  address: {
    "@type": string;
    addressCountry: string;
  };
  knowsAbout: string[];
}

export default function MetaTags(): React.ReactElement {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.com";
  const imageUrl = generateImageUrl(heroImage.metaTagImage);

  // Structured Data for SEO (Schema.org Person markup)
  const structuredData: StructuredDataPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Reza Rezayee",
    jobTitle: "Full Stack Developer",
    description:
      "Full-stack web developer with expertise in TypeScript, React, Next.js, Node.js, Laravel, and modern web technologies.",
    url: baseUrl,
    sameAs: [
      "https://github.com/alirazar10",
      "https://www.linkedin.com/in/alireza-r10/",
      "https://twitter.com/AlirazaR10",
      "https://www.instagram.com/aliraza.r10/",
      "https://www.facebook.com/aliraza.r01",
    ],
    image: imageUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Python",
      "PHP",
      "Laravel",
      "TailwindCSS",
      "PostgreSQL",
      "MySQL",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
