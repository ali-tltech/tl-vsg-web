import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TermsOfUsePolicy from "@/components/TermsOfUse/TermsOfUsePolicy";
import bg_terms from "@/images/backgrounds/terms-banner-image.jpg";
import React, { useEffect, useState } from "react";
import { getSEO } from "src/api/webapi";

const TermsOfUse = () => {
   const [seoData, setSeoData] = useState(null);
    useEffect(() => {
      const fetchSEO = async () => {
        try {
          // Update the API call to include the pageTitle parameter
          const response = await getSEO("terms");
          console.log(response.data);
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
  
  
    const pageTitle = seoData?.title || "VS GenX Solutions | Terms and Conditions & Disclaimer"
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
      <PageHeader title="Terms and Conditions & Disclaimer" bgImage={bg_terms} />
      <TermsOfUsePolicy />
      {/* <ContactPage /> */}
      <CtaOne />
    </Layout>
  );
};

export default TermsOfUse;
