import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import { useRouter } from "next/router";

const SingleCaseOne = ({ cases = {}, smallImage = false }) => {
  const { subTitle, title, image, description, id } = cases;
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/case-details/${id}`);
  };
  
  return (
    <div className="case-one__card-wrapper">
      <div 
        onClick={handleClick} 
        className="case-one__single"
        style={{
          cursor: 'pointer',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          backgroundColor: '#fff',
          height: '100%',
          width: '100%', 
          maxWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <div 
          className="case-one__img"
          style={{
            height: '200px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Image
            src={image}
            alt={title || "Case study image"}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
          />
        </div>
        <div 
          className="case-one__content"
          style={{
            padding: '20px 15px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div>
            <h3 
              className="case-one__title"
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.4',
                marginBottom: '8px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minHeight: '3.5rem'
              }}
            >
              <Link href={`/case-details/${id}`}>
                <TextSplit text={title} />
              </Link>
            </h3>
            <p 
              className="case-one__tagline"
              style={{
                fontSize: '0.875rem',
                marginTop: '0',
                marginBottom: '2rem', // Added extra space to account for arrow
                color: '#666',
                fontWeight: '500',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap' // Ensure it stays on one line
              }}
            >
              {subTitle}
            </p>
          </div>
        </div>
        <div 
          className="case-one__arrow"
          style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: '50%',
            transition: 'background-color 0.3s ease'
          }}
        >
          <Link href={`/case-details/${id}`}>
            <span className="icon-right-arrow"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCaseOne;