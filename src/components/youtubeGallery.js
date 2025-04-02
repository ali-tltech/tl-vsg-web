import React, { useState } from 'react';
import Link from 'next/link';
import { Play, Clock, User } from 'lucide-react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const YouTubeGallery = ({ videos }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter videos based on category
  const filteredVideos = activeFilter === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeFilter);
  
  // Extract unique categories from videos
  const categories = ['all', ...new Set(videos.map(video => video.category))];
  
  return (
    <div className="youtube-gallery-container py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-lg-8 col-md-10 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-3">Our Video Collection</h2>
            <p className="lead text-muted">
              Check out our latest videos and tutorials. Click on any thumbnail to watch on YouTube.
            </p>
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="filter-buttons">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn ${activeFilter === category ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Video Grid */}
        <div className="row g-4">
          {filteredVideos.map((video, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm hover-scale">
                <div className="video-thumbnail-container position-relative">
                  {/* Thumbnail */}
                  <img 
                    src={`https://img.youtube.com/vi/${getYouTubeID(video.url)}/maxresdefault.jpg`} 
                    alt={video.title} 
                    className="card-img-top"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="overlay-container position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <Link href={video.url} target="_blank" rel="noopener noreferrer">
                      <a className="play-button d-flex justify-content-center align-items-center bg-primary rounded-circle">
                        <Play size={24} className="text-white" />
                      </a>
                    </Link>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text text-muted">{truncateDescription(video.description, 120)}</p>
                </div>
                
                {/* Video Meta */}
                <div className="card-footer bg-white border-top-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted d-flex align-items-center">
                      <Clock size={16} className="me-1" /> {video.duration}
                    </small>
                    <small className="text-muted d-flex align-items-center">
                      <User size={16} className="me-1" /> {video.author}
                    </small>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                      {({ isVisible }) => (
                        <small className="text-muted">
                          {isVisible ? (
                            <CountUp end={video.views} separator="," suffix=" views" />
                          ) : (
                            '0 views'
                          )}
                        </small>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: translateY(-5px);
        }
        .video-thumbnail-container {
          overflow: hidden;
          aspect-ratio: 16/9;
        }
        .overlay-container {
          background: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card:hover .overlay-container {
          opacity: 1;
        }
        .play-button {
          width: 60px;
          height: 60px;
          transition: transform 0.3s ease;
        }
        .play-button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

// Helper function to extract YouTube video ID from URL
function getYouTubeID(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Helper function to truncate text
function truncateDescription(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export default YouTubeGallery;