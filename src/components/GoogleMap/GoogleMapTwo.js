import React from "react";
import { Container } from "react-bootstrap";

const GoogleMapTwo = () => {
  return (
    <section className="google-map-two">
      <Container>
        <div className="google-map-two__inner">
          <iframe
src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1339699560526!2d78.54752879999998!3d17.50111709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bd68c0d95fb%3A0x3e8539e53166acce!2sSharada%20Sree%20Nivas%2C%20102%2C%20Shaili%20Gardenia%20-%20Water%20Tank%20Rd%2C%20Shaili%20Gardens%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5e0!3m2!1sen!2sin!4v1738556056875!5m2!1sen!2sin"
            className="google-map__two-map"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default GoogleMapTwo;
