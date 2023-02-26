import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-WZT6WEBLWV');
};

export const GAnalyticsPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
