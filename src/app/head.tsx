"use client";

import { MetaTags } from "@/components/libs";

/**
 * Head component for App Router
 * Renders structured data (JSON-LD) for SEO
 * All other meta tags are handled by metadata export in layout.tsx
 */
export default function Head(): React.ReactElement {
  return <MetaTags />;
}
