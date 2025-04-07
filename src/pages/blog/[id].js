import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import PageHeader from "@/components/Reuseable/PageHeader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getBlog } from "src/api/webapi";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";
import BlogPageHeader from "@/components/Reuseable/BlogPageHeader";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateBlogData = async () => {
      setLoading(true);
      
      try {
        // First try to find the blog from the existing blogs array
        if (blogs && blogs.length > 0) {
          const foundBlog = blogs.find(blog => blog.id === id);
          if (foundBlog) {
            setBlogData(foundBlog);
            setLoading(false);
            return;
          }
        }
        
        // If not found in the existing array or we need fresh data,
        // fetch all blogs again to get the updated data
        const response = await getBlog();
        if (response?.data?.data) {
          const currentBlog = response.data.data.find(blog => blog.id === id);
          if (currentBlog) {
            setBlogData(currentBlog);
          } else {
            console.error(`Blog with ID ${id} not found`);
          }
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    // If the ID changes or is set after initial load, update the blog data
    if (id) {
      updateBlogData();
    }
  }, [id, blogs]);

  // If loading, show a loader
  if (loading) {
    return (
      <Layout pageTitle="Loading..." footerClassName="site-footer-three">
        <Header />
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Layout>
    );
  }

  // If no blog data is found, show a not found message
  if (!blogData) {
    return (
      <Layout pageTitle="Blog Not Found" footerClassName="site-footer-three">
      <Header />
      <div className="text-center py-5">
        <h2>Blog not found</h2>
        <p>The blog you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      </div>
    </Layout>
    );
  }

  return (
    <Layout pageTitle={blogData.title || "Blog Details"} footerClassName="site-footer-three">
      <Header />
      <BlogPageHeader title={blogData.title} bgImage={bg_blog} />
      <NewsDetailsPage blogData={blogData} allBlogs={blogs} />
    </Layout>
  );
};

export default BlogDetails;