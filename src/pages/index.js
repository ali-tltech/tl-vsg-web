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
      title: "Theatre-Based Leadership: How Role-Play Creates Real Leaders",
      thumbnail: "https://i.ytimg.com/vi/Elo2H0zGR-U/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDT-wkBADZ04o0HL8FAC_FyIDOy6A",
      description: "Imagine a workplace where leadership isn’t about titles, but about action. Where a CEO and a security guard switch roles effortlessly—not in authority, but in collaboration. Welcome to the world of theatre-based leadership development!",
      youtubeUrl: "https://youtu.be/Elo2H0zGR-U?si=PqrSZDX7ZYrWNlS4",
      duration: "3:30",
      channelAvatar:"https://yt3.ggpht.com/zx0rqOn5Gp2lb-t4tZumdMNIrwPg6t8qlsKcA3bkjXhgVFhq-6RZ7ztIYWeFUfShRwiMdyubVgw=s48-c-k-c0x00ffffff-no-rj",
      channelName:"VS GenX Solutions",
    },
    {
      id: "2",
      title: "The Brutal Truth About Leadership: Problem is YOU, Not Them!",
      thumbnail: "https://i.ytimg.com/vi/uM7kq4Cm3CI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBfelMDnPDV6-MQNPo-0bC5AGvlQQ",
      description: "What if the biggest obstacle to your leadership success isn’t your team—but your own self-deception?",
      youtubeUrl: "https://youtu.be/uM7kq4Cm3CI?si=_kUMKf0YuKIx5h3H",
      duration: "1:02",
      channelAvatar:"https://yt3.ggpht.com/zx0rqOn5Gp2lb-t4tZumdMNIrwPg6t8qlsKcA3bkjXhgVFhq-6RZ7ztIYWeFUfShRwiMdyubVgw=s48-c-k-c0x00ffffff-no-rj",
      channelName:"VS GenX Solutions",
    },
    {
      id: "3",
      title: "What can a legendary racehorse teach us about leadership? More than you think! ",
      thumbnail: "https://i.ytimg.com/vi/muVRzBhPzYs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5BuyriFpmGXwwSQaIp665mMavqA",
      description: "Secretariat wasn’t just a racehorse—he was a phenomenon. His record-breaking Triple Crown victory wasn’t just about speed, but heart, strategy, and relentless drive. In this 3-minute video, we uncover the leadership lessons from Secretariat’s story—vision, resilience, and the courage to break limits. Whether you're leading a team or chasing personal goals, these insights will inspire you to run your own race!",
      youtubeUrl: "https://youtu.be/muVRzBhPzYs?si=Q9gAg67zarOd1StN",
      duration: "3:32",
      channelAvatar:"https://yt3.ggpht.com/zx0rqOn5Gp2lb-t4tZumdMNIrwPg6t8qlsKcA3bkjXhgVFhq-6RZ7ztIYWeFUfShRwiMdyubVgw=s48-c-k-c0x00ffffff-no-rj",
      channelName:"VS GenX Solutions",
    },
    // {
    //   id: "4",
    //   title: "Mastering TypeScript",
    //   thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60",
    //   description: "Take your TypeScript skills to the next level with advanced concepts",
    //   youtubeUrl: "https://youtube.com/watch?v=your-video-id-4",
    //   duration: "18:15",
    // },
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
