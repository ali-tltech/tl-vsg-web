import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleCaseOne from "./SingleCaseOne";
import axiosInstance from "src/axios/AxiosInstance";

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
    el: "#case-carousel-pagination",
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

const CasesPageCarousel = () => {
  const [cases, setCases] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get("/casestudy/get-all-casestudy");
        setCases(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <section className="cases-page cases-page--carousel">
      <Container>
        <Swiper {...options} className="thm-swiper__slider case-carousel">
          <div className="swiper-wrapper">
            {cases.map((caseItem) => (
              <SwiperSlide key={caseItem.id}>
                <SingleCaseOne cases={caseItem} />
              </SwiperSlide>
            ))}
          </div>
          <div
            className="swiper-pagination swiper-pagination-styled"
            id="case-carousel-pagination"
          ></div>
        </Swiper>
      </Container>
    </section>
  );
};

export default CasesPageCarousel;