import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import FAQsPage from "@/components/FAQsPage/FAQsPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_faq from "@/images/backgrounds/faq-banner-image.jpg";
import React, { useEffect, useState } from "react";
import { getSEO } from "src/api/webapi";

const Faq = () => {
  const [seoData, setSeoData] = useState(null);
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        // Update the API call to include the pageTitle parameter
        const response = await getSEO("faqs");
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


  const pageTitle = seoData?.title || "VS GenX Solutions | FAQ – Frequently Asked Questions"
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
      <PageHeader title="FAQs" bgImage={bg_faq} />
      <FAQsPage />
      <ContactPage />
      <CtaOne />
    </Layout>
  );
};

export default Faq;