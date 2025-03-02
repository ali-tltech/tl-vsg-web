import { useRouter } from "next/router";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTeamOne = ({ team = {} }) => {
  const router = useRouter();

  const { name, position, image, linkedin,id } = team;

    // Function to generate a URL-friendly slug
    const generateSlug = (name) => {
      return name.toLowerCase().replace(/\s+/g, "-");
    };
  
    const handleClick = () => {
      router.push(`/experts-details/${id}`);
    };

  return (
    <div className="team-one__single" style={{cursor:"pointer"}} onClick={handleClick}>
      <div className="team-one__img">
        <Image src={image} alt="" />
        <div className="team-one__content">
          <h3 className="team-one__name">{name}</h3>
          <p className="team-one__title">{position}</p>
        </div>
        <ul className="list-unstyled team-one__social">
            <li >
              <a href={linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleTeamOne;
