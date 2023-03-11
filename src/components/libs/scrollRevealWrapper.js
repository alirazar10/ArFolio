"use client";
import { srConfig } from "@/configs/srConfig";
import sr from "@/utils/scrollReveal";
import { useEffect, useRef } from "react";

export default function ScrollRevealWrapper({ options, children }) {
  const container = useRef(null);
  useEffect(() => {
    if (sr) {
      sr.reveal(
        container.current,
        srConfig(options?.delay, options?.viewFactor, options)
      );
    }
  });

  return <div ref={container}>{children}</div>;
}
