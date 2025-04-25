import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";

const NewsDetailsLeft = ({ blogDatas = {} }) => {
  const safeData = {
    image: blogDatas.image || "/images/placeholder-blog.jpg",
    content: blogDatas.content || "",
    title: blogDatas.title || "Untitled Blog Post",
    date: blogDatas.date ? new Date(blogDatas.date) : new Date(),
    author: blogDatas.author || "Unknown Author"
  };

  const formattedDate = safeData.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image 
          src={safeData.image} 
          alt={safeData.title} 
          onError={(e) => {
            e.target.src = "/images/placeholder-blog.jpg";
          }}
        />
      </div>
      <div className="news-details__content">
        <ul className="list-unstyled news-details__meta">
          <li>
            <Link href="#">
              <i className="far fa-clock"></i> {formattedDate}
            </Link>
          </li>
          <li><span>/</span></li>
          <li>
            <Link href="#">
              <i className="far fa-user"></i> {safeData.author}
            </Link>
          </li>
        </ul>
        <h3 className="news-details__title">{safeData.title}</h3>
        <div 
          className="news-details__text-1" 
          dangerouslySetInnerHTML={{ 
            __html: safeData.content || "<p>Content not available</p>" 
          }}
        />
      </div>
    </div>
  );
};

export default NewsDetailsLeft;