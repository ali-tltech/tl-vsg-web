import { testimonialThree } from "@/data/testimonialSection";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonialThree from "./SingleTestimonialThree";
import { testimonials } from "src/api/api";


const TestimonialsPage = () => {
  const [testimonialsDetails,setTestimonialsDetails]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const testimonialsData = await testimonials();
        if (testimonialsData.data) {
          setTestimonialsDetails(testimonialsData.data.data)
  
          
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="testimonials-page">
      <Container>
          {testimonialsDetails.map((testimonial) => (
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
