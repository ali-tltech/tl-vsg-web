import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleServiceOne = ({ service = {} }) => {
  const [icons] = useState({
    hrFoundations: "icon-creative",
    talentEdge: "icon-business",
    leadershipHorizon: "icon-global",
    culturalTransformation: "icon-mobile-analytics",
    smartHR: "icon-analysis",
    employeeEngagement: "icon-creative-1",
  });

  const { title, image, icon , shortDescription,id } = service;

  const safeHref = id ? `/service-details/${id}` : "#";
  const safeTitle = title || "Service";
  const safeText = shortDescription || "Service description";
  
  const getIconClass = () => {
    if (icon && typeof icon === 'string') {
      return icon;
    }
    
    if (title && title.length > 0) {
      const cleanTitle = title.trim();
      const firstLetter = cleanTitle.charAt(0).toLowerCase();
      
      if (cleanTitle.toLowerCase().includes("employee engagement")) {
        return icons.employeeEngagement;
      }
      
      switch(firstLetter) {
        case 'h':
          return icons.hrFoundations;
        case 't':
          return icons.talentEdge;
        case 'l':
          return icons.leadershipHorizon;
        case 'c':
          return icons.culturalTransformation;
        case 's':
          return icons.smartHR;
        case 'e':
          return icons.employeeEngagement;
        default:
          return icons.smartHR;
      }
    }
    
    return icons.smartHR;
  };

  return (
    <div className="services-one__single">
      <div className="services-one__img">
        {image && (
          <Image 
            src={typeof image === 'string' ? image : ''} 
            alt={safeTitle}
          />
        )}
      </div>
      <div className="services-one__content">
        <div className="services-one__title-box">
          <div className="services-one__title-icon">
            <span className={getIconClass()}></span>
          </div>
          <h3 className="services-one__title">
            <Link href={safeHref}>
              <TextSplit text={safeTitle} />
            </Link>
          </h3>
        </div>
        <p className="services-one__text">{safeText}</p>
        <div className="services-one__bottom">
          <Link href={safeHref} className="services-one__read-more">
            Read More
          </Link>
          <Link href={safeHref} className="services-one__arrow">
            <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceOne;