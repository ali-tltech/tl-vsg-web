import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleCaseOne from "./SingleCaseOne";
import axiosInstance from "src/axios/AxiosInstance";

SwiperCore.use([Autoplay, Pagination]);

const CasesPageCarousel = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/casestudy/get-all-casestudy");
        setCases(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  
  // Determine swiper options based on number of cases
  const getSwiperOptions = () => {
    // If we have 3 or fewer cases, disable loop and autoplay
    if (cases.length <= 3) {
      return {
        slidesPerView: cases.length || 1,
        slidesPerGroup: 1,
        spaceBetween: cases.length > 1 ? 30 : 0,
        loop: false,
        autoplay: false,
        pagination: {
          el: "#case-carousel-pagination",
          type: "bullets",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: cases.length > 1 ? {
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: Math.min(2, cases.length),
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: Math.min(3, cases.length),
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
        } : {}
      };
    }
    
    // Default options for 4+ cases
    return {
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
  };
  
  if (loading) {
    return (
      <section className="cases-page cases-page--carousel">
        <Container>
          <div className="text-center py-5">Loading case studies...</div>
        </Container>
      </section>
    );
  }
  
  if (cases.length === 0) {
    return (
      <section className="cases-page cases-page--carousel">
        <Container>
          <div className="text-center py-5">No case studies available</div>
        </Container>
      </section>
    );
  }
  
  return (
    <section className="cases-page cases-page--carousel">
      <Container>
        <Swiper {...getSwiperOptions()} className="thm-swiper__slider case-carousel">
          <div className="swiper-wrapper">
            {cases.map((caseItem) => (
              <SwiperSlide key={caseItem.id}>
                <SingleCaseOne cases={caseItem} />
              </SwiperSlide>
            ))}
          </div>
          {cases.length > 1 && (
            <div
              className="swiper-pagination swiper-pagination-styled"
              id="case-carousel-pagination"
            ></div>
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default CasesPageCarousel;