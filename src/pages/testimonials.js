import CtaContact from "@/components/CtaSection/CtaContact";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TestimonialsPage from "@/components/TestimonialSection/TestimonialsPage";
import bg_testimonials from "@/images/backgrounds/testimonial-banner-image.jpg";

import React from "react";

const Testimonials = () => {
  return (
    <Layout pageTitle="Testimonials">
      <Header />
      <PageHeader page="Testimonials" title="Our Testimonials" bgImage={bg_testimonials}/>
      <TestimonialsPage />
      <CtaContact/>
    </Layout>
  );
};

export default Testimonials;
