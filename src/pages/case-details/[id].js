import { caseDetailsPage } from "@/data/caseSection";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CaseDetailsContent from "../../components/CaseSection/CaseDetailsContent";
import CaseDetailsImg from "../../components/CaseSection/CaseDetailsImg";
import CaseDetailsPagination from "../../components/CaseSection/CaseDetailsPagination";
import { useRouter } from "next/router";
import { caseById } from "src/api/api";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import PageHeader from "@/components/Reuseable/PageHeader";
import bg_blog from "@/images/backgrounds/blog-banner-image.jpg";


const { image, clientName, category, date, ...content } = caseDetailsPage;

const CaseDetailsPage = () => {
   const router = useRouter();
      const { id } = router.query;
      const [caseData,setCaseData]=useState([])
      useEffect(() => {
        if (id) {
          const fetchData = async () => {
            try {
              const caseData = await caseById(id);
              
              setCaseData(caseData.data.data)
          
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
        }
      }, [id]);
  return (
          <Layout pageTitle="Case Details" footerClassName="site-footer-three">
      {/* <Container>
        <Row>
          <Col xl={12}>
            <CaseDetailsImg
              image={caseData.image}
              clientName={clientName}
              category={category}
              date={date}
              />
            <CaseDetailsContent {...caseData} />
           
          </Col>
        </Row>
      </Container> */}
      <Header />
      <PageHeader title={caseData.title} bgImage={bg_blog} />
      <CaseDetailsContent caseData={caseData} />
      </Layout>

  );
};

export default CaseDetailsPage;
