import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TeamDetails = ({ member }) => {
  return (
    <Container className="team-details mt-5">
      <Row className="align-items-center">
        {/* Right Side: Image, Name, Position */}
        <Col md={4} className="text-center">
          <Image src={member.image} alt={member.name} roundedCircle fluid className="mb-3" />
          <h3>{member.name}</h3>
          <h5 className="text-muted">{member.position}</h5>
        </Col>

        {/* Left Side: Content */}
        <Col md={8}>
          {member.content.map((section, index) => (
            <div key={index} className="mb-4">
              <h4>{section.heading}</h4>
              {Array.isArray(section.details) ? (
                <ul>
                  {section.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.details}</p>
              )}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const teamMember = {
  name: "Venkatesan Srinivasan",
  position: "Founder, VS GenX Solutions",
  image: "team-1-2.jpg",
  content: [
    {
      heading: "Meet Venkatesan Srinivasan – The Driving Force Behind VS GenX Solutions",
      details: "With two decades of hands-on experience in HR leadership, Venkatesan Srinivasan (Venkat) has played a pivotal role in shaping talent strategies for global organizations across technology, product development, telecom, GCC's, Edutech and fintech industries. He has held key HR leadership positions at GSS Infotech, B/E Aerospace, Unimoni GBS, and KNOT Solutions, where he led transformative people initiatives that enhanced organizational agility and workforce effectiveness."
    },
    {
      heading: "Strategic HR Leadership",
      details: [
        "Founder of VS GenX Solutions, bringing strategic yet human-centered HR consulting.",
        "Partners with organizations to create high-impact HR solutions tailored for evolving business landscapes.",
        "Expert in incubating HR functions, optimizing talent management, and designing leadership programs."
      ]
    },
    {
      heading: "Consulting Experience",
      details: [
        "Worked with organizations such as Allahabad Bank, Sapient, GMR Group, Kinematic Services, BlueCap Gaming.",
        "Strengthened HR frameworks, leadership capabilities, and cultural transformation efforts."
      ]
    },
    {
      heading: "Beyond Consulting",
      details: "Venkat is a passionate advocate for continuous learning and leadership excellence. Having designed and delivered over 100,000+ manhours of behavioral and Leadership training programs, he firmly believes that people are the true differentiators of any business. His expertise in theatre-based learning, gamification, and simulated case studies has helped organizations redefine the way they nurture talent."
    },
    {
      heading: "Commitment to Growth",
      details: "At VS GenX Solutions, Venkat is committed to helping startups and mid-sized companies unlock their full potential—bridging the gap between strategy and execution with pragmatic, results-driven HR solutions."
    }
  ]
};

export default function TeamMemberPage() {
  return <TeamDetails member={teamMember} />;
}
