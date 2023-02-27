import ReactGA from 'react-ga';

export const initGA = () => {
  try {
    ReactGA.initialize('G-WZT6WEBLWV');
  } catch (error) {
    console.log(error)
    
  }

};

export const logPageView = () => {
  try {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    
  } catch (error) {
    console.log(error)
  }
};
