import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesOne from "@/components/ServicesSection/ServicesOne";
import bg_service from "@/images/backgrounds/service-banner-image.jpg";
import React from "react";

const Services = () => {
  return (
    <Layout pageTitle="Services" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="services" title="Our Services" bgImage={bg_service}/>
      <ServicesOne hideTitle />
    </Layout>
  );
};

export default Services;
