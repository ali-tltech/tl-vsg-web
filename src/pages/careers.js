import CareerPageWithOpenings from "@/components/careers/CareerPageWithOpenings ";
import CasesPageCarousel from "@/components/CaseSection/CasesPageCarousel";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_cases from "@/images/backgrounds/cases-banner-image.jpg";
import React from "react";

const Careers = () => {
  return (
    <Layout pageTitle="Careers " footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Careers" title="Careers" bgImage={bg_cases} />
      {/* <CasesPageCarousel /> */}
      <CareerPageWithOpenings />
    </Layout>
  );
};

export default Careers;
