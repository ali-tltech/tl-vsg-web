import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TeamMemberDetails1 = ({ member }) => {
    return (
      <Container className="team-details" style={{ marginTop: "60px", marginBottom:"40px"}}>
        <Row className="align-items-start">
          {/* Right Side: Image, Name, Position */}
          <Col md={4} className="text-center">
            <div>
              <Image src={require(`@/images/team/${member.image}`).default.src} 
              alt={member.name} 
              rounded fluid 
              className="mb-3" />
            </div>
            <h3 style={{ fontSize: "30px", fontWeight: "600" }}>{member.name}</h3>
            <h5 className="text-muted">{member.position}</h5>
          </Col>

          {/* Left Side: Content */}
          <Col md={8}>
            {member.content.map((section, index) => (
              <div key={index} className="mb-4">
                <h2 className="section-team__title">{section.heading}</h2>
                {Array.isArray(section.details) ? (
                  <ul className="mt-2">
                    {section.details.map((point, i) => (
                <li key={i} className="mb-2" style={{ display: "flex", alignItems: "start" }}>
                <div
                  style={{
                    background: "#434176",
                    borderRadius: "8px", // Use 8px for a square look, adjust as needed
                    marginRight: "10px",
                    height: "35px", // Fixed height
                    width: "35px", // Fixed width (same as height)
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="icon-right-arrow"
                    style={{
                      color: "white",
                      fontSize: "18px", // Uniform size
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></span>
                </div>
                <div style={{width:"80%",background:"#ededf3",color:"#191825",padding:"5px",borderRadius:"8px"}}>{point}</div>
              </li>
              
                
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
