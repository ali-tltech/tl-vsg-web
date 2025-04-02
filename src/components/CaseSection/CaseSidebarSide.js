import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { caseById } from "src/api/api";
import axiosInstance from "src/axios/AxiosInstance";

const SidebarSinglePost = ({ caseData }) => {
  const { image, createdAt, title, id } = caseData;
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    : "Unknown Date";

  return (
    <div className="sidebar__post-item position-relative">
      <div className="sidebar__post-image overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-100 post-image transition"
          style={{
            height: '250px',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="sidebar__post-content mt-3 px-3">
        <div className="sidebar__post-meta d-flex align-items-center mb-2">
          <span className="text-muted me-2">
            <i className="far fa-clock me-1"></i>
            {formattedDate}
          </span>
        </div>
        <h4 className="sidebar__post-title mb-2">
          <Link href={`/case-details/${id}`}>
            <a className="text-dark text-decoration-none">{title}</a>
          </Link>
        </h4>
        {/* <p className="sidebar__post-excerpt text-muted">
          {excerpt && excerpt.length > 100 
            ? `${excerpt.substring(0, 100)}...` 
            : excerpt}
        </p> */}
        <Link href={`/case-details/${id}`}>
          <a className="btn btn-link p-0 text-primary">
            Read More <i className="fa fa-arrow-right ms-2"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

const CaseSidebarSide = () => {
  const router = useRouter();
  const { id: currentCaseId } = router.query;  
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await getBlog();
  //       if (response?.data?.data) {
  //         // Filter out the current blog from the list
  //         const filteredPosts = response.data.data.filter(
  //           blog => blog.id !== currentCaseId
  //         );

  //         setPosts(filteredPosts);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching blogs:", error);
  //       // Optional: Add error handling toast or message
  //     }
  //   };

  //   // Only fetch if currentBlogId is available
  //   if (currentBlogId) {
  //     fetchBlogs();
  //   }
  // }, [currentBlogId]);
  const [cases, setCases] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get("/casestudy/get-all-casestudy")
        console.log(response.data.data);
        
        if (response?.data?.data) {
          // Filter out the current blog from the list
          const filteredCase = response.data.data.filter(
            cases => cases.id !== currentCaseId
          );

          setCases(filteredCase)
        }



      } catch (error) {
        console.error(error);

      }
    }
    fetchData()
  }, [currentCaseId])
  return (
    <div className="sidebar">
      {/* Search Section */}
      {/* <div className="sidebar__single sidebar__search mb-4">
        <form className="position-relative">
          <input 
            type="search" 
            placeholder="Search blogs" 
            className="form-control rounded-pill" 
            name="search" 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                // Implement search functionality
                // Example: router.push(`/search?query=${e.target.value}`)
              }
            }}
          />
          <button 
            type="submit" 
            className="btn position-absolute top-50 end-0 translate-middle-y"
            onClick={(e) => {
              e.preventDefault();
              // Implement search functionality
            }}
          >
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div> */}

      {/* Recent Posts Section */}
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title mb-4">Recent Cases</h3>

        {cases.length > 0 && (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            loop={true}
            className="sidebar-blog-swiper"
          >
            {cases.map((cases) => (
              <SwiperSlide key={cases.id}>
                <SidebarSinglePost caseData={cases} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* No posts placeholder */}
        {cases.length === 0 && (
          <div className="text-center text-muted py-4">
            No recent case available
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseSidebarSide;