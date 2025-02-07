import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamMemberImage from './TeamMemberImage';
import { ExpersDetails } from "@/data/teamSection";
import TeamMemberContent from './TeamMemberContent';

const TeamMember = () => {
  const { name, role, description, stats, imagePath } = ExpersDetails;

  return (
    <Container className="team-member-container py-5">
      <Row className="align-items-center">
        <TeamMemberContent
          name={name}
          role={role}
          description={description}
          stats={stats}
        />
        <TeamMemberImage
          imagePath={imagePath}
          altText={name}
        />
      </Row>
    </Container>
  );
};

export default TeamMember;