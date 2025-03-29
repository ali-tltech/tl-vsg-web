import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";


const NewsDetailsLeft = ({ blogDatas = {} }) => {
  const {
    image,
    content, 
    title, 
    date, 
    excerpt,
    author
  } = blogDatas;

  // Format the date
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={image} alt={title} />
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
          <li>
            <Link href="#">
              <i className="far fa-user"></i> {author}
            </Link>
          </li>
        </ul>
        <h3 className="news-details__title">{title}</h3>
        <div 
          className="news-details__text-1" 
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default NewsDetailsLeft;