import { testimonialThree } from "@/data/testimonialSection";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonialThree from "./SingleTestimonialThree";
import { testimonials } from "src/api/api";

const TestimonialsPage = () => {
  const [testimonialsDetails, setTestimonialsDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const testimonialsData = await testimonials();
        if (testimonialsData.data && Array.isArray(testimonialsData.data.data)) {
          setTestimonialsDetails(testimonialsData.data.data);
        } else {
          // Handle case where response format is unexpected
          console.error("Expected array data but got:", testimonialsData.data);
          setTestimonialsDetails([]);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        setTestimonialsDetails([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Show loading state while data is being fetched
  if (loading) {
    return (
      <section className="testimonials-page">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <p>Loading testimonials...</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // Show "No testimonials available" when the array is empty
  if (!testimonialsDetails || testimonialsDetails.length === 0) {
    return (
      <section className="testimonials-page">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <p>No testimonials available</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // Render testimonials when available
  return (
    <section className="testimonials-page">
      <Container>
        {testimonialsDetails.map((testimonial) => (
          <Row key={testimonial.id || Math.random().toString(36).substr(2, 9)} md={12}>
            <Col>
              <SingleTestimonialThree testimonial={testimonial} />
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default TestimonialsPage;