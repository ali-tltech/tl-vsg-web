import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TeamMemberDetails2 = ({ teamMember2 }) => {
  // Custom CSS class for the bio container
  const bioCssClass = `
    .team-member-bio p {
      margin-bottom: 0px;
    }
    .team-member-bio p:last-child {
      margin-bottom: 0;
    }
  `;

  return (
    <Container style={{ marginTop: "60px", marginBottom: "40px" }}>
      {/* Inject the custom CSS */}
      <style dangerouslySetInnerHTML={{ __html: bioCssClass }} />
      
      <Row className="align-items-start">
        {/* Left Side - Image and Basic Info */}
        <Col md={4} className="text-center">
          <Image
            src={teamMember2.image}
            alt={teamMember2.name}
            className="img-fluid rounded mb-3"
          />
          <h3 style={{ fontSize: "30px", fontWeight: "600" }}>{teamMember2.name}</h3>
          <h5 className="text-muted">{teamMember2.position}</h5>
          
          {/* Contact information */}
         
        </Col>
        
        {/* Right Side - Bio Content */}
        <Col md={8}>
          <div 
            className="team-member-bio" 
            dangerouslySetInnerHTML={{ __html: teamMember2.bio }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamMemberDetails2;