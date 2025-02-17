import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TeamMemberDetails2 = ({ teamMember2 }) => {
  return (
    <Container style={{ marginTop: "60px", marginBottom:"40px"}}>
      <Row className="align-items-start">
        {/* Left Side - Image and Basic Info */}
        <Col md={4} className="text-center">
          <Image
            src={require(`@/images/team/${teamMember2.image}`).default.src}
            alt={teamMember2.name}
            className="img-fluid rounded mb-3"
          />
          <h3 style={{ fontSize: "30px", fontWeight: "600" }}>{teamMember2.name}</h3>
          <h5 className="text-muted">{teamMember2.title}</h5>
        </Col>

        {/* Right Side - Detailed Information */}
        <Col md={8}>
          <h2 className="section-team__title">
            Meet {teamMember2.name} – {teamMember2.title}
          </h2>
          <p className=" mt-2">{teamMember2.bio.intro}</p>

          {teamMember2.bio.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h4 className="section-team__title">{section.title}</h4>
              <p className="mt-2">{section.content}</p>
              {section.content2 && <p>{section.content2}</p>}

              {/* Mapping over model if it exists */}
             {/* Mapping over model if it exists */}
{section.model && (
  <ul className="list-disc ">
    {section.model.map((item, i) => (
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
        <div style={{width:"80%",background:"#ededf3",color:"#191825",padding:"5px",borderRadius:"8px"}}>{item}</div>
      </li>
    ))}
  </ul>
)}


              {/* Ensure content3 and content4 are displayed properly */}
              {section.content3 && <p>{section.content3}</p>}
              {section.content4 && <p>{section.content4}</p>}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TeamMemberDetails2;
