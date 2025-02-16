import { workTogetherTwo } from "@/data/workTogether";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import Title from "../Reuseable/Title";

const WorkTogetherTwo = () => {
  return (
    <section className="work-together-two">
      <Container>
        <Row>
          {/* Left Section: Image */}
          <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image src={workTogetherTwo.image.src} alt="Our Story Image" />
              </div>
            </div>
          </Col>

          {/* Right Section: Content */}
          <Col xl={6} lg={6}>
            <div className="work-together-two__right">
              <Title
                title={workTogetherTwo.title}
                title2={workTogetherTwo.title2}
                tagline={workTogetherTwo.tagline}
                className="text-left"
              />

              {/* First Four Paragraphs */}
              <div className="work-together-two__intro">
                {workTogetherTwo.intro.slice(0,2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          
          </Col>
        </Row>
        <div className="work-together-two__intro" style={{marginTop: "20px"}}>
                {workTogetherTwo.intro.slice(2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
         <div className="work-together-two__milestones">
         <ul>
  {workTogetherTwo.milestones.map((milestone, index) => (
    <li key={index} style={{ display: "flex", alignItems: "start", marginBottom: "10px" }}>
      <div
        style={{
          background: "#434176",
          borderRadius: "8px",
          marginRight: "10px",
          height: "35px",
          width: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          className="icon-right-arrow"
          style={{
            color: "white",
            fontSize: "18px",
            width: "18px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></span>
      </div>
      <div style={{width:"80%",background:"#ededf3",color:"#191825",padding:"5px",borderRadius:"8px"}}>{milestone}</div>

      
    </li>
  ))}
</ul>

              </div>
        <div><p className="work-together-two__conclusion">
                {workTogetherTwo.conclusion}
              </p></div>
              <Link href="/contact" className="thm-btn work-together-two__btn" style={{marginTop: "30px"}}>
                CONTACT US
              </Link>
      </Container>
    </section>
  );
};

export default WorkTogetherTwo;
