import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faqs from "./Faqs";
import { handleFaqs } from "src/api/webapi";

const FAQsPage = () => {
  const [faqsData, setFaqsData] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
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
      }
    };

    fetchFaqs();
  }, []);

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
