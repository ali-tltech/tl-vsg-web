import { useRouter } from "next/router";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTeamOne = ({ team = {} }) => {
  const router = useRouter();

  const { name, title, image, socials } = team;

    // Function to generate a URL-friendly slug
    const generateSlug = (name) => {
      return name.toLowerCase().replace(/\s+/g, "-");
    };
  
    const handleClick = () => {
      const slug = generateSlug(name); // Convert name to slug format
      router.push(`/experts-details/${slug}`);
    };

  return (
    <div className="team-one__single" onClick={handleClick}>
      <div className="team-one__img">
        <Image src={require(`@/images/team/${image}`).default.src} alt="" />
        <div className="team-one__content">
          <h3 className="team-one__name">{name}</h3>
          <p className="team-one__title">{title}</p>
        </div>
        <ul className="list-unstyled team-one__social">
          {socials.map(({ id, href, icon }) => (
            <li key={id}>
              <a href={href} target="_blank" rel="noreferrer">
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleTeamOne;
