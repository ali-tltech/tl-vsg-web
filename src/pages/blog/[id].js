import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getBlog, getBlogById } from "src/api/webapi";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";
import BlogPageHeader from "@/components/Reuseable/BlogPageHeader";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
 
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    // Only fetch when ID is available from router
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          // First, get the specific blog
          const blogResponse = await getBlogById(id);
          
          if (blogResponse?.data?.data) {
            setBlogData(blogResponse.data.data);
            
            // Then get all blogs for related articles
            const blogsResponse = await getBlog();
            if (blogsResponse?.data?.data) {
              // Filter out the current blog from the list of all blogs
              const filteredBlogs = blogsResponse.data.data.filter(
                blog => blog.id !== id
              );
              setRelatedBlogs(filteredBlogs);
            }
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
      
      fetchData();
    }
  }, [id]); // Only depend on ID from router

  // If loading or no ID yet, show a loader
  if (loading || !id) {
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