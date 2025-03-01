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
import { getSEO } from "src/api/webapi";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [serviceDetails, setServiceDetails] = useState(null);

    const [seoData, setSeoData] = useState(null);
    useEffect(() => {
      const fetchSEO = async () => {
        try {
          // Update the API call to include the pageTitle parameter
          const response = await getSEO("services");
          console.log(response.data);
          if (response?.data) {
            // Store the SEO data
            setSeoData(response.data);
          } else {
            console.error("Unexpected response format:", response);
          }
        } catch (error) {
          console.error("Failed to fetch SEO data:", error);
        }
      };
  
      fetchSEO();
    }, []);
  
  
    const pageTitle = seoData?.title || "VS GenX Solutions | Popular Services - Empowering HR Solutions"
    const metaDescription = seoData?.description
    const metaKeywords = seoData?.keywords
    const ogImage = seoData?.ogImage
  
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
    <Layout
    pageTitle={pageTitle}
    metaDescription={metaDescription}
    metaKeywords={metaKeywords}
    ogImage={ogImage}
    twitterImage={ogImage}
    twitterTitle={pageTitle}
    twitterDescription={metaDescription}
  >  
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