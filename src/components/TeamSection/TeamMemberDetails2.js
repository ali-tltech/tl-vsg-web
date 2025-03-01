import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TeamMemberDetails2 = ({ teamMember2 }) => {
  // Function to parse HTML bio content into structured data with flexibility
  const parseBioContent = (htmlContent) => {
    if (!htmlContent) return { mainTitle: "", intro: "", sections: [] };
    
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    
    // Extract all headings and their content
    const allHeadings = tempDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let mainTitle = "";
    const sections = [];
    
    // Loop through all headings to structure the content
    allHeadings.forEach((heading, index) => {
      const headingText = heading.innerHTML;
      const headingTag = heading.tagName.toLowerCase();
      
      // First heading (regardless of tag) becomes the main title
      if (index === 0) {
        mainTitle = headingText;
        return;
      }
      
      // Find all content until the next heading
      let content = [];
      let listItems = [];
      let currentNode = heading.nextElementSibling;
      
      while (currentNode && 
             !["h1", "h2", "h3", "h4", "h5", "h6"].includes(currentNode.tagName.toLowerCase())) {
        if (currentNode.tagName === "P") {
          content.push(currentNode.innerHTML);
        } else if (currentNode.tagName === "UL") {
          const items = Array.from(currentNode.querySelectorAll("li")).map(li => li.innerHTML);
          listItems = [...listItems, ...items];
        }
        currentNode = currentNode.nextElementSibling;
        if (!currentNode) break;
      }
      
      sections.push({
        title: headingText,
        type: headingTag, // Store the heading type (h2, h3, h4, etc.)
        content: content.length > 0 ? content : [], // Store all paragraphs
        model: listItems.length > 0 ? listItems : null // Store all list items
      });
    });
    
    // Extract intro paragraph (first p after first heading or empty if none exists)
    const introElement = tempDiv.querySelector("h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p");
    const intro = introElement ? introElement.innerHTML : "";
    
    return {
      mainTitle,
      intro,
      sections
    };
  };
  
  // Parse bio HTML content
  const formattedBio = parseBioContent(teamMember2.bio);

  return (
    <Container style={{ marginTop: "60px", marginBottom: "40px" }}>
      <Row className="align-items-start">
        {/* Left Side - Image and Basic Info */}
        <Col md={4} className="text-center">
          <Image
            src={teamMember2.image}
            alt={teamMember2.name}
            className="img-fluid rounded mb-3"
          />
          <h3 style={{ fontSize: "30px", fontWeight: "600" }}>{teamMember2.name}</h3>
          <h5 className="text-muted">{teamMember2.position}</h5>
        </Col>
        
        {/* Right Side - Detailed Information */}
        <Col md={8}>
          <h2 className="section-team__title" dangerouslySetInnerHTML={{ __html: formattedBio.mainTitle }}></h2>
          <p className="mt-2" dangerouslySetInnerHTML={{ __html: formattedBio.intro }}></p>
          
          {formattedBio.sections.map((section, index) => (
            <div key={index} className="mb-4">
              {/* Render section headings based on their original level */}
              {section.type === 'h2' && <h2 className="section-team__title" dangerouslySetInnerHTML={{ __html: section.title }}></h2>}
              {section.type === 'h3' && <h3 className="section-team__title" dangerouslySetInnerHTML={{ __html: section.title }}></h3>}
              {section.type === 'h4' && <h4 className="section-team__title" dangerouslySetInnerHTML={{ __html: section.title }}></h4>}
              {section.type === 'h5' && <h5 className="section-team__title" dangerouslySetInnerHTML={{ __html: section.title }}></h5>}
              {section.type === 'h6' && <h6 className="section-team__title" dangerouslySetInnerHTML={{ __html: section.title }}></h6>}
              
              {/* Render all paragraphs */}
              {section.content && section.content.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "mt-2" : ""} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              ))}
              
              {/* Mapping over model if it exists */}
              {section.model && (
                <ul className="list-disc">
                  {section.model.map((item, i) => (
                    <li key={i} className="mb-2" style={{ display: "flex", alignItems: "start" }}>
                      <div
                        style={{
                          background: "#434176",
                          borderRadius: "8px",
                          marginRight: "10px",
                          height: "35px",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
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
                      <div style={{ width: "80%", background: "#ededf3", color: "#191825", padding: "5px", borderRadius: "8px" }} dangerouslySetInnerHTML={{ __html: item }}></div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TeamMemberDetails2;