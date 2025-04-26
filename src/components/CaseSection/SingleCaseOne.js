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
    <div className="case-one__card-wrapper" style={{ padding: '12px' }}>
  <div 
  onClick={handleClick} 
  className="case-one__single"
  style={{
    cursor: 'pointer',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: `
      rgba(0, 0, 0, 0.15) 0px 54px 55px,
      rgba(0, 0, 0, 0.08) 0px -12px 30px,
      rgba(0, 0, 0, 0.08) 0px 4px 6px,
      rgba(0, 0, 0, 0.12) 0px 12px 13px,
      rgba(0, 0, 0, 0.07) 0px -3px 5px,
      rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.2) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.25) 0px -2px 6px 0px inset
    `,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #eaeaea'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = `
      rgba(0, 0, 0, 0.2) 0px 64px 65px,
      rgba(0, 0, 0, 0.15) 0px -20px 40px,
      rgba(0, 0, 0, 0.15) 0px 6px 10px,
      rgba(0, 0, 0, 0.18) 0px 18px 20px,
      rgba(0, 0, 0, 0.1) 0px -5px 8px,
      rgba(50, 50, 93, 0.2) 0px 60px 120px -10px,
      rgba(0, 0, 0, 0.25) 0px 40px 80px -20px,
      rgba(10, 37, 64, 0.3) 0px -2px 8px 0px inset
    `;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = `
      rgba(0, 0, 0, 0.15) 0px 54px 55px,
      rgba(0, 0, 0, 0.08) 0px -12px 30px,
      rgba(0, 0, 0, 0.08) 0px 4px 6px,
      rgba(0, 0, 0, 0.12) 0px 12px 13px,
      rgba(0, 0, 0, 0.07) 0px -3px 5px,
      rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.2) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.25) 0px -2px 6px 0px inset
    `;
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
            zIndex: 2,
            backgroundColor: '#fff'
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
                marginBottom: '2rem', // Added extra space for arrow
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
            transition: 'all 0.3s ease',
            border: '1px solid #eaeaea'
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