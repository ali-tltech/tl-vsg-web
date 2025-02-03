import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import FAQsPage from "@/components/FAQsPage/FAQsPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_faq from "@/images/backgrounds/faq-banner-image.jpg";
import React from "react";

const Faq = () => {
  return (
    <Layout pageTitle="FAQs">
     
      <Header />
      <PageHeader title="FAQs" bgImage={bg_faq} />
      <FAQsPage />
      <ContactPage />
      <CtaOne />
    </Layout>
  );
};

export default Faq;