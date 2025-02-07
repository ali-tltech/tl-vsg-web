    // <======================================== NOTES START ==============================================>

  // Libraries used :   "react-bootstrap" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code: npm run dev
  // First install all dependencies :- npm intsall
  // Then run the code :- npm run dev
  // to build code :-  npm run build
  // created date : 22-1-2025 || created by : Arjun N  || module : 1 ||
  // modified date : 1/2/2025 || modified by : Arjun N || module : 1 ||
  // modified date : 1/2/2025 || modified by : Arjun N  || module : 1 ||
  // Technical summary(Pre-setups) created date/by :  Arjun N || Ali
  // Domain :   || 
  // Hosting :   ||
  // SSL :   ||
  // Database :  ||

  // Phase summary :   || created date/by :  Arjun N  ||
  // Phase 1 :  Git hub creation  ||  
  // Phase 2 :  Development/Main page creation ||
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>


import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/oslim-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/the-sayinistic-font/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "jarallax/dist/jarallax.css";
import "tiny-slider/dist/tiny-slider.css";
import { Toaster } from 'react-hot-toast';

// extra css
import "@/styles/style.css";
import "@/styles/responsive.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
