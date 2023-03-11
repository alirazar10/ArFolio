"use client";

import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { initGA, logPageView } from "@/utils/gAnalytics";
import { useRouter } from "next/navigation";
import { MetaTags } from "@/components/libs";

export default function Head() {
  const router = useRouter();
  useEffect(() => {
    hotjar.initialize(3384548, 6);
  }, []);

  useEffect(() => {
    try {
      initGA();
      logPageView();
      router.events.on("routeChangeComplete", logPageView);
      return () => {
        router.events.off("routeChangeComplete", logPageView);
      };
    } catch (error) {}
  }, [router.events]);

  return (
    <>
      <MetaTags />
    </>
  );
}
