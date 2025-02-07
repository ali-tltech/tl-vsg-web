// import React from 'react';
// import { Row, Col } from 'react-bootstrap';
// import CountUp from 'react-countup';

// const TeamMemberStats = ({ stats, isVisible }) => {
//   return (
//     <Row className="mt-5">
//       {stats.map((stat, index) => (
//         <Col sm={6} key={index} className="mb-4">
//           <div className={`stat-item slide-up-delay-3 ${isVisible ? 'visible' : ''}`}>
//             <div className="h2 fw-bold text-primary">
//               <CountUp
//                 start={0}
//                 end={stat.value}
//                 duration={2.5}
//                 suffix={stat.suffix}
//                 redraw={true}
//                 enableScrollSpy
//               >
//                 {({ countUpRef }) => (
//                   <span ref={countUpRef} />
//                 )}
//               </CountUp>
//             </div>
//             <p className="text-muted mb-0">{stat.label}</p>
//           </div>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default TeamMemberStats;