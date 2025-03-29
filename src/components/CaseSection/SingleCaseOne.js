import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import { useRouter } from "next/router";

const SingleCaseOne = ({ cases = {}, smallImage = false }) => {
  const { subTitle, title, image, description,id } = cases;
  const router = useRouter(); // const newImage = smallImage && image2 ? image2 : image;
  const handleClick = () => {
    console.log(id);
    
    router.push(`/case-details/${id}`);
  };
  return (
    <div >
      <div onClick={handleClick} className="case-one__single">
        <div className="case-one__img">
          <Image
            src={image}
            alt=""
          />
        </div>
        <div className="case-one__content">
          <p className="case-one__tagline">{subTitle}</p>
          <h3 className="case-one__title">
            <Link href="">
              <TextSplit text={title} />
            </Link>
          </h3>
        </div>
        <div className="case-one__arrow">
          <Link href="">
            <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCaseOne;
