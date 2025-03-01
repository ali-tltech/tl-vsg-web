import { servicesOne } from "@/data/servicesSection";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleServiceOne from "./SingleServiceOne";
import useActive from "@/hooks/useActive";
import Title from "../Reuseable/Title";
import { service } from "src/api/api";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: "#service-carousel-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
};


const ServicesOneCarousel = ({id = "", hideTitle = false, serviceCount}) => {
  const ref = useActive(id);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const serviceData = await service();
        if (serviceData.data) {
          const validatedData = serviceData.data.data.map(item => ({
            ...item,
            href: item.href || item.slug || item.url || "#" // Fallback to "#" if no valid URL exists
          }));
          setServiceDetails(validatedData);
        }
      } catch (error) {
        console.error(error);
        // Fallback to static data in case of error
        setServiceDetails(servicesOne.services);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section ref={ref} className="services-one">
      <Container>
      {!hideTitle && (
          <Title title="Our Services" tagline="Our Services" className="text-center" />
        )}
        <Swiper {...options} className="thm-swiper__slider service-carousel">
          <div className="swiper-wrapper">
            {serviceDetails.map((service) => (
              <SwiperSlide key={service.id}>
                <SingleServiceOne service={service} />
              </SwiperSlide>
            ))}
          </div>
          <div
            className="swiper-pagination swiper-pagination-styled"
            id="service-carousel-pagination"
          ></div>
        </Swiper>
      </Container>
    </section>
  );
};

export default ServicesOneCarousel;
