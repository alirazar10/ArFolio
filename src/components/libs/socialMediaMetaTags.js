import { META_TAGS } from "@/content/metaTag";

export default function SocialMediaMetaTags() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const title = `I am ${META_TAGS.title}`.toString();
  return (
    <>
      <title>{title}</title>
      <meta
        content="width=device-width, initial-scale=1 shrink-to-fit=no"
        name="viewport"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={META_TAGS.description} />
      <meta
        name="google-site-verification"
        content={`${baseUrl}/google1ecc11e592c8c73a.html`}
      />
      <meta
        name="keywords"
        content="Full Stack Developer, Next.js React.js, JavaScript, PHP, Laravel, Python, Flask, TailwindCSS, CSS, HTML, Developer, "
      />
      <meta name="author" content="Ali Reza Rezayee" />
      <link rel="icon" href="" />
      {/* Facebook and linkedin Meta Tags*/}
      <meta property={`og:title`} content={META_TAGS.facebook.title} />
      <meta
        property={`og:description`}
        content={META_TAGS.facebook.description}
      />
      <meta
        property={`og:image`}
        content={baseUrl + META_TAGS.facebook.image}
      />
      <meta property={`og:url`} content={META_TAGS.facebook.url} />
      <meta property={`og:type`} content={`website`} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={META_TAGS.twitter.card} />
      <meta name="twitter:site" content={META_TAGS.twitter.site} />
      <meta name="twitter:title" content={META_TAGS.twitter.creator} />
      <meta
        name="twitter:description"
        content={META_TAGS.twitter.description}
      />
      <meta
        name="twitter:image"
        content={baseUrl + META_TAGS.twitter.image.src}
      />
      <meta
        name="google-site-verification"
        content="reqWSYtRisTcEA7GeQk74Ld6hEWvSN9apg9vrXghIWE"
      />
      <meta name="googlebot" content="all" />
      <meta name="robots" content="all" />
    </>
  );
}
