import { welcomeTwo } from "@/data/welcomeSection";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";

const { image, tagline, title, text, } = welcomeTwo;

const WelcomeTwo = ({ id = "" }) => {
  const ref = useActive(id);

  // Custom style to replace the negative margin while maintaining visual interest
  const customLeftStyle = {
    position: "relative",
    paddingLeft: 0,
    marginLeft: "5%", // Small positive margin instead of large negative one
  };

  return (
    <section ref={ref} className="welcome-two" id={id}>
      <Container fluid>
        <Row>
          <Col xl={5} lg={5} md={12} sm={12}>
            <div className="welcome-two__left animated slideInLeft" style={customLeftStyle}>
              <div className="welcome-two__img">
                <Image src={image.src} alt="" fluid />
              </div>
            </div>
          </Col>
          <Col xl={7} lg={7} md={12} sm={12}>
            <div className="welcome-two__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="">{text}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeTwo;