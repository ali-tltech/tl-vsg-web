import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesOne from "@/components/ServicesSection/ServicesOne";
import bg_service from "@/images/backgrounds/service-banner-image.jpg";
import React from "react";

const Services = () => {
  return (
    <Layout pageTitle="VS GenX Solutions | Popular Services - Empowering HR Solutions" metaDescription="Explore our popular HR services including HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Cultural Transformation Studio, Smart HR Solutions, and Employee Engagement Catalyst. Empower your business with robust, tailored HR solutions" metaKeywords="VS GenX Solutions, Popular Services, HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Cultural Transformation Studio, Smart HR Solutions, Employee Engagement Catalyst, HR services, comprehensive HR solutions, innovative HR strategies" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="services" title="Our Services" bgImage={bg_service}/>
      <ServicesOne hideTitle />
    </Layout>
  );
};

export default Services;
