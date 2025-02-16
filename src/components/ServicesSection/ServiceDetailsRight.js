import React from "react";
import { Image } from "react-bootstrap";

const ServiceDetailsRight = ({ service = {} }) => {
  const { image, icon, title, text, text2, text3, contents } = service;

  return (
    <div className="service-details__right">
      <div className="service-details__img">
        <Image src={image.src} alt="Service image" />
      </div>
      <div className="service-details__content">
        <div className="service-details__title-box">
          <div className="service-details__title-icon">
            <span className={icon}></span>
          </div>
          <h3 className="service-details__title">{title}</h3>
        </div>
        <p className="service-details__text-1">{text}</p>
        {text2 && <p className="service-details__text-2">{text2}</p>}
      </div>
      <div className="mt-5">
      {contents.map((text, i) => (
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