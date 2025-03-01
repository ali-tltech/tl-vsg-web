
// ServicesOne.js - Fixed version
import { servicesOne } from "@/data/servicesSection";
import useActive from "@/hooks/useActive";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleServiceOne from "./SingleServiceOne";
import { service } from "src/api/api";

const { tagline, title } = servicesOne; // Remove services from this destructuring

const ServicesOne = ({ id = "", hideTitle = false, serviceCount }) => {
  const ref = useActive(id);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const serviceData = await service();
        if (serviceData.data) {
          const validatedData = serviceData.data.data.map(item => ({
            ...item,
            href: item.href || item.slug || item.url || "#" // Fallback to "#" if no valid URL exists
          }));
          setServiceDetails(validatedData);
        }
      } catch (error) {
        console.error(error);
        // Fallback to static data in case of error
        setServiceDetails(servicesOne.services);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section ref={ref} className="services-one" id={id}>
      <Container>
        {!hideTitle && (
          <Title title={title} tagline={tagline} className="text-center" />
        )}
        <Row>
          {isLoading ? (
            <Col className="text-center">
              <p>Loading services...</p>
            </Col>
          ) : (
            // Use serviceDetails instead of services
            serviceDetails.slice(0, serviceCount || serviceDetails.length).map((service) => (
              <Col
                xl={4}
                lg={4}
                md={hideTitle ? 6 : undefined}
                key={service.id || index}
                className="animated fadeInUp"
              >
                <SingleServiceOne service={service} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesOne;