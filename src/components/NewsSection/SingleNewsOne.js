// SingleNewsOne.js
import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import { useRouter } from "next/router";

const SingleNewsOne = ({ blogData = {} }) => {
  const router = useRouter();
  const { image, content, title, date, excerpt, author, id } = blogData;
  
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
    <div 
      className="news-one__single" 
      onClick={handleClick}
      style={{ 
        cursor: 'pointer', 
        borderRadius: '8px', 
        overflow: 'hidden', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff'
      }}
    >
      <div 
        className="news-one__img" 
        style={{ 
          height: '220px', 
          overflow: 'hidden'
        }}
      >
        <Image 
          src={image} 
          alt={title || "Blog image"}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div 
        className="news-one__content"
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        <h3 
          className="news-one__title"
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1rem',
            lineHeight: '1.4'
          }}
        >
          {title}
        </h3>
        <div 
          className="news-one__sub-title"
          style={{
            marginBottom: '1rem',
            color: '#555',
            flexGrow: 1
          }}
        >
          <p>{excerpt}</p>
        </div>
        <ul 
          className="list-unstyled news-one__meta"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            fontSize: '0.9rem',
            margin: '0.5rem 0 0 0',
            borderTop: '1px solid #eee',
            paddingTop: '1rem'
          }}
        >
          <li style={{ marginRight: '1rem' }}>
            <p style={{ margin: 0 }}>
              <i className="far fa-clock" style={{ marginRight: '0.5rem' }}></i> {formattedDate}
            </p>
          </li>
          <li style={{ marginRight: '1rem' }}>
            <span>/</span>
          </li>
          <li>
            <p style={{ margin: 0 }}>
              <i className="far fa-user" style={{ marginRight: '0.5rem' }}></i> {author}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleNewsOne;