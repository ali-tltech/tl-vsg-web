import React, { useState } from "react";
import { Image } from "react-bootstrap";

const ServiceDetailsRight = ({ service = {} }) => {
  const {
    title = "",
    shortDescription = "",
    tagline = "",
    image = "",
    taglineDescription = "",
    servicePoints = [],
    points = []
  } = service || {};
    const [icons] = useState({
      hrFoundations: "icon-creative",
      talentEdge: "icon-business",
      leadershipHorizon: "icon-global",
      culturalTransformation: "icon-mobile-analytics",
      smartHR: "icon-analysis",
      employeeEngagement: "icon-creative-1",
    });
    const getIconClass = () => {
      // if (icon && typeof icon === 'string') {
      //   return icon;
      // }
      
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

  // Determine which points array to use and ensure we're working with strings
  const displayPoints = points.length > 0 
    ? (typeof points[0] === 'string' ? points : points.map(point => point.text || ""))
    : servicePoints.map(point => point.text || "");
  return (
    <div className="service-details__right">
      <div className="service-details__img">
{      image &&  <Image src={image} alt="Service image" />
}      </div>
      <div className="service-details__content">
        <div className="service-details__title-box">
          <div className="service-details__title-icon">
            <span className={getIconClass()}></span>
          </div>
          <h3 className="service-details__title">{title}</h3>
        </div>
        {tagline && <p className="service-details__text-1">{tagline}</p>}
        {taglineDescription && <p className="service-details__text-2">{taglineDescription}</p>}
      </div>
      <div className="mt-5">
      {points && points.map((text, i) => (
  <div key={i} style={{ display: "flex", alignItems: "start", marginBottom: "10px" }}>
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
    <p style={{width:"90%",background:"#ededf3",color:"#191825",padding:"5px",borderRadius:"8px"}}>{text}</p>
  </div>
))}

      </div>
    </div>
  );
};

export default ServiceDetailsRight;