import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import { useRouter } from "next/router";

const SingleNewsOne = ({ blogData = {} }) => {
    const router = useRouter();
  
  const { image, content, title, date, excerpt,author,id } = blogData;

  const formattedDate = date
  ? new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  : "Unknown Date";

  const handleClick = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="news-one__single" onClick={handleClick}>
      <div className="news-one__img">
        <Image src={image} alt="" />
      </div>
      <div className="news-one__content">
        <h3 className="news-one__title">{title}</h3>
        <p className="news-one__sub-title">
          <p>{excerpt}</p>
        </p>
        <ul className="list-unstyled news-one__meta" style={{fontSize:"1rem"}}>
          <li>
            <p >
              <i className="far fa-clock"></i> {formattedDate}
            </p>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <p>
            <i className="far fa-user " ></i> Author: {author} 
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleNewsOne;
