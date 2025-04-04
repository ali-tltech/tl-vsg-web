import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { getBlog } from "src/api/webapi";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SidebarSinglePost = ({ post }) => {
  const { image, date, title, id, excerpt } = post;
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
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
          <Link href={`/blog/${id}`}>
            <a className="text-dark text-decoration-none">{title}</a>
          </Link>
        </h4>
        <p className="sidebar__post-excerpt text-muted">
          {excerpt && excerpt.length > 100 
            ? `${excerpt.substring(0, 100)}...` 
            : excerpt}
        </p>
        <Link href={`/blog/${id}`}>
          <a className="btn btn-link p-0 text-black text-decoration-none text-uppercase text-bold">
            Read More <i className="fa fa-arrow-right ms-2"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

const NewsSidebarSide = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { id: currentBlogId } = router.query;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlog();
        if (response?.data?.data) {
          // Filter out the current blog from the list
          const filteredPosts = response.data.data.filter(
            blog => blog.id !== currentBlogId
          );
          
          setPosts(filteredPosts);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Optional: Add error handling toast or message
      }
    };

    // Only fetch if currentBlogId is available
    if (currentBlogId) {
      fetchBlogs();
    }
  }, [currentBlogId]);

  return (
    <div className="sidebar">

      {/* Recent Posts Section */}
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title mb-4">Recent Blogs</h3>
        
        {posts.length > 0 && (
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
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <SidebarSinglePost post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* No posts placeholder */}
        {posts.length === 0 && (
          <div className="text-center text-muted py-4">
            No recent posts available
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSidebarSide;