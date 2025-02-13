import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
const TeamMemberDetails2 = ({teamMember2}) => {
  return (
    <div>
          <Container className="py-5">
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Img 
              src={teamMember2.image} 
              alt={teamMember2.name} 
              className="img-fluid rounded-top"
            />
            <Card.Body>
              <h1 className="h4 mb-0">{teamMember2.name}</h1>
              <p className="text-muted mb-3">{teamMember2.title}</p>
              <div className="d-flex gap-3">
                <a href={teamMember2.socialLinks.linkedin} className="text-decoration-none">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href={teamMember2.socialLinks.twitter} className="text-decoration-none">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href={teamMember2.socialLinks.email} className="text-decoration-none">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="h5 mb-4">Professional Profile</h2>
              <p className="lead">{teamMember2.bio.intro}</p>
              
              {teamMember2.bio.sections.map((section, index) => (
                <section key={index} className="mb-5">
                  <h3 className="h6 text-primary mb-3">{section.title}</h3>
                  <p>{section.content}</p>
                  {section.model && (
                    <ListGroup variant="flush">
                      {section.model.map((item, i) => (
                        <ListGroup.Item key={i} className="border-0 px-0">
                          {item}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </section>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="h6 text-primary mb-4">Key Leadership Experience</h4>
              <div className="d-flex flex-wrap gap-3">
                {teamMember2.experience.map((company, index) => (
                  <span key={index} className="badge bg-light text-dark p-3">
                    {company}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default TeamMemberDetails2