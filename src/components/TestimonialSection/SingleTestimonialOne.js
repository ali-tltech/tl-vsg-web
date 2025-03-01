import React from "react";
import { Image } from "react-bootstrap";
import quote from "@/images/icon/quote-icon.png";

const SingleTestimonialOne = ({ testimonial = {} }) => {
  const {  text,position, author } = testimonial;

  return (
    <div>
      <div style={{ userSelect: "none", paddingTop:"20px"}} className="testimonial-one__single">
        <div className="testimonial-one__client-info">
          <div className="testimonial-one__client-img">
            {/* <Image
              src={require(`@/images/testimonial/${image}`).default.src}
              alt=""
            /> */}
            <div className="testimonial-one__quote">
              <Image src={quote.src} alt="" />
            </div>
          </div>
        </div>
        <div className="testimonial-one__content">
          <p className="testimonial-one__text">{text}</p>
          <h4 className="testimonial-one__client-name">{author}</h4>
          <p className="testimonial-one__client-title">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialOne;
