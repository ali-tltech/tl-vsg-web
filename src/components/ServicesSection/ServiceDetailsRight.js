import React from "react";
import { Image, } from "react-bootstrap";


const ServiceDetailsRight = ({ service = {} }) => {
  const { image, icon, title, text, text2, text3, contents, } =
    service;

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
        <p className="service-details__text-2">{text2}</p>
      </div>
      <ul className="service-details__two-icons list-unstyled">
        {contents.map((text, i) => (
          <li key={i} className="service-details__two-icon-single">
            <div className="service-details__two-icon">
              <span className="icon-right-arrow"></span>
            </div>
            <p className="service-details__two-icon-content">{text}</p>
          </li>
        ))}
      </ul>
      <p className="service-details__text-3">{text3}</p>
    </div>
  );
};

export default ServiceDetailsRight;
