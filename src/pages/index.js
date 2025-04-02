import React, { useEffect, useState } from "react";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MainSlider from "@/components/MainSlider/MainSlider";
import WelcomeTwo from "@/components/WelcomeSection/WelcomeTwo";
import QualityWork from "@/components/QualityWork/QualityWork";
import Experience from "@/components/Experience/Experience";
import TestimonialOne from "@/components/TestimonialSection/TestimonialOne";
import WhyChooseOne from "@/components/WhyChoose/WhyChooseOne";
import OurMissionTwo from "@/components/OurMission/OurMissionTwo";
import CounterOne from "@/components/Counter/CounterOne";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import CtaOne from "@/components/CtaSection/CtaOne";
import Layout from "@/components/Layout/Layout";
import { mainSliderTwo } from "@/data/mainSlider";
import ServicesOneCarousel from "@/components/ServicesSection/ServicesOneCarousel";
import { getSEO } from "src/api/webapi";
import { VideoCarousel } from "@/components/videoCarosell";
// import YouTubeGallery from "@/components/youtubeGallery";
// import { VideoCarousel } from "@/components/videoCarosell";

const Home2 = () => {

  const [seoData, setSeoData] = useState(null);
  useEffect(() => {
    const fetchSEO = async () => {
      try {
        // Update the API call to include the pageTitle parameter
        const response = await getSEO("home");
        console.log(response.data);
        if (response?.data) {
          // Store the SEO data
          setSeoData(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Failed to fetch SEO data:", error);
      }
    };

    fetchSEO();
  }, []);


  const videos = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
      description: "Learn the basics of Next.js and build your first application",
      youtubeUrl: "https://youtube.com/watch?v=your-video-id",
      duration: "10:30",
      views: "1.2K"
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
      description: "Deep dive into advanced React patterns and best practices",
      youtubeUrl: "https://youtube.com/watch?v=your-video-id-2",
      duration: "15:45",
      views: "2.5K"
    },
    {
      id: "3",
      title: "Building Modern UIs",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
      description: "Create beautiful and responsive user interfaces with modern tools",
      youtubeUrl: "https://youtube.com/watch?v=your-video-id-3",
      duration: "12:20",
      views: "3.1K"
    },
    {
      id: "4",
      title: "Mastering TypeScript",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60",
      description: "Take your TypeScript skills to the next level with advanced concepts",
      youtubeUrl: "https://youtube.com/watch?v=your-video-id-4",
      duration: "18:15",
      views: "4.7K"
    },
  ];

  const pageTitle = seoData?.title || "VS GenX Solutions | Empowering Talent, Transforming HR Futures"
  const metaDescription = seoData?.description
  const metaKeywords = seoData?.keywords
  const ogImage = seoData?.ogImage

  return (
    <Layout
      pageTitle={pageTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
      ogImage={ogImage}
      twitterImage={ogImage}
      twitterTitle={pageTitle}
      twitterDescription={metaDescription}
    >
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
      {/* <YouTubeGallery /> */}
      {/* <ServicesOne serviceCount={3} /> */}
      <ServicesOneCarousel />
      <TestimonialOne className="testimonial-two" />
      {/* <TestimonialThree className="testimonial-two" /> */}
      {/* <BrandOne /> */}
      <WhyChooseOne />
      <VideoCarousel videos={videos} />
      <OurMissionTwo />
      <CounterOne />
      {/* <NewsOne className="news-two" /> */}
      <GoogleMap />
      <CtaOne className="cta-two" />
    </Layout>
  );
};

export default Home2;
