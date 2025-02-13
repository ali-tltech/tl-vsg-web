import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


const TeamMemberDetails1 = ({ member }) => {
    return (
      <Container className="team-details" style={{ marginTop: "60px", marginBottom:"40px"}}>
        <Row className="align-items-start">
          {/* Right Side: Image, Name, Position */}
          <Col md={4} className="text-center ">
          <div className="">
  
            <Image src={require(`@/images/team/${member.image}`).default.src} alt={member.name} rounded fluid className="mb-3" />
          </div>
            <h3 style={{fontSize:"30px", fontWeight:"600"}}>{member.name}</h3>
            <h5 className="text-muted">{member.position}</h5>
          </Col>
  
          {/* Left Side: Content */}
          <Col md={8}>
            {member.content.map((section, index) => (
              <div key={index} className="mb-4 ">
                <h4 className="section-team__title">{section.heading}</h4>
                {Array.isArray(section.details) ? (
                  <ul className="mt-2">
                    {section.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2">{section.details}</p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  };
  export default TeamMemberDetails1;