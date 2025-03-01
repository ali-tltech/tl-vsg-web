import CtaOne from "@/components/CtaSection/CtaOne";
import CtaService from "@/components/CtaSection/CtaService";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { HrFoundation } from "@/data/servicesSection";
import bg_service from "@/images/backgrounds/service-banner-image.jpg";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { singleService } from "src/api/api";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [serviceDetails, setServiceDetails] = useState(null);
  
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const serviceData = await singleService(id);
          if (serviceData.data && serviceData.data.data) {
            // Process the data before setting state
            const processedData = {
              ...serviceData.data.data,
              // Ensure points is an array of strings, not objects
              points: serviceData.data.data.servicePoints.map(point => point.text)
            };
            setServiceDetails(processedData);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [id]);
  
  
  // Show loading state while data is being fetched
  if (!serviceDetails) {
    return (
      <Layout pageTitle="Loading...">
        <Header />
        <div className="container py-20 text-center">
          <p>Loading service details...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={serviceDetails.title || "Service Details"}>
      <Header />
      <PageHeader
        page="Service Details"
        title={serviceDetails.title}
        parent="Services"
        parentHref="/services"
        bgImage={bg_service}
      />
      <ServiceDetails service={serviceDetails} />
      <CtaService />
      {/* <CtaOne /> */}
    </Layout>
  );
};

export default ServiceDetailsPage;