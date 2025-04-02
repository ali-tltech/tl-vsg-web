import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import NewsDetailsLeft from "./NewsDetailsLeft";
import NewsSidebarSide from "./NewsSidebarSide";
import { getBlog } from "src/api/webapi";

const NewsDetailsPage = () => {
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;
      
     
      try {
        const response = await getBlog();
        if (response?.data?.data) {
          // Find the blog post that matches the current ID
          const currentBlog = response.data.data.find(blog => blog.id === id);
          if (currentBlog) {
            setBlogData(currentBlog);
          } else {
            console.error(`Blog with ID ${id} not found`);
            // Handle not found case (redirect or show message)
          }
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  return (
    <section className="news-details">
      <Container>
         
          <Row>
            <Col xl={8} lg={7}>
              <NewsDetailsLeft blogDatas={blogData} />
            </Col>
            <Col xl={4} lg={5}>
              <NewsSidebarSide />
            </Col>
          </Row>
        
      </Container>
    </section>
  );
};

export default NewsDetailsPage;