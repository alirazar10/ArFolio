interface SocialMeta {
  title: string;
  description: string;
  url: string;
  image: string;
}

interface MetaTagConfig {
  title: string;
  description: string;
  image: string;
  url: string;
  twitter: {
    card: string;
    site: string;
    creator: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
  facebook: SocialMeta;
  linkedin: SocialMeta;
  instagram: SocialMeta;
  tiktok: SocialMeta;
}

export const META_TAGS: MetaTagConfig = {
  title: "Ali Reza - Full Stack Web Developer",
  description:
    "Ali Reza is an experienced full-stack web developer specializing in TypeScript, React.js, Next.js, Node.js, Laravel, PHP, MySQL, PostgreSQL, TailwindCSS, and modern web technologies. Building scalable applications with a focus on performance, clean code, and user experience.",
  image: "assets/images/4E6A5969.jpeg",
  url: "https://iamali.vercel.app",
  twitter: {
    card: "summary_large_image",
    site: "@AlirazaR10",
    creator: "@AlirazaR10",
    description:
      "Full-stack web developer with expertise in TypeScript, React, Next.js, Node.js, Laravel, and modern web technologies. Building scalable, performant web applications.",
    image: {
      src: "assets/images/4E6A5969.jpeg",
      alt: "Ali Reza - Full Stack Web Developer",
    },
  },
  facebook: {
    title: "Ali Reza - Full Stack Web Developer",
    description:
      "Full-stack web developer with expertise in TypeScript, React, Next.js, Node.js, Laravel, and modern web technologies.",
    url: "https://www.imali.dev/",
    image: "assets/images/4E6A5969.jpeg",
  },
  linkedin: {
    title: "Ali Reza - Full Stack Web Developer",
    description:
      "Full-stack web developer specializing in TypeScript, React, Next.js, Node.js, Laravel, PHP, and cloud technologies. Building production-ready applications.",
    url: "https://www.imali.dev/",
    image: "assets/images/4E6A5969.jpeg",
  },
  instagram: {
    title: "Ali Reza - Full Stack Web Developer",
    description:
      "Building scalable web solutions with TypeScript, React, Next.js, and modern technologies.",
    url: "https://www.imali.dev/",
    image: "assets/images/4E6A5969.jpeg",
  },
  tiktok: {
    title: "Ali Reza - Full Stack Web Developer",
    description:
      "Full-stack developer crafting exceptional digital experiences with TypeScript, React, and Next.js.",
    url: "https://www.imali.dev/",
    image: "assets/images/4E6A5969.jpeg",
  },
};
