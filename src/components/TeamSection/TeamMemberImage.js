import React from 'react';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import useInView from '@/hooks/useInView';

const TeamMemberImage = ({ imagePath, altText }) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <Col 
      lg={6} 
      ref={ref}
      className={`image-wrapper text-center ${isVisible ? 'visible' : ''}`}
    >
      <div className="image-container">
        <Image
          src={imagePath}
          alt={altText}
          width={497}
          height={617}
          priority
          className="team-image"
        />
      </div>
    </Col>
  );
};

export default TeamMemberImage;