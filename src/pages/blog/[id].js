import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsSection/NewsDetailsPage";
import BlogPageHeader from "@/components/Reuseable/BlogPageHeader";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";
import { getBlog } from "src/api/webapi";

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  try {
    const response = await getBlog();
    
    // Validate API response structure
    if (!response?.data?.data || !Array.isArray(response.data.data)) {
      throw new Error("Invalid API response structure");
    }

    const allBlogs = response.data.data;
    const blogData = allBlogs.find(blog => blog.id === id);
    const relatedPosts = allBlogs.filter(blog => blog.id !== id).slice(0, 3);

    if (!blogData) return { notFound: true };

    return {
      props: {
        blogData: JSON.parse(JSON.stringify(blogData)), // Handle Date objects
        relatedPosts: JSON.parse(JSON.stringify(relatedPosts))
      }
    };
  } catch (error) {
    console.error("SSR Error:", error.message);
    return { 
      props: { 
        error: true,
        message: error.message 
      } 
    };
  }
}

const BlogDetails = ({ blogData, relatedPosts, error, message }) => {
  if (error) {
    return (
      <Layout pageTitle="Error" footerClassName="site-footer-three">
        <Header />
        <div className="text-center py-5">
          <h2>Error Loading Blog</h2>
          <p>{message || "Failed to load blog content"}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      pageTitle={blogData?.title || "Blog Details"} 
      footerClassName="site-footer-three"
    >
      <Header />
      <BlogPageHeader 
        title={blogData?.title || ""} 
        bgImage={bg_blog} 
      />
      <NewsDetailsPage 
        blogData={blogData} 
        relatedPosts={relatedPosts} 
      />
    </Layout>
  );
};

export default BlogDetails;
