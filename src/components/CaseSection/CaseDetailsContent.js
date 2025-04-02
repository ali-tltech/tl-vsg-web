import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CaseDetailsLeft from "./CaseDetailsLeft";
import CaseSidebarSide from "./CaseSidebarSide.js";

const CaseDetailsContent = ({caseData})=>{  
  return (
    // <div className="case-details__content">
    //   <Row>
    //     <Col xl={8} lg={7}>
    //       <div className="case-details__content-left">
    //         <h3 className="case-details__content-title">{title}</h3>
    //         <p className="case-details__content-text-1">{description}</p>
    //         <p className="case-details__content-text-2">{text2}</p>
    //         <p className="case-details__content-text-3">{text3}</p>
    //       </div>
    //     </Col>
    //     <Col xl={4} lg={5}>
    //       <div className="case-details__content-right">
    //         <p className="case-details__content-text-4">{text4}</p>
    //         <ul className="list-unstyled case-details__content-points">
    //           {points.map((point, i) => (
    //             <li key={i}>
    //               <div className="icon">
    //                 <i className="fa fa-arrow-right"></i>
    //               </div>
    //               <div className="text">
    //                 <p>{point}</p>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
    <section className="news-details">
    <Container>
      <Row>
        <Col xl={12}  >
          <CaseDetailsLeft caseDatas={caseData} />
        </Col>
        {/* <Col xl={4} lg={5}>
           <CaseSidebarSide caseData={caseData} /> 
        </Col> */}
      </Row>
    </Container>
  </section>
  );
};

export default CaseDetailsContent;
