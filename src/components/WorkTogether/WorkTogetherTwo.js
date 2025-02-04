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
                {workTogetherTwo.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Milestones List */}
              <div className="work-together-two__milestones">
                <ul>
                  {workTogetherTwo.milestones.map((milestone, index) => (
                    <li key={index}>{milestone}</li>
                  ))}
                </ul>
              </div>

              {/* Final Paragraph */}
              <p className="work-together-two__conclusion">
                {workTogetherTwo.conclusion}
              </p>

              {/* CTA Button */}
              <Link href="/contact" className="thm-btn work-together-two__btn">
                CONTACT US
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkTogetherTwo;
