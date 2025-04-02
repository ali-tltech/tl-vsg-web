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
  const blogsPerPage = 3;
  const { tagline, title } = newsOne;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlog();
        console.log("API Response in Vercel:", response);
        
        if (Array.isArray(response?.data?.data)) {
          setBlogData(response.data.data);
        } else {
          console.error("Expected an array but got:", response.data.data);
          setBlogData([]);
        }
      } catch (error) {
        console.error("Failed to fetch Blog:", error);
        setBlogData([]);
      }
    };
  
    fetchBlogs();
  }, []);
  useEffect(() => {
    if (blogData.length > 0) {
      setCurrentPage(1);
    }
  }, [blogData]);
  
  // Calculate pagination values
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // For non-paginated display (when !hideTitle)
  const displayBlogs = hideTitle ? currentBlogs : blogData.slice(0, 3);

  // Clone children and pass props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type.name === "BlogPagination") {
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
        
        <Row>
          {displayBlogs.map((blog) => (
            <Col
              xl={4}
              lg={hideTitle ? 6 : 4}
              md={hideTitle ? 6 : undefined}
              key={blog.id}
              className="animated fadeInUp"
            >
              <SingleNewsOne blogData={blog} />
            </Col>
          ))}
        </Row>
        {childrenWithProps}
      </Container>
    </section>
  );
};

export default NewsOne;