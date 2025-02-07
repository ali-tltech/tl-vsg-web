import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_privacy from "@/images/backgrounds/privacy-banner-image.jpg";
import React from "react";

const Privacy = () => {
  return (
    <Layout pageTitle="VS GenX Solutions | Privacy Policy" metaDescription="At VS GenX Solutions, your privacy is our priority. Learn how we collect, use, and safeguard your personal information. Visit our Contact Us page for more details." metaKeywords="Privacy Policy, VS GenX Solutions, data security, personal information, privacy, GDPR, legal compliance, secure data">
      <Header />
      <PageHeader title="Privacy Policy" bgImage={bg_privacy} />
      <PrivacyPolicy />
      {/* <ContactPage /> */}
      <CtaOne />
    </Layout>
  );
};

export default Privacy;
