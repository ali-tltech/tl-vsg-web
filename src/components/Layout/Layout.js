import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "../Header/MobileMenu";
import SearchPopup from "../Header/SearchPopup";
import SiteFooter from "../SiteFooter/SiteFooter";

const Layout = ({
  children,
  pageTitle,
  footerClassName = "",
  navItems,
  onePage = false,
  metaDescription = "Discover purpose-driven HR solutions at VS GenX Solutions. We empower underprivileged talent with scalable strategies and innovative leadership. Ignite imagination, elevate ambition, and unleash creativity with our HR Foundations Accelerator, Talent Edge Solutions, and Leadership Horizon Hub. Enjoy 24/7 support and transformative HR that drives equity, growth, and sustainable success for startups and dynamic organizations.",
  metaKeywords = "VS GenX Solutions, HR Solutions, Empowering Talent, Transforming HR Futures, Purpose-Driven HR, Inclusive Growth, Scalable HR Solutions, Underprivileged Talent, Startup HR, HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Innovative HR, Equity-Driven, 24/7 HR Support, Dynamic Leadership",
  canonicalUrl = "https://www.vsgenxsolutions.com/",
  ogUrl = "https://www.vsgenxsolutions.com/",
  ogType = "website",
  ogImage = "https://opengraph.b-cdn.net/production/images/f15d7b2b-e5f3-4fee-81f3-55db261d764c.jpg?token=YDW7c9UAWiE4ZU0eBDRa8pYY8LTfxC_anBKLxng-2uo&height=800&width=1200&expires=33274649395",
  twitterTitle = "Home Two || VS Genx Solutions - HR Consulting & Recruitment",
  twitterDescription = "Oslim NextJS Template For Business",
  twitterImage = "https://opengraph.b-cdn.net/production/images/f15d7b2b-e5f3-4fee-81f3-55db261d764c.jpg?token=YDW7c9UAWiE4ZU0eBDRa8pYY8LTfxC_anBKLxng-2uo&height=800&width=1200&expires=33274649395",
  twitterCard = "summary_large_image",
  twitterSite = "@YourTwitterHandle", // Replace with your actual Twitter handle
}) => {
  const [loading, setLoading] = useState(true);
  const { scrollTop } = useScroll(100);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        {/* General SEO Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <title>{pageTitle}</title>
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Open Graph Meta Tags (Facebook, LinkedIn, etc.) */}
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:site" content={twitterSite} />
        <meta name="twitter:url" content={ogUrl} />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
      </Head>

      <Preloader loading={loading} />
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className="page-wrapper animated fadeIn"
      >
        {children}
        <SiteFooter footerClassName={footerClassName} />
      </main>
      <MobileMenu navItems={navItems} onePage={onePage} />
      <SearchPopup />
      {scrollTop && (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          style={{ cursor: "pointer" }}
          className="scroll-to-target scroll-to-top d-inline-block fadeIn animated"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layout;
