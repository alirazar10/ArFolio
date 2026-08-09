"use client";

import { useEffect } from 'react';

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined') {
      import('web-vitals').then((webVitals) => {
        webVitals.onCLS(console.log);
        webVitals.onFCP(console.log);
        webVitals.onLCP(console.log);
        webVitals.onTTFB(console.log);
      });
    }
  }, []);
}

// Performance optimization component
export function PerformanceOptimizer(): React.ReactElement | null {
  usePerformanceMonitoring();

  return null; // This component doesn't render anything
}