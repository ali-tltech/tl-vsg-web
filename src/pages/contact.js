import ContactDetails from "@/components/Contact/ContactDetails";
import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_contact from "@/images/backgrounds/contact-banner-image.jpg";
import React from "react";



const Contact = () => {
  return (
    <Layout pageTitle=" " metaDescription="" metaKeywords=" ">
      <Header />
      <PageHeader title="Contact" bgImage={bg_contact}/>
      <ContactDetails />
      <ContactPage isTitleTwo />
      <CtaOne />
    </Layout>
  );
};

export default Contact;
