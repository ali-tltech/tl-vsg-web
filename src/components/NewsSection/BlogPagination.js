import React from "react";
import { Col, Row } from "react-bootstrap";

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Row>
      <Col lg={12}>
        <div className="blog-pagination">
          <a 
            className="prev page-numbers" 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          >
            <i className="fa fa-angle-left"></i>
          </a>
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return pageNumber === currentPage ? (
              <span key={pageNumber} className="page-numbers current">
                {pageNumber}
              </span>
            ) : (
              <a 
                key={pageNumber}
                className="page-numbers" 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(pageNumber);
                }}
              >
                {pageNumber}
              </a>
            );
          })}
          
          <a 
            className="next page-numbers" 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default BlogPagination;