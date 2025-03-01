import CtaContact from "@/components/CtaSection/CtaContact";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TestimonialsPage from "@/components/TestimonialSection/TestimonialsPage";
import bg_testimonials from "@/images/backgrounds/testimonial-banner-image.jpg";

import React, { useEffect, useState } from "react";
import { getSEO } from "src/api/webapi";

const Testimonials = () => {

   const [seoData, setSeoData] =useState(null);
    useEffect(() => {
      const fetchSEO = async () => {
        try {
          // Update the API call to include the pageTitle parameter
          const response = await getSEO("testimonials");
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
  
  
    const pageTitle = seoData?.title || "VS GenX Solutions | Empowering Talent, Transforming HR Futures"
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
      <PageHeader page="Testimonials" title="Our Testimonials" bgImage={bg_testimonials}/>
      <TestimonialsPage />
      <CtaContact/>
    </Layout>
  );
};

export default Testimonials;
