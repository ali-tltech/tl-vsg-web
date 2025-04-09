"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsOne from "@/components/NewsSection/NewsOne";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";
import { getSEO } from "src/api/webapi";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    const fetchSEO = async () => {
      try {
        // Update the API call to include the pageTitle parameter
        const response = await getSEO("blogs");
        
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


  const pageTitle = seoData?.title || "VS GenX Solutions | Blogs"
  const metaDescription = seoData?.description
  const metaKeywords = seoData?.keywords
  const ogImage = seoData?.ogImage
  return (
    <Layout    pageTitle={pageTitle}
    metaDescription={metaDescription}
    metaKeywords={metaKeywords}
    ogImage={ogImage}
    twitterImage={ogImage}
    twitterTitle={pageTitle}
    twitterDescription={metaDescription} footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blogs" title="Blogs" bgImage={bg_blog} />
      <NewsOne
        className="news-page"
        hideTitle
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        id="blog-section"
      />
    </Layout>
  );
};

export default Blog;