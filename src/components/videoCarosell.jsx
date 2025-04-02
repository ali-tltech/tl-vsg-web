"use client";

import { useEffect, useState } from "react";
import { Youtube } from "lucide-react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";

export function VideoCarousel({ videos, showHeader = true }) {
  const [shouldUseCarousel, setShouldUseCarousel] = useState(videos.length > 3);

  // Only initialize carousel if we have more than 3 videos
  const [emblaRef, emblaApi] = useEmblaCarousel(
    shouldUseCarousel ? 
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    } : 
    false, // Disable carousel when 3 or fewer videos
    shouldUseCarousel ? 
    [WheelGesturesPlugin(), Autoplay({ delay: 4000, stopOnInteraction: false })] : 
    []
  );

  // Update carousel state if videos array changes
  useEffect(() => {
    setShouldUseCarousel(videos.length > 3);
  }, [videos]);

  return (
    <Container fluid>
      {/* Header */}
      {showHeader && (
        <header className="border-bottom mb-4">
          <Container>
            <Row className="py-4">
              <Col className="d-flex align-items-center gap-2">
                <Youtube size={32} className="text-danger" />
                <h2 className="fw-bold">Featured Videos</h2>
              </Col>
              <Col xs={12}>
                <p className="text-muted">Explore our latest video content</p>
              </Col>
            </Row>
          </Container>
        </header>
      )}

      {/* Video Content */}
      <Container className="py-4">
        {shouldUseCarousel ? (
          // Carousel view for more than 3 videos
          <div className="overflow-hidden" ref={emblaRef}>
            <Row className="flex-nowrap gap-3">
              {videos.map((video) => (
                <Col key={video.id} className="flex-shrink-0" xs={12} sm={6} lg={4}>
                  <VideoCard video={video} />
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          // Static grid view for 3 or fewer videos
          <Row className="g-3">
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

// Fixed VideoCard component with proper spacing between elements
function VideoCard({ video }) {
  return (
    <Card className="h-100 border-0 video-card">
      {/* Use an a tag instead of Link for the whole card to avoid Next.js Link issues */}
      <a 
        href={video.youtubeUrl} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        {/* Thumbnail container with relative positioning */}
        <div className="video-thumbnail position-relative mb-3">
          <Card.Img src={video.thumbnail} alt={video.title} className="rounded" />
          
          {/* Play button overlay */}
          <div className="play-overlay position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
            <img src="/youtube-play.png" alt="Play" width={74} height={55} />
          </div>
          
          {/* Duration */}
          <div className="video-duration position-absolute bottom-2 end-2 bg-dark text-white px-2 py-1 rounded">
            {video.duration}
          </div>
          
          {/* Channel info overlay with higher z-index but limited height */}
          <div className="channel-info-overlay position-absolute bottom-0 start-0 p-2 d-flex align-items-center bg-black bg-opacity-50 rounded-bottom w-100" style={{ maxHeight: '40px' }}>
            <img 
              src={video.channelAvatar} 
              alt={video.channelName} 
              className="rounded-circle me-2" 
              width={28} 
              height={28} 
            />
            <span className="text-white small fw-medium text-truncate">
              {video.channelName}
            </span>
          </div>
        </div>
        
        {/* Card body with increased padding at top */}
        <Card.Body className="d-flex flex-column pt-2 ps-5">
          <Card.Title 
            className="fw-semibold text-truncate text-dark " 
            title={video.title}
          >
            {video.title}
          </Card.Title>
        </Card.Body>
      </a>
    </Card>
  );
}