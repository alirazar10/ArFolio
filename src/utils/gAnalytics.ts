interface GTagConfig {
  config: string;
  path_path: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const initGA = (): void => {
  try {
    // Load gtag script if not already loaded
    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-WZT6WEBLWV";
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) {
        (window.dataLayer as unknown[]).push(args);
      };
      window.gtag("js", new Date());
    }
    window.gtag?.("config", "G-WZT6WEBLWV");
  } catch (error) {
    console.error("GA init error:", error);
  }
};

export const logPageView = (): void => {
  try {
    if (window.gtag) {
      window.gtag("config", "G-WZT6WEBLWV", {
        page_path: window.location.pathname,
      });
    }
  } catch (error) {
    console.error("GA page view error:", error);
  }
};
