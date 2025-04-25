// pages/blog/[id].js
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Error from "next/error";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import { getBlogById } from "src/api/webapi";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";

// Using getStaticPaths and getStaticProps instead of getServerSideProps
// This can help avoid server-side errors in production
export async function getStaticPaths() {
  return {
    paths: [], // Don't pre-render any paths at build time
    fallback: true // Generate pages on-demand
  };
}

export async function getStaticProps({ params }) {
  try {
    // Safely extract the ID
    const id = params?.id;
    
    if (!id) {
      return { 
        props: { 
          errorCode: 404,
          errorMessage: "Blog ID is required" 
        },
        revalidate: 60 // Revalidate this page after 60 seconds
      };
    }

    // Try to fetch the blog data
    const response = await getBlogById(id);
    
    // Check if we actually have data
    if (!response?.data?.data) {
      console.error("No blog data returned for ID:", id);
      return { 
        props: { 
          errorCode: 404,
          errorMessage: "Blog not found" 
        },
        revalidate: 60
      };
    }

    // Return the blog data as props
    return {
      props: {
        blog: response.data.data,
        errorCode: null,
        errorMessage: null
      },
      revalidate: 60 // Revalidate this page after 60 seconds
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error.message || String(error));
    
    // Return error props
    return {
      props: {
        blog: null,
        errorCode: 500,
        errorMessage: "Failed to load blog"
      },
      revalidate: 60
    };
  }
}

const BlogDetail = ({ blog, errorCode, errorMessage }) => {
  const router = useRouter();

  // Show loading state during SSG
  if (router.isFallback) {
    return (
      <Layout footerClassName="site-footer-three">
        <Header />
        <PageHeader page="Blog" title="Loading..." bgImage={bg_blog} />
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading blog content...</p>
        </div>
      </Layout>
    );
  }
  
  // Handle error cases
  if (errorCode) {
    return (
      <Layout footerClassName="site-footer-three">
        <Head>
          <title>Error | VS GenX Solutions</title>
        </Head>
        <Header />
        <PageHeader page="Blog" title="Blog Not Found" bgImage={bg_blog} />
        <div className="container py-5 text-center">
          <h2>{errorCode === 404 ? "Blog Not Found" : "Error Loading Blog"}</h2>
          <p className="mt-3">{errorMessage || "Please try again later."}</p>
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
  
  // Make sure blog exists
  if (!blog) {
    return (
      <Layout footerClassName="site-footer-three">
        <Header />
        <PageHeader page="Blog" title="Blog Not Found" bgImage={bg_blog} />
        <div className="container py-5 text-center">
          <p>The requested blog could not be found.</p>
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
    <Layout 
      pageTitle={`${blog.title || 'Blog Post'} | VS GenX Solutions`}
      metaDescription={blog.excerpt || blog.title}
      ogImage={blog.image}
      footerClassName="site-footer-three"
    >
      <Header />
      <PageHeader page="Blog" title={blog.title || 'Blog Post'} bgImage={bg_blog} />
      <section className="blog-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {blog.image && (
                <div className="blog-details__image mb-4">
                  <img 
                    src={blog.image} 
                    alt={blog.title || 'Blog image'} 
                    className="img-fluid" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder-image.jpg"; // Fallback image
                    }}
                  />
                </div>
              )}
              
              <div className="blog-details__meta d-flex mb-3">
                <div className="me-4">
                  <i className="far fa-calendar-alt me-2"></i>
                  {blog.date ? new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) : "No date available"}
                </div>
                {blog.author && (
                  <div>
                    <i className="far fa-user me-2"></i>
                    {blog.author}
                  </div>
                )}
              </div>
              
              <div className="blog-details__content">
                {blog.content ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  <p>No content available for this blog post.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;