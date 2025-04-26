import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const SingleNewsOne = ({ blogData = {} }) => {
  const { image, title, date, excerpt, author, id } = blogData;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "Unknown Date";
console.log();

  // If no ID, don't make it clickable
  if (!id) {
    console.warn("Blog post without ID:", blogData);
  }

  return (
    <Link href={`/blog/${id}`} passHref>
      <div
  className="news-one__single"
  style={{
    cursor: id ? 'pointer' : 'default',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: `
      rgba(0, 0, 0, 0.10) 0px 20px 25px,
      rgba(0, 0, 0, 0.06) 0px -6px 15px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px,
      rgba(0, 0, 0, 0.08) 0px 6px 8px,
      rgba(0, 0, 0, 0.04) 0px -2px 3px,
      rgba(50, 50, 93, 0.10) 0px 20px 40px -15px,
      rgba(0, 0, 0, 0.10) 0px 15px 30px -15px,
      rgba(10, 37, 64, 0.15) 0px -2px 4px 0px inset
    `,
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
          {image ? (
            <Image
              src={image}
              alt={title || "Blog image"}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-image.jpg"; // Fallback image
              }}
            />
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span>No image available</span>
            </div>
          )}
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
            {title || "Untitled Blog"}
          </h3>
          <div
            className="news-one__sub-title"
            style={{
              marginBottom: '1rem',
              color: '#555',
              flexGrow: 1
            }}
          >
            <p>{excerpt || "No excerpt available"}</p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <i className="far fa-clock" style={{ marginRight: '8px', fontSize: '15px' }}></i>
              <span style={{ fontSize: "15px" }}>{formattedDate}</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="far fa-user" style={{ marginRight: '8px', fontSize: '15px' }}></i>
              <span style={{ fontSize: "15px" }}>{author || "Unknown Author"}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleNewsOne;