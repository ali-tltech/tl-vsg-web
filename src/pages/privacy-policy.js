import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_privacy from "@/images/backgrounds/privacy-banner-image.jpg";
import React, { useEffect, useState } from "react";
import { getSEO } from "src/api/webapi";

const Privacy = () => {
  const [seoData, setSeoData] = useState(null);
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        // Update the API call to include the pageTitle parameter
        const response = await getSEO("privacy-policy");
        if (response?.data) {
          // Store the SEO data
          setSeoData(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Failed to fetch SEO data:", error);
      }
    };

    fetchSEO();
  }, []);


  const pageTitle = seoData?.title || "VS GenX Solutions | Privacy Policy"
  const metaDescription = seoData?.description
  const metaKeywords = seoData?.keywords
  const ogImage = seoData?.ogImage
  return (
    <Layout
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
      ogImage={ogImage}
      twitterImage={ogImage}
      twitterTitle={pageTitle}
      twitterDescription={metaDescription}
    >      
     <Header />
      <PageHeader title="Privacy Policy" bgImage={bg_privacy} />
      <PrivacyPolicy />
      {/* <ContactPage /> */}
      <CtaOne />
    </Layout>
  );
};

export default Privacy;
