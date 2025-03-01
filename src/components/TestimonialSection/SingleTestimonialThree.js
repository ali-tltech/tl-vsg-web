import React from "react";
import { Image } from "react-bootstrap";
import quote2 from "@/images/icon/testimonial-3-quote-icon.png";

const SingleTestimonialThree = ({ testimonial = {} }) => {
  const { text, position, author, rating  } = testimonial;

  const renderStars = (rating) => {
    const maxStars = 5;
    return [...Array(maxStars)].map((_, index) => (
      <span key={index} style={{ color: index < rating ? "#FFD700" : "#CCCCCC", fontSize: "18px" }}>
        {index < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div>
      <div className="testimonial-three__single" style={{ marginBottom: "20px" }}>
        <p className="testimonial-three__text">{text}</p>
        <div className="testimonial-three__client-info">
          <div className="testimonial-three__client-details">
            <h4 className="testimonial-three__client-name">{author}</h4>
            <p className="testimonial-three__client-title">{position}</p>
            <div className="testimonial-three__rating">{renderStars(rating)}</div>
          </div>
        </div>
        <div className="testimonial-three__quote-icon">
          <Image src={quote2.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialThree;
