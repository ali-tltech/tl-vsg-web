import React from "react";
import { Col, Row } from "react-bootstrap";

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Row>
      <Col lg={12}>
        <div className="blog-pagination">
          <button
            className="prev page-numbers"
            onClick={() => {
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          >
            <i className="fa fa-angle-left"></i>
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                className={`page-numbers ${pageNumber === currentPage ? "current" : ""}`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            className="next page-numbers"
            onClick={() => {
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </Col>
    </Row>
  );
};


export default BlogPagination;