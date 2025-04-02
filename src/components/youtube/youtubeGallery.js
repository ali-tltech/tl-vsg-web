import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';

const YouTubeGallery = ({ videos, title = "Our Videos", tagline = "Watch & Learn" }) => {
  // Function to extract video ID from YouTube URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <section className="youtube-gallery-section">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="tagline">{tagline}</span>
          <h2 className="title">{title}</h2>
        </div>

        <div className="row">
          {videos.map((video, index) => {
            const videoId = getYouTubeId(video.url);
            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/assets/images/resources/video-placeholder.jpg';
            
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="video-card position-relative rounded overflow-hidden shadow-sm h-100 mb-4">
                  <div 
                    className="thumbnail-container position-relative" 
                    style={{ 
                      backgroundImage: `url(${thumbnailUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      paddingTop: '56.25%', // 16:9 aspect ratio
                    }}
                  >
                    <Link 
                      href={video.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="video-play-button d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100"
                    >
                      <span className="play-icon d-flex align-items-center justify-content-center rounded-circle bg-primary text-white">
                        <Play size={24} />
                      </span>
                    </Link>
                  </div>
                  <div className="video-info p-3">
                    <h5 className="video-title">{video.title}</h5>
                    {video.description && (
                      <p className="video-description mb-0 text-muted">{video.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YouTubeGallery;