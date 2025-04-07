"use client";
import { newsOne } from "@/data/newsSection";
import useActive from "@/hooks/useActive";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleNewsOne from "./SingleNewsOne";
import { getBlog } from "src/api/webapi";

const NewsOne = ({
  className = "news-one",
  showShape = false,
  id = "",
  hideTitle = false,
  currentPage,
  setCurrentPage,
  children,
}) => {
  const ref = useActive(id);
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const blogsPerPage = 3;
  const { tagline, title } = newsOne;

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await getBlog();        
        if (response?.data?.data && Array.isArray(response.data.data)) {
          setBlogData(response.data.data);
        } else {
          console.warn("Blog data is not in expected format:", response);
          setBlogData([]);
        }
      } catch (error) {
        console.error("Failed to fetch Blog:", error);
        setBlogData([]);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchBlogs();
  }, []);

  // Calculate pagination values
  const totalPages = Math.max(1, Math.ceil(blogData.length / blogsPerPage));
  
  // Ensure currentPage stays within valid range
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [blogData, currentPage, setCurrentPage, totalPages]);
  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  
  // For paginated display (when hideTitle is true)
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  
  // For non-paginated display (when !hideTitle)
  const displayBlogs = hideTitle ? currentBlogs : blogData.slice(0, 3);

  // Clone children and pass props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type?.name === "BlogPagination") {
      return React.cloneElement(child, {
        currentPage,
        totalPages,
        onPageChange: setCurrentPage,
      });
    }
    return child;
  });

  return (
    <section ref={ref} className={className} id={id}>
      {showShape && (
        <>
          <div className="news-one-shape-1 shapemover2"></div>
          <div className="news-one-shape-2 float-bob-x-2"></div>
        </>
      )}
      <Container>
        {!hideTitle && (
          <Title title={title} tagline={tagline} className="text-center" />
        )}
        
        {isLoading ? (
          <div className="text-center py-5">Loading blogs...</div>
        ) : (
          <>
            <Row>
              {displayBlogs.length > 0 ? (
                displayBlogs.map((blog) => (
                  <Col
                    xl={4}
                    lg={hideTitle ? 6 : 4}
                    md={hideTitle ? 6 : 6}
                    sm={12}
                    key={blog.id}
                    className="animated fadeInUp mb-4"
                  >
                    <SingleNewsOne blogData={blog} />
                  </Col>
                ))
              ) : (
                <Col xs={12}>
                  <div className="text-center py-4">No blogs found</div>
                </Col>
              )}
            </Row>
            {blogData.length > 0 && hideTitle && childrenWithProps}
          </>
        )}
      </Container>
    </section>
  );
};

export default NewsOne;