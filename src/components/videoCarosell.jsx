"use client";

import { useEffect } from "react";
import { Youtube } from "lucide-react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
export function VideoCarousel({ videos, showHeader = true }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [WheelGesturesPlugin(), Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

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

      {/* Video Carousel */}
      <Container className="py-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <Row className="flex-nowrap gap-3">
            {videos.map((video) => (
              <Col key={video.id} className="flex-shrink-0" xs={12} sm={6} lg={4}>
                <Link 
                  href={video.youtubeUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Card className="h-100 border-0 video-card">
                    <div className="video-thumbnail position-relative">
                      <Card.Img src={video.thumbnail} alt={video.title} className="rounded" />
                      <div className="play-overlay position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                        <img src="/youtube-play.png" alt="Play" width={74} height={55} />
                      </div>
                      <div className="video-duration position-absolute bottom-2 end-2 bg-dark text-white px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Row className="align-items-start">
                        <Col xs="auto">
                          <img src={video.channelAvatar} alt={video.channelName} className="rounded-circle" width={40} height={40} />
                        </Col>
                        <Col>
                          <Card.Title className="fw-semibold text-truncate" title={video.title}>
                            {video.title}
                          </Card.Title>
                          <Card.Text className="text-muted small">
                            {video.channelName} • {video.views} views
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}