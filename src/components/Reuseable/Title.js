import React from "react";

/**
 * @param {{title?:string;tagline?:string;children?:React.ReactNode}&React.HTMLAttributes<HTMLDivElement>} props
 */

const Title = ({ title = "", title2= "", tagline = "", children, className, ...props }) => {
  return (
    <div className={`section-title ${className}`} {...props}>
      {tagline && <span className="section-title__tagline">{tagline}</span>}
      <h2 className="section-title__title">{title || children}</h2>
      <h2 className="section-title__title">{title2}</h2>
    </div>
  );
};

export default Title;
