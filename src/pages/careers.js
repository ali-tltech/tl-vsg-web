import CareerPageWithOpenings from "@/components/careers/CareerPageWithOpenings ";
import CasesPageCarousel from "@/components/CaseSection/CasesPageCarousel";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_cases from "@/images/backgrounds/cases-banner-image.jpg";
import React, { useState } from "react";
import { getSEO } from "src/api/webapi";

const Careers = () => {
  const [seoData, setSeoData] = useState(null);
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        // Update the API call to include the pageTitle parameter
        const response = await getSEO("careers");
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
  
  
  const pageTitle = seoData?.title || "VS GenX Solutions | Careers"
  const metaDescription = seoData?.description
  const metaKeywords = seoData?.keywords
  const ogImage = seoData?.ogImage
  return (
    <Layout pageTitle={pageTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
      ogImage={ogImage}
      twitterImage={ogImage}
      twitterTitle={pageTitle}
      twitterDescription={metaDescription}
      footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Careers" title="Careers" bgImage={bg_cases} />
      {/* <CasesPageCarousel /> */}
      <CareerPageWithOpenings />
    </Layout>
  );
};

export default Careers;
