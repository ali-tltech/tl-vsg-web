import React from 'react';
import { Col } from 'react-bootstrap';
import useInView from '@/hooks/useInView';
// import TeamMemberStats from './TeamMemberStatus';

const TeamMemberContent = ({ name, role, description, stats }) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <Col 
      lg={6} 
      ref={ref} 
      className={`content-wrapper ${isVisible ? 'visible' : ''}`}
    >
      <div className="team-content">
        <h2 className={`fw-bold mb-4 slide-up ${isVisible ? 'visible' : ''}`}>{name}</h2>
        <h4 className={`text-primary mb-4 slide-up-delay-1 ${isVisible ? 'visible' : ''}`}>{role}</h4>
        <p className={`lead mb-4 slide-up-delay-2 ${isVisible ? 'visible' : ''}`}>{description}</p>
        
        {/* <TeamMemberStats stats={stats} isVisible={isVisible} /> */}
      </div>
    </Col>
  );
};

export default TeamMemberContent;