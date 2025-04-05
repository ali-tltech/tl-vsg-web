"use client";

import { useEffect, useState } from "react";
import { Youtube } from "lucide-react";
import { Card, Container, Row, Col } from "react-bootstrap";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "react-bootstrap";
import { getAllYouTubeVideos } from "src/api/webapi.js";

export function VideoCarousel({ showHeader = true }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldUseCarousel, setShouldUseCarousel] = useState(false);

  // Fetch videos from API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await getAllYouTubeVideos();
        if (response && response.data) {
          setVideos(response.data);
          setShouldUseCarousel(response.data.length > 3);
        }
      } catch (err) {
        setError("Failed to load videos");
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Configure carousel with enhanced options for continuous scrolling
  const [emblaRef, emblaApi] = useEmblaCarousel(
    shouldUseCarousel ? 
    {
      loop: true,        // Enable loop for continuous scrolling
      align: "start",
      skipSnaps: false,
      slidesToScroll: 1, // Scroll one video at a time
      containScroll: "keepSnaps"
    } : 
    false, // Disable carousel when 3 or fewer videos
    shouldUseCarousel ? 
    [
      WheelGesturesPlugin(), 
      Autoplay({ 
        delay: 4000, 
        stopOnInteraction: true,  // Pause autoplay on user interaction
        playOnInit: true // Start playing immediately
      })
    ] : 
    []
  );

  // Initialize or update embla carousel when videos change
  useEffect(() => {
    if (emblaApi && shouldUseCarousel) {
      // Recalculate carousel when videos array changes
      emblaApi.reInit();
    }
  }, [videos, emblaApi, shouldUseCarousel]);

  // Show loading state
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p>Loading videos...</p>
      </Container>
    );
  }

  // Show error state
  if (error) {
    return (
      <Container className="py-5 text-center">
        <p className="text-danger">{error}</p>
      </Container>
    );
  }

  // If no videos are available
  if (videos.length === 0) {
    return (
      <Container className="py-5 text-center">
        <p>No videos available at this time.</p>
      </Container>
    );
  }

  return (
    <Container fluid className="px-0">
      {/* Header */}
      {showHeader && (
        <header className="border-bottom mb-4">
          <Container>
            <Row className="py-4">
              <Col xs={12} className="d-flex align-items-center gap-2 mb-2">
                <Youtube size={32} className="text-danger" />
                <h2 className="fw-bold mb-0">Featured Videos</h2>
              </Col>
              <Col xs={12}>
                <p className="text-muted mb-0">Explore our latest video content</p>
              </Col>
            </Row>
          </Container>
        </header>
      )}

      {/* Video Content */}
      <Container className="py-4">
        {shouldUseCarousel ? (
          // Carousel view for more than 3 videos
          <div className="embla overflow-hidden position-relative" ref={emblaRef}>
            <div className="embla__container d-flex">
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="embla__slide flex-shrink-0" 
                  style={{ 
                    width: "calc(33.333% - 16px)", 
                    marginRight: "24px",
                    minWidth: "280px" 
                  }}
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
            
            {/* Optional: Add navigation arrows */}
            {videos.length > 3 && (
              <div className="carousel-indicators mt-3 d-flex justify-content-center gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className="bg-secondary rounded-circle"
                    style={{ 
                      width: "8px", 
                      height: "8px", 
                      border: "none",
                      opacity: 0.5
                    }}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        ) : (
          // Static grid view for 3 or fewer videos
          <Row className="g-4">
            {videos.map((video) => (
              <Col key={video.id} xs={12} sm={6} lg={4}>
                <VideoCard video={video} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

// Improved VideoCard component with better spacing
function VideoCard({ video }) {
  return (
    <Card className="h-100 border-0 shadow-sm video-card">
      <a 
        href={video.youtubeUrl} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        {/* Thumbnail container with relative positioning */}
        <div className="position-relative">
          {/* Use thumbnailUrl from the API instead of thumbnail */}
          <Card.Img 
            src={video.thumbnailUrl} 
            alt={video.title} 
            className="rounded-top" 
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
          />
          
          {/* Play button overlay */}
          <div 
            className="position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 2 }}
          >
            <Image 
              src="/youtube-play.png" 
              alt="Play" 
              width={60} 
              height={42} 
            />
          </div>
          
          {/* Duration */}
          <div 
            className="position-absolute bottom-0 end-0 bg-dark text-white px-2 py-1 m-2 rounded"
            style={{ zIndex: 1 }}
          >
            {video.duration}
          </div>
        </div>
        
        {/* Card body with proper padding */}
        <Card.Body className="p-3">
          <Card.Title 
            className="fw-semibold text-dark mb-2" 
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.4"
            }}
          >
            {video.title}
          </Card.Title>
          
          {/* View count and published date */}
          <div className="text-muted small d-flex align-items-center">
            <span>{video.views.toLocaleString()} views</span>
            <span className="mx-1">•</span>
            <span>{formatPublishedDate(video.publishedAt)}</span>
          </div>
        </Card.Body>
      </a>
    </Card>
  );
}

// Helper function to format the published date
function formatPublishedDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays <= 1) return "Today";
  if (diffDays <= 2) return "Yesterday";
  if (diffDays <= 7) return `${diffDays} days ago`;
  if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays <= 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}