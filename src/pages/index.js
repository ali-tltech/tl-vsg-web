import React from "react";
import Head from "next/head";
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

const Home2 = () => {
  return (
    <Layout pageTitle="Home Two">
      <Head>
        <meta charSet="UTF-8" />
        <title>VS GenX Solutions | Empowering Talent, Transforming HR Futures</title>
        <meta
          name="description"
          content="Discover purpose-driven HR solutions at VS GenX Solutions. We empower underprivileged talent with scalable strategies and innovative leadership. Ignite imagination, elevate ambition, and unleash creativity with our HR Foundations Accelerator, Talent Edge Solutions, and Leadership Horizon Hub. Enjoy 24/7 support and transformative HR that drives equity, growth, and sustainable success for startups and dynamic organizations."
        />
        <meta
          name="keywords"
          content="VS GenX Solutions, HR Solutions, Empowering Talent, Transforming HR Futures, Purpose-Driven HR, Inclusive Growth, Scalable HR Solutions, Underprivileged Talent, Startup HR, HR Foundations Accelerator, Talent Edge Solutions, Leadership Horizon Hub, Innovative HR, Equity-Driven, 24/7 HR Support, Dynamic Leadership"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.yourwebsiteurl.com/" />
        <meta
          property="og:title"
          content="VS GenX Solutions | Empowering Talent, Transforming HR Futures"
        />
        <meta
          property="og:description"
          content="At VS GenX Solutions, we empower underprivileged talent through innovative, purpose-driven HR strategies. Explore our comprehensive services including HR Foundations Accelerator, Talent Edge Solutions, and Leadership Horizon Hub, supported by 24/7 service for sustainable organizational growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsiteurl.com/" />
        <meta
          property="og:image"
          content="https://www.yourwebsiteurl.com/path-to-your-hero-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VS GenX Solutions | Empowering Talent, Transforming HR Futures"
        />
        <meta
          name="twitter:description"
          content="Explore purpose-driven HR solutions that empower underprivileged talent and drive inclusive growth. Discover our HR Foundations Accelerator, Talent Edge Solutions, and Leadership Horizon Hub with 24/7 support for dynamic success."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsiteurl.com/path-to-your-hero-image.jpg"
        />
      </Head>
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
      <ServicesOne serviceCount={3} />
      <TestimonialOne className="testimonial-two" />
      <BrandOne />
      <WhyChooseOne />
      <OurMissionTwo />
      <CounterOne />
      <NewsOne className="news-two" />
      <GoogleMap />
      <CtaOne className="cta-two" />
    </Layout>
  );
};

export default Home2;
