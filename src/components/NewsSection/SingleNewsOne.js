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

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'  // Ensures all children align to the left
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px'  // Space between the two rows
          }}>
            <i className="far fa-clock" style={{ marginRight: '8px',fontSize:'15px' }}></i>
            <span style={{fontSize:"15px" }}>{formattedDate}</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <i className="far fa-user" style={{ marginRight: '8px',fontSize:'15px'}}></i>
            <span style={{fontSize:"15px" }}>{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsOne;