import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SidebarSinglePost = ({ post }) => {
  const safePost = {
    image: post.image || "/images/placeholder-blog.jpg",
    date: post.date ? new Date(post.date) : new Date(),
    title: post.title || "Untitled Post",
    id: post.id || "#",
    excerpt: post.excerpt || "No excerpt available"
  };

  const formattedDate = safePost.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="sidebar__post-item position-relative">
      <div className="sidebar__post-image overflow-hidden">
        <Image
          src={safePost.image}
          alt={safePost.title}
          className="w-100 post-image transition"
          style={{ height: '250px', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = "/images/placeholder-blog.jpg";
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
          <Link href={`/blog/${safePost.id}`}>
            <a className="text-dark text-decoration-none">{safePost.title}</a>
          </Link>
        </h4>
        <p className="sidebar__post-excerpt text-muted">
          {safePost.excerpt.length > 100
            ? `${safePost.excerpt.substring(0, 100)}...`
            : safePost.excerpt}
        </p>
        <Link href={`/blog/${safePost.id}`}>
          <a className="btn btn-link p-0 text-black text-decoration-none text-uppercase">
            Read More <i className="fa fa-arrow-right ms-2"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

const NewsSidebarSide = ({ relatedPosts = [] }) => {
  return (
    <div className="sidebar">
      <div className="sidebar_single sidebar_post">
        <h3 className="sidebar__title mb-4">Recent Blogs</h3>

        {relatedPosts.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="sidebar-blog-swiper"
          >
            {relatedPosts.map((post) => (
              <SwiperSlide key={post.id || Math.random()}>
                <SidebarSinglePost post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-muted py-4">
            No related blogs available
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSidebarSide;
