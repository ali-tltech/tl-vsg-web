import { whyChooseOne } from "@/data/whyChoose";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import ProgressWhyChose from "./ProgressWhyChose";

const { image, tagline, title, text, points, progresses } = whyChooseOne;

const WhyChooseOne = () => {
  return (
    <section className="why-choose-one">
      <div className="why-choose-one-shape-1 float-bob-x-3"></div>
      <div className="why-choose-one-shape-2 float-bob-x-4"></div>
      <Container>
        <Row>
          <Col xl={5}>
            <div className="why-choose-one__left animated slideInLeft">
              <div className="why-choose-one__img">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <div className="why-choose-one__right">
              <Title title={title} tagline={tagline} className="text-left" />
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
        <p style={{ marginTop: "16px", fontSize: "26px", color: "#333"  ,fontWeight:700}}>{point}</p>
      </div>
    </li>
  ))}
</ul>

              {/* <div className="why-choose-one__progress">
                {progresses.map((progress) => (
                  <ProgressWhyChose key={progress.id} progress={progress} />
                ))}
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseOne;
