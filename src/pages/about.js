import BrandOne from "@/components/BrandSection/BrandOne";
import CtaOne from "@/components/CtaSection/CtaOne";
import FreeConsultation from "@/components/FreeConsultation/FreeConsultation";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import QualityWork from "@/components/QualityWork/QualityWork";
import PageHeader from "@/components/Reuseable/PageHeader";
import TeamOne from "@/components/TeamSection/TeamOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import WorkTogetherTwo from "@/components/WorkTogether/WorkTogetherTwo";
import bg_about from "@/images/backgrounds/aboutus-banner-image.jpg";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="VS GenX Solutions | About Us - Empowering Talent & Redefining HR" metaDescription="At VS GenX, we empower untapped talent by creating growth opportunities and delivering value-driven HR solutions. Discover our journey of redefining HR through equity, fairness, and transformative milestones, and learn about our mission, vision, and core values." metaKeywords="VS GenX Solutions, About Us, HR solutions, empowering talent, transformative HR, equity in HR, inclusive HR, HR journey, mission, vision, core values">
      <Header />
      <PageHeader page="About" title="About us" bgImage={bg_about} />
      <WorkTogetherTwo />
      <FreeConsultation />
      <QualityWork />
      <OurMissionTwo className="our-mission-three" shape={1} />
      <TeamOne />
      <TestimonialOne className="testimonial-two" />
      {/* <BrandOne /> */}
      <CtaOne />
    </Layout>
  );
};

export default About;
