// <======================================== NOTES START ==============================================>

// Libraries used: "react-bootstrap" for styling  
// Read the documentation on their official websites before making changes.  

// To run the code: npm run dev  
// First, install all dependencies: npm install  
// Then run the code: npm run dev  
// To build the project: npm run build  

// Created date: 22-01-2025 || Created by: Arjun N || Module: 1 ||  
// Modified date: 01-02-2025 || Modified by: Arjun N || Module: 1 ||  

// Technical Summary (Pre-setups)  
// Created by: Arjun N, Ali  
// Domain: [Add Domain Here]  
// Hosting: [Add Hosting Details Here]  
// SSL: [Add SSL Details Here]  
// Database: [Add Database Details Here]  

// Phase Summary: || Created by: Arjun N ||  
// Phase 1: GitHub Repository Setup  
// Phase 2: Development / Main Page Creation  
// Phase 3: Production  

// <======================================== NOTES END ==============================================>

  import { useEffect } from "react";
  import { useRouter } from "next/router";
  import Script from "next/script";
  import ContextProvider from "@/context/ContextProvider";
  
  // Google Analytics Tracking ID
  const GA_TRACKING_ID = "G-56XPSKHF5L"; // Replace with your actual Google Analytics ID
  
  // Vendor CSS
  import "@/vendors/animate/animate.min.css";
  import "@/vendors/animate/custom-animate.css";
  import "@/vendors/fontawesome/css/all.min.css";
  import "@/vendors/oslim-icons/style.css";
  import "@/vendors/reey-font/stylesheet.css";
  import "@/vendors/the-sayinistic-font/stylesheet.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "swiper/swiper-bundle.min.css";
  import "react-modal-video/css/modal-video.css";
  import "jarallax/dist/jarallax.css";
  import "tiny-slider/dist/tiny-slider.css";
  
  // Extra CSS
  import "@/styles/style.css";
  import "@/styles/responsive.css";
  
  import { Toaster } from "react-hot-toast";
  
  const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
  
    useEffect(() => {
      const handleRouteChange = (url) => {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);
  
    return (
      <ContextProvider>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        <Toaster position="bottom-center" reverseOrder={false} />
        <Component {...pageProps} />
      </ContextProvider>
    );
  };
  
  export default MyApp;
  