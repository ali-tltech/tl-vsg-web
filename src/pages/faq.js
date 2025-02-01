import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import FAQsPage from "@/components/FAQsPage/FAQsPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import Head from "next/head";
import React from "react";

const Faq = () => {
  return (
    <Layout pageTitle="FAQs">
      <Head>
        <title>VS GenX Solutions | FAQ – Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to your questions about VS GenX Solutions' comprehensive HR services. Learn about our HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Cultural Transformation Studio, Smart HR Solutions, and Employee Engagement Catalyst."
        />
        <meta
          name="keywords"
          content="VS GenX Solutions, FAQ, Frequently Asked Questions, HR Services, HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Cultural Transformation Studio, Smart HR Solutions, Employee Engagement Catalyst"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.yourwebsiteurl.com/faq" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="VS GenX Solutions | FAQ – Frequently Asked Questions" />
        <meta property="og:description" content="Explore our FAQ page to find answers about VS GenX Solutions' comprehensive HR services, including HR Foundations Accelerator, Talent Edge Solutions, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsiteurl.com/faq" />
        <meta property="og:image" content="https://www.yourwebsiteurl.com/path-to-faq-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VS GenX Solutions | FAQ – Frequently Asked Questions" />
        <meta name="twitter:description" content="Discover answers to your questions about our comprehensive HR services at VS GenX Solutions. Learn about our innovative solutions for building robust HR frameworks." />
        <meta name="twitter:image" content="https://www.yourwebsiteurl.com/path-to-faq-image.jpg" />
      </Head>
      <Header />
      <PageHeader title="FAQs" />
      <FAQsPage />
      <ContactPage />
      <CtaOne />
    </Layout>
  );
};

export default Faq;