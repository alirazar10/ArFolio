import { generateImageUrl } from "./imageCreator";
import { heroImage } from "@/configs/cloudinary";

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.imali.dev";
  const imageUrl = generateImageUrl(heroImage.metaTagImage);

  // Structured Data for SEO (Schema.org Person markup)
  const structuredData: StructuredDataPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Reza Rezayee",
    jobTitle: "Lead Full-Stack Software Engineer",
    description:
      "Lead Full-Stack Software Engineer with 9+ years of experience building and scaling production applications across FinTech, EdTech, and data-driven products.",
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
      addressCountry: "PK",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React.js",
      "Next.js",
      "Node.js",
      "Django",
      "Laravel",
      "TailwindCSS",
      "PostgreSQL",
      "MySQL",
      "OpenAI",
      "RAG",
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
