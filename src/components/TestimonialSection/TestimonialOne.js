import { testimonialOne } from "@/data/testimonialSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonialOne from "./SingleTestimonialOne";
import { testimonials } from "src/api/api";

const TinySlider = dynamic(() => import("../TinySlider/TinySlider"), {
  ssr: false,
});

const options = {
  container: ".my-slider-1",
  loop: true,
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
};

const TestimonialOne = ({ className = "", id = "" }) => {
  const ref = useActive(id, 170);
  const [testimonialsDetails, setTestimonialsDetails] = useState([]);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const sliderInstanceRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testimonialsData = await testimonials();
        if (testimonialsData.data) {
          console.log(testimonialsData.data.data);
          setTestimonialsDetails(testimonialsData.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Effect to handle slider initialization and updates
  useEffect(() => {
    // Only initialize or update slider when we have data
    if (testimonialsDetails.length > 0) {
      // Add a short delay to ensure DOM is fully updated
      const timer = setTimeout(() => {
        setIsSliderInitialized(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [testimonialsDetails]);

  // Effect to destroy and reinitialize slider when data changes
  useEffect(() => {
    // Cleanup function to destroy any existing slider instance
    return () => {
      if (sliderInstanceRef.current) {
        // If you have access to the slider instance and it has a destroy method
        // sliderInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <section ref={ref} className={`testimonial-one ${className}`} id={id}>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="testimonial-one__carousel">
              {testimonialsDetails.length > 0 && (
                <TinySlider 
                  options={options}
                  onInit={(slider) => {
                    sliderInstanceRef.current = slider;
                  }}
                >
                  {testimonialsDetails.map((testimonial) => (
                    <div key={testimonial.id} className="item">
                      <SingleTestimonialOne
                        testimonial={testimonial}
                      />
                    </div>
                  ))}
                </TinySlider>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;