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

  const { title, image, icon, shortDescription, id } = service;

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
    <div className="services-one__single" style={{ 
      height: "500px", 
      display: "flex", 
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}>
      {/* Image section with fixed height */}
      <div className="services-one__img" style={{ 
        height: "220px", 
        overflow: "hidden",
        flexShrink: 0
      }}>
        {image && (
          <Image 
            src={typeof image === 'string' ? image : ''} 
            alt={safeTitle}
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              objectPosition: "center" 
            }}
          />
        )}
      </div>
      
      {/* Content section with fixed layout */}
      <div className="services-one__content" style={{ 
        display: "flex", 
        flexDirection: "column",
        padding: "25px 20px 20px",
        flexGrow: 1,
        justifyContent: "space-between"
      }}>
        {/* Top content */}
        <div>
          <div className="services-one__title-box" style={{
            marginBottom: "15px"
          }}>
            <div className="services-one__title-icon">
              <span className={getIconClass()}></span>
            </div>
            <h3 className="services-one__title" style={{
              marginBottom: "0",
              fontSize: "22px",
              lineHeight: "1.3",
              fontWeight: "700"
            }}>
              <Link href={safeHref}>
                <TextSplit text={safeTitle} />
              </Link>
            </h3>
          </div>
          
          <p className="services-one__text" style={{ 
            margin: "0 0 15px",
            height: "80px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis"
          }}>
            {safeText}
          </p>
        </div>
        
        {/* Bottom action links with fixed position */}
        <div className="services-one__bottom" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
          paddingTop: "15px",
          borderTop: "1px solid #e9ebee"
        }}>
          <Link href={safeHref} className="services-one__read-more" style={{
            fontSize: "16px",
            fontWeight: "500"
          }}>
            Read More
          </Link>
          <Link href={safeHref} className="services-one__arrow" style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#f5f6f8"
          }}>
            <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceOne;