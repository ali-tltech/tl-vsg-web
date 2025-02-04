'use client';

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import errorbg from '../../assets/images/error/404error.jpg';

export default function NotFound() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-start text-start position-relative"
      style={{
        backgroundImage: `url("${errorbg.src}")`, // ✅ Use .src to get the URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <Row className="w-100 px-3 px-md-5 position-relative" style={{ marginLeft: "4rem" }}>
        <Col md={8} lg={5} className="ms-md-5">
          <h1 className="display-1 fw-bold text-white mb-0">404</h1>
          <h2 className="display-5 fw-semibold text-white mb-3">
            Oops! We couldn’t find that page.
          </h2>
          <p className="lead text-white mb-4" style={{ maxWidth: "600px" }}>
            It looks like the page you’re searching for has been moved, renamed, or is temporarily unavailable.
          </p>

          <p className="text-white fw-medium mb-3">Don’t worry, here’s what you can do:</p>
          <ul className="text-white mb-4" style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>✔ Double-check the URL you entered.</li>
            <li>✔ Navigate back to our homepage to start fresh.</li>
            <li>✔ Use the search bar to find what you’re looking for.</li>
          </ul>

          <p className="text-white fw-medium mb-4">
            If you still need help, feel free to{" "}
            <Link href="https://connect.tltechnologies.net/" target="_blank" passHref>
              <span className="text-decoration-underline text-info" style={{ cursor: "pointer" }}>
                contact us
              </span>
            </Link>.
          </p>

          <Link href="/" passHref>
            <Button
              variant="light"
              size="lg"
              className="px-4 py-3 rounded-pill text-danger fw-medium shadow-sm"
            >
              Go to Homepage
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
