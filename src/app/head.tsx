"use client";

import { useEffect } from "react";
import { MetaTags } from "@/components/libs";

export default function Head(): React.ReactElement {
  useEffect(() => {
    // Initialize analytics tracking for route changes
    // Note: GA and Hotjar are now initialized in layout.tsx via Script components
  }, []);

  return <MetaTags />;
}
