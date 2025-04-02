import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reuseable/PageHeader';
import YouTubeGallery from '../components/youtube/youtubeGallery';
// Import the CSS
// import '../styles/youtube-gallery.css';

const VideosPage = () => {
  // Sample video data
  const videoData = [
    {
      title: "Introduction to Our Services",
      description: "Learn more about what we offer and how we can help you achieve your goals.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Customer Success Stories",
      description: "See how our customers have benefited from our products and services.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Product Demo",
      description: "A detailed walkthrough of our flagship product and its features.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Expert Interview Series",
      description: "Industry experts share insights on current trends and future developments.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "How-To Tutorial",
      description: "Step-by-step guide to getting the most out of our platform.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Company Events Highlights",
      description: "See highlights from our recent conferences and community events.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Our Videos | VSG HR Solutions</title>
        <meta name="description" content="Watch our collection of videos about our services, products, and more." />
      </Head>
      
      <PageHeader title="Video Gallery" />
      
      <YouTubeGallery 
        videos={videoData} 
        title="Featured Videos" 
        tagline="Watch & Learn" 
      />
    </Layout>
  );
};

export default VideosPage;