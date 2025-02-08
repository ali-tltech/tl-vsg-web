import { welcomeTwo } from "@/data/welcomeSection";
import useActive from "@/hooks/useActive";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

const { image, mobileImage } = welcomeTwo;

const WelcomeTwo = ({ id = "" }) => {
  const ref = useActive(id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Tablet breakpoint
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={ref}
      className="welcome-two"
      id={id}
      style={{
        paddingTop: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isMobile ? (
        <Image
          src={mobileImage.src}
          alt="Mobile Timeline"
          style={{ width: "100%", height: "auto", padding: "30px" }}
        />
      ) : (
        <Image
          src={image.src}
          alt="Timeline"
          style={{ width: "1200px", height: "auto", padding: "60px" }}
        />
      )}
    </section>
  );
};

export default WelcomeTwo;
