import { testimonialThree } from "@/data/testimonialSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonialThree from "./SingleTestimonialThree";

const { testimonials } = testimonialThree;

const TestimonialsPage = () => {
  return (
    <section className="testimonials-page">
      <Container>
          {testimonials.map((testimonial) => (
        <Row key={testimonial.id} md={12}>
            <Col  >
              <SingleTestimonialThree testimonial={testimonial} />
            </Col>
        </Row>
          ))}
      </Container>
    </section>
  );
};

export default TestimonialsPage;
