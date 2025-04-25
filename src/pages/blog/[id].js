import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getBlog, getBlogById } from "src/api/webapi";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";
import BlogPageHeader from "@/components/Reuseable/BlogPageHeader";

export async function getServerSideProps(context) {
  const { id } = context.params;
 
  try {
    // Fetch the specific blog by ID first
    const blogResponse = await getBlogById(id);
    const blogData = blogResponse?.data?.data;
    
    // Fetch all blogs to pass to the page for related articles
    const blogsResponse = await getBlog();
    const blogs = blogsResponse?.data?.data || [];
   
    return {
      props: {
        initialBlogData: blogData || null,
        blogs: blogs || []
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
  const [loading, setLoading] = useState(!initialBlogData);
  const [relatedBlogs, setRelatedBlogs] = useState(blogs);

  useEffect(() => {
    // If we already have blog data from SSR, skip client-side fetching
    if (initialBlogData && id === initialBlogData.id) {
      return;
    }

    const fetchBlogData = async () => {
      if (!id) return;
      
      setLoading(true);
      
      try {
        // Use the specific endpoint to get blog by ID
        const response = await getBlogById(id);
        
        if (response?.data?.data) {
          setBlogData(response.data.data);
        } else {
          console.error("Blog not found");
          setBlogData(null);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setBlogData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id, initialBlogData]);

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
          <button 
            className="btn btn-primary mt-3" 
            onClick={() => router.push('/blog')}
          >
            Back to Blogs
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={blogData.title || "Blog Details"} footerClassName="site-footer-three">
      <Header />
      <BlogPageHeader title={blogData.title} bgImage={bg_blog} />
      <NewsDetailsPage blogData={blogData} allBlogs={relatedBlogs} />
    </Layout>
  );
};

export default BlogDetails;