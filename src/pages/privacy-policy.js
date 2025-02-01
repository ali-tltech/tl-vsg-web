import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const Privacy = () => {
  return (
    <Layout pageTitle="Privacy Policy">
      <Header />
      <PageHeader title="Privacy Policy" />
      <PrivacyPolicy />
      <ContactPage />
      <CtaOne />
    </Layout>
  );
};

export default Privacy;
