import React from "react";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MainSlider from "@/components/MainSlider/MainSlider";
import WelcomeTwo from "@/components/WelcomeSection/WelcomeTwo";
import QualityWork from "@/components/QualityWork/QualityWork";
import Experience from "@/components/Experience/Experience";
import ServicesOne from "@/components/ServicesSection/ServicesOne";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import BrandOne from "@/components/BrandSection/BrandOne";
import WhyChooseOne from "@/components/WhyChoose/WhyChooseOne";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import CounterOne from "@/components/Counter/CounterOne";
import NewsOne from "@/components/NewsSection/NewsOne";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import CtaOne from "@/components/CtaSection/CtaOne";
import Layout from "@/components/Layout/Layout";
import { mainSliderTwo } from "@/data/mainSlider";
import TestimonialThree from "@/components/TestimonialSection/TestimonialThree";
import CaseTwo from "@/components/CaseSection/CaseTwo";
import ServicesOneCarousel from "@/components/ServicesSection/ServicesOneCarousel";

const Home2 = () => {
  return (
    <Layout pageTitle="VS GenX Solutions | Empowering Talent, Transforming HR Futures" metaKeywords="VS GenX Solutions, HR Solutions, Empowering Talent, Transforming HR Futures, Purpose-Driven HR, Inclusive Growth, Scalable HR Solutions, Underprivileged Talent, Startup HR, HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Innovative HR, Equity-Driven, 24/7 HR Support, Dynamic Leadership">
     
      <HeaderTwo />
      <MainSlider
        sliders={mainSliderTwo}
        className="main-slider-two"
        navClassName="main-slider__nav-two"
      />
      <WelcomeTwo />
      {/* <CaseTwo /> */}
      <QualityWork />
      <Experience />
      {/* <ServicesOne serviceCount={3} /> */}
      <ServicesOneCarousel/>
      <TestimonialOne className="testimonial-two" />
      {/* <TestimonialThree className="testimonial-two" /> */}
      {/* <BrandOne /> */}
      <WhyChooseOne />
      <OurMissionTwo />
      <CounterOne />
      {/* <NewsOne className="news-two" /> */}
      <GoogleMap />
      <CtaOne className="cta-two" />
    </Layout>
  );
};

export default Home2;
