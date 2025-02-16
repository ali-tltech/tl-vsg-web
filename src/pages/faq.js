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
    <Layout pageTitle="VS GenX Solutions | FAQ  Frequently Asked Questions" metaKeywords="VS GenX Solutions, FAQ, Frequently Asked Questions, HR Services, HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Cultural Transformation Studio, Smart HR Solutions, Employee Engagement Catalyst" metaDescription="Find answers to your questions about VS GenX Solutions comprehensive HR services. Learn about our HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Cultural Transformation Studio, Smart HR Solutions, and Employee Engagement Catalyst.">
     
      <Header />
      <PageHeader title="FAQs" bgImage={bg_faq} />
      <FAQsPage />
      <ContactPage />
      <CtaOne />
    </Layout>
  );
};

export default Faq;