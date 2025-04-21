import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faqs from "./Faqs";
import { handleFaqs } from "src/api/webapi";

const FAQsPage = () => {
  const [faqsData, setFaqsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      try {
        const response = await handleFaqs();

        if (Array.isArray(response?.data.data)) {
          setFaqsData(response.data.data);
        } else {
          console.error("Expected an array but got:", response.data.data);
          setFaqsData([]);
        }
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
        setFaqsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // If loading, show loading state
  if (loading) {
    return (
      <section className="faq-page">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <p>Loading FAQs...</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // If no FAQs are available after loading
  if (faqsData.length === 0) {
    return (
      <section className="faq-page">
        <Container>
          <Row>
            <Col className="text-center py-5">
              <p>No FAQs available</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // Split FAQs into two columns
  const midIndex = Math.ceil(faqsData.length / 2);
  const firstColumnFaqs = faqsData.slice(0, midIndex);
  const secondColumnFaqs = faqsData.slice(midIndex);

  return (
    <section className="faq-page">
      <Container>
        <Row>
          <Col md={6}>
            <div className="faq-page__single">
              <Faqs
                faqs={firstColumnFaqs.map((faq) => ({
                  id: faq.id,
                  title: faq.question,
                  text: faq.answer,
                }))}
                className="faq-one-accordion"
              />
            </div>
          </Col>

          <Col md={6}>
            <div className="faq-page__single">
              <Faqs
                faqs={secondColumnFaqs.map((faq) => ({
                  id: faq.id,
                  title: faq.question,
                  text: faq.answer,
                }))}
                className="faq-one-accordion"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQsPage;