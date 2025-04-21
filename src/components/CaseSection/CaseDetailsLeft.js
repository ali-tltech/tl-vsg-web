import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";


const CaseDetailsLeft = ({ caseDatas = {} }) => {
  const {
    image,
    description, 
    title, 
    createdAt, 
    
  } = caseDatas;

  // Format the date
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <div className="news-details__left">
      <div className="news-details_carousal__img">
        <Image  className="" src={image} alt={title} />
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-details__meta">
          <li>
            <Link href="#">
              <i className="far fa-clock"></i> {formattedDate}
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
        </ul>
        <h3 className="news-details__title">{title}</h3>
        <div 
          className="news-details__text-1" 
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default CaseDetailsLeft;