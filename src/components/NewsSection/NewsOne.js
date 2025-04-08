"use client";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleNewsOne from "./SingleNewsOne";
import { getBlog } from "src/api/webapi";
import useActive from "@/hooks/useActive";
import { newsOne } from "@/data/newsSection";

// Import the pagination styles at the component level or in your global CSS
// import "./pagination-styles.css";

const NewsOne = ({
  className = "news-one",
  showShape = false,
  id = "",
  hideTitle = false,
  currentPage = 1,
  setCurrentPage = () => {},
  children,
}) => {
  const ref = useActive(id);
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 3;
  const { tagline, title } = newsOne;

  // Fetch blog data
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
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
        setLoading(false);
      }
    };
  
    fetchBlogs();
  }, []);

  // Reset to page 1 when blog data changes
  useEffect(() => {
    if (blogData.length > 0 && setCurrentPage) {
      setCurrentPage(1);
    }
  }, [blogData, setCurrentPage]);
  
  // Calculate pagination values
  const totalPages = Math.max(1, Math.ceil(blogData.length / blogsPerPage));
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const indexOfLastBlog = safeCurrentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  
  // For paginated or non-paginated display
  const displayBlogs = hideTitle 
    ? blogData.slice(indexOfFirstBlog, indexOfLastBlog)
    : blogData.slice(0, 3);

  if (loading) {
    return (
      <section ref={ref} className={className} id={id}>
        <Container>
          {!hideTitle && (
            <Title title={title} tagline={tagline} className="text-center" />
          )}
          <div className="text-center py-5">Loading blogs...</div>
        </Container>
      </section>
    );
  }

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
            <Col className="text-center py-5">
              No blog posts available.
            </Col>
          )}
        </Row>

        {hideTitle && blogData.length > blogsPerPage && (
          <BlogPagination 
            currentPage={safeCurrentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage}
          />
        )}
        
        {!hideTitle && children}
      </Container>
    </section>
  );
};

// Pagination component included in the same file
const BlogPagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;
  
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && onPageChange) {
      onPageChange(pageNumber);
      
      // Scroll to top of blog section
      window.scrollTo({
        top: document.getElementById('blog-section')?.offsetTop - 100 || 0,
        behavior: 'smooth'
      });
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? "active" : ""}>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handlePageClick(i);
          }}>
            {i}
          </a>
        </li>
      );
    }
    
    return pageNumbers;
  };

  return (
    <div className="blog-pagination">
      <ul className="pagination-list">
        {/* Prev Button */}
        <li className={`pagination-arrow ${currentPage <= 1 ? 'disabled' : ''}`}>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) handlePageClick(currentPage - 1);
          }} aria-label="Previous">
            <span aria-hidden="true">Prev</span>
          </a>
        </li>
        
        {renderPageNumbers()}
        
        {/* Next Button */}
        <li className={`pagination-arrow ${currentPage >= totalPages ? 'disabled' : ''}`}>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) handlePageClick(currentPage + 1);
          }} aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NewsOne;
export { BlogPagination };