import { teamOne } from "@/data/teamSection";
import useActive from "@/hooks/useActive";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleTeamOne from "./SingleTeamOne";
import { getTeamDetails } from "src/api/webapi";

const { tagline, title, teams } = teamOne;

const TeamOne = ({ id = "" }) => { 
    const [teamData, setTeamData] = useState([]); 
  const ref = useActive(id);
    useEffect(() => {
      const fetchFaqs = async () => {
        try {
          const response = await getTeamDetails();
  
          if (Array.isArray(response?.data.team)) {            
            setTeamData(response.data.team);
          } else {
            console.error("Expected an array but got:", response.data.team);
            setTeamData([]);
          }
        } catch (error) {
          console.error("Failed to fetch Team:", error);
          setTeamData([]);
        }
      };
  
      fetchFaqs();
    }, []);

  return (
    <section ref={ref} className="team-one" id={id}>
      <div className="team-one__container">
        <Title title={title} tagline={tagline} className="text-center" />
        <Row className="justify-content-center">
          {teamData.map((team) => (
            <Col
              xl={3}
              lg={6}
              md={6}
              sm={8}
              xs={10}
              key={team.id}
              className="animated fadeInUp text-center mb-4"
            >
              <SingleTeamOne team={team} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamOne;