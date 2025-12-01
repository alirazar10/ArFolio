export const initGA = () => {
  try {
    // Load gtag script if not already loaded
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WZT6WEBLWV';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
    }
    window.gtag('config', 'G-WZT6WEBLWV');
  } catch (error) {
    console.log(error);
  }
};

export const logPageView = () => {
  try {
    if (window.gtag) {
      window.gtag('config', 'G-WZT6WEBLWV', {
        page_path: window.location.pathname,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
