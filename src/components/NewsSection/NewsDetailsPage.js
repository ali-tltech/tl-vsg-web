import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import NewsSidebarSide from "./NewsSidebarSide";

const NewsDetailsPage = ({ blogData, allBlogs }) => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <NewsDetailsLeft blogDatas={blogData} />
          </Col>
          <Col xl={4} lg={5}>
            <NewsSidebarSide relatedPosts={allBlogs} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;