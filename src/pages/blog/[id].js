import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getBlog, getBlogById } from "src/api/webapi";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  try {
    // Fetch all blogs to pass to the page
    const blogsResponse = await getBlog();
    const blogs = blogsResponse.data.data;
    
    // Find the specific blog by ID
    const blogData = blogs.find(blog => blog.id === id);
    
    return {
      props: {
        initialBlogData: blogData || null,
        blogs: blogs
      }
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      props: {
        initialBlogData: null,
        blogs: []
      }
    };
  }
}

const BlogDetails = ({ initialBlogData, blogs }) => {
  const router = useRouter();
  const { id } = router.query;
  
  const [blogData, setBlogData] = useState(initialBlogData);

  useEffect(() => {
    // If initialBlogData is not available (e.g., direct page load),
    // try to find the blog from the list of blogs
    if (!blogData && blogs && blogs.length > 0) {
      const foundBlog = blogs.find(blog => blog.id === id);
      if (foundBlog) {
        setBlogData(foundBlog);
      }
    }
  }, [id, blogs, blogData]);

  // If no blog data is found, you can show a loading or error state
  if (!blogData) {
    return (
      <Layout pageTitle="Blog Details" footerClassName="site-footer-three">
        <Header />
        <div>Blog not found</div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Blog Details" footerClassName="site-footer-three">
      <Header />
      <PageHeader title={blogData.title} bgImage={bg_blog} />
      <NewsDetailsPage blogData={blogData} />
    </Layout>
  );
};

export default BlogDetails;