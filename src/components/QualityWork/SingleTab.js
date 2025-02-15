import React from "react";
import { Image } from "react-bootstrap";

const SingleTab = ({ tab = {}, current = "solutions" }) => {
  const { id, image, title, text, points } = tab;

  return (
    <div
      className={`tab animated${current === id ? " active-tab fadeInUp" : ""}`}
      id={id}
    >
      <div className="tab-content__inner" >
        {/* <div className="tab-content__img">
          <Image src={image.src} alt="" />
        </div> */}
        <div className="" >
          <h4 className="tab-content__title">{title}</h4>
          {text && <p className="tab-content__text">{text}</p>}
          {points && (
           <ul className="tab-content__points" >
           {points.map((point, index) => (
             <li
               key={index}
               style={{
                 display: "flex",
                 alignItems: "start",
                 marginBottom: "10px",
               }}
             >
               <div
                 style={{
                   background: "#434176",
                   borderRadius: "8px",
                   width: "35px",
                   height: "35px",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   marginRight: "10px",
                   flexShrink: 0, // Prevents icon resizing
                 }}
               >
                 <span
                   className="icon-right-arrow"
                   style={{
                     color: "white",
                     fontSize: "18px",
                     width: "18px",
                     height: "18px",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                   }}
                 ></span>
               </div>
               <span dangerouslySetInnerHTML={{ __html: point }}></span>
             </li>
           ))}
         </ul>
         
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleTab;
