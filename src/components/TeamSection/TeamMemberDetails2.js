import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TeamMemberDetails2 = ({ teamMember2 }) => {
  return (
    <Container className="py-5">
      <Row className="align-items-start">
        {/* Left Side - Image and Basic Info */}
        <Col md={4} className="text-center">
          <Image
            src={require(`@/images/team/${teamMember2.image}`).default.src}
            alt={teamMember2.name}
            className="img-fluid rounded"
          />
          <h3 className="mt-3">{teamMember2.name}</h3>
          <p className="text-muted">{teamMember2.title}</p>
        </Col>

        {/* Right Side - Detailed Information */}
        <Col md={8}>
          <h2 className="fw-bold">
            Meet {teamMember2.name} – {teamMember2.title}
          </h2>
          <p className="lead">{teamMember2.bio.intro}</p>

          {teamMember2.bio.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h4 className="fw-bold">{section.title}</h4>
              <p>{section.content}</p>
              <p>{section.content2}</p>
              {section.model && (
                <ul className="list-unstyled">
                  {section.model.map((item, i) => (
                    <li key={i} className="mb-2">
                      <i className="bi bi-chevron-right text-primary me-2"></i>
                      {item}
                    </li>
                  ))}
                  <p>{section.content3}</p>
                </ul>

              )}
            </div>
          ))}
        </Col>
      </Row>

      {/* Key Leadership Experience */}
      {/* <Row className="mt-4">
        <Col md={12}>
          <h4 className="fw-bold">Key Leadership Experience</h4>
          <div className="d-flex flex-wrap gap-3">
            {teamMember2.experience.map((company, index) => (
              <span key={index} className="badge bg-light text-dark p-3">
                {company}
              </span>
            ))}
          </div>
        </Col>
      </Row> */}
    </Container>
  );
};

export default TeamMemberDetails2;
