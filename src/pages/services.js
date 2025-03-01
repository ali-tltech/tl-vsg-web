import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesOne from "@/components/ServicesSection/ServicesOne";
import bg_service from "@/images/backgrounds/service-banner-image.jpg";
import React, { useEffect, useState } from "react";
import { getSEO } from "src/api/webapi";

const Services = () => {
  const [seoData, setSeoData] = useState(null);
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        // Update the API call to include the pageTitle parameter
        const response = await getSEO("services");
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


  const pageTitle = seoData?.title || "VS GenX Solutions | Popular Services - Empowering HR Solutions"
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
    >       <Header />
      <PageHeader page="services" title="Our Services" bgImage={bg_service} />
      <ServicesOne hideTitle />
    </Layout>
  );
};

export default Services;
