"use client";
import { srConfig } from "@/configs/srConfig";
// import sr from "@/utils/scrollReveal";
import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  delay?: number;
  viewFactor?: number;
  origin?: string;
  [key: string]: any;
}

interface ScrollRevealWrapperProps {
  options?: ScrollRevealOptions;
  children: React.ReactNode;
}

export default function ScrollRevealWrapper({ options, children }: ScrollRevealWrapperProps): React.ReactElement {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function animate() {
      if (container.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(
          container.current,
          srConfig(options?.delay, options?.viewFactor, options)
        );
      }
    }
    animate();
  });

  return <div ref={container}>{children}</div>;
}
