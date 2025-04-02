import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import BlogPagination from "@/components/NewsSection/BlogPagination";
import NewsOne from "@/components/NewsSection/NewsOne";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";
import React from "react";

const Blog = () => {
  return (
    <Layout pageTitle="Blog" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blog" title="Blog Posts" bgImage={bg_blog}/>
      <NewsOne key={currentPage} className="news-page" hideTitle>
        <BlogPagination />
      </NewsOne>
    </Layout>
  );
};

export default Blog;