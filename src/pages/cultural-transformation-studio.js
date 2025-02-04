import CtaOne from "@/components/CtaSection/CtaOne";
import CtaService from "@/components/CtaSection/CtaService";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { CulturalTransformationStudios } from "@/data/servicesSection";
import bg_service from "@/images/backgrounds/service-banner-image.jpg";
import React from "react";

const { title } = CulturalTransformationStudios;

const CulturalTransformationStudio = () => {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Service Details"
        title={title}
        parent="Services"
        parentHref="/services"
        bgImage={bg_service}
      />
      <ServiceDetails service={CulturalTransformationStudios} />
      <CtaService/>
      {/* <CtaOne /> */}
    </Layout>
  );
};

export default CulturalTransformationStudio;
