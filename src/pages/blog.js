import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import BlogPagination from "@/components/NewsSection/BlogPagination";
import NewsOne from "@/components/NewsSection/NewsOne";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Layout pageTitle="Blogs" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blogs" title="Blogs" bgImage={bg_blog} />
      <NewsOne
        className="news-page"
        hideTitle
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        <BlogPagination />
      </NewsOne>
    </Layout>
  );
};

export default Blog;
