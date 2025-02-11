import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import ProgressWhyChose from "./ProgressWhyChose";
import { whyChooseOne } from "@/data/whyChoose";

import imageLarge from "@/images/resources/why-choose-1-8.png";
import imageSmall from "@/images/resources/why-choose-1-9.png";

const { tagline, title,title2, text, points } = whyChooseOne;

const WhyChooseOne = () => {
  const [currentImage, setCurrentImage] = useState(imageLarge);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 1440) {
        setCurrentImage(imageSmall);
      } else {
        setCurrentImage(imageLarge);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <section className="why-choose-one">
      <div className="why-choose-one-shape-1 float-bob-x-3"></div>
      <div className="why-choose-one-shape-2 float-bob-x-4"></div>
      <Container>
        <Row>
          <Col xl={5}>
            <div className="why-choose-one__left animated slideInLeft">
              <div className="why-choose-one__img">
                <Image src={currentImage.src} alt="Why Choose Us" />
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <div className="why-choose-one__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <Title title={title2}  className="text-left" />
              <p className="why-choose-one__text">{text}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#434176",
                        color: "white",
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    >
                      <i className="fa fa-check"></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          marginTop: "16px",
                          fontSize: "26px",
                          color: "#333",
                          fontWeight: 700,
                        }}
                      >
                        {point}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseOne;
