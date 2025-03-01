import ContactDetails from "@/components/Contact/ContactDetails";
import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_contact from "@/images/backgrounds/contact-banner-image.jpg";
import React, { useEffect, useState } from "react";
import { getSEO } from "src/api/webapi";



const Contact = () => {
  const [seoData, setSeoData] = useState(null);
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        // Update the API call to include the pageTitle parameter
        const response = await getSEO("contact");
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
      <PageHeader title="Contact" bgImage={bg_contact}/>
      <ContactDetails />
      <ContactPage isTitleTwo />
      <CtaOne />
    </Layout>
  );
};

export default Contact;
