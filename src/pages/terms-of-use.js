import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TermsOfUsePolicy from "@/components/TermsOfUse/TermsOfUsePolicy";
import bg_terms from "@/images/backgrounds/terms-banner-image.jpg";
import React from "react";

const TermsOfUse = () => {
  return (
    <Layout pageTitle="VS GenX Solutions | Terms and Conditions & Disclaimer" metaDescription="Read the Terms and Conditions and Disclaimer for VS GenX Solutions. Understand our policies on website usage, intellectual property, data protection, and legal disclaimers." metaKeywords="Terms and Conditions, Disclaimer, VS GenX Solutions, website policies, legal terms, data protection, intellectual property, legal disclaimer">
      <Header />
      <PageHeader title="Terms and Conditions & Disclaimer" bgImage={bg_terms} />
      <TermsOfUsePolicy />
      {/* <ContactPage /> */}
      <CtaOne />
    </Layout>
  );
};

export default TermsOfUse;
