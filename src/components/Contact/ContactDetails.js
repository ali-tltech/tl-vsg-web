import { contactDetails } from "@/data/contact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMap from "../GoogleMap/GoogleMap";

const { phone, phoneHref, email, title, text, address, contactIcon } =
  contactDetails;

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="contact-details__inner">
              <GoogleMap
                containerClassName="contact-details__map-box"
                mapClassName="contact-details__map"
                mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1339699560526!2d78.54752879999998!3d17.50111709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bd68c0d95fb%3A0x3e8539e53166acce!2sSharada%20Sree%20Nivas%2C%20102%2C%20Shaili%20Gardenia%20-%20Water%20Tank%20Rd%2C%20Shaili%20Gardens%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5e0!3m2!1sen!2sin!4v1738556056875!5m2!1sen!2sin"
                />
              <div className="contact-details__content">
                <div className="contact-details__title-box">
                  <h4 className="contact-details__title">{title}</h4>
                  <p className="contact-details__text">{text}</p>
                </div>
                <p className="contact-details__address">{address}</p>
                <div className="contact-details__contact-info">
                  <div className="contact-details__contact-icon">
                    <span className={contactIcon}></span>
                  </div>
                  <h4 className="contact-details__contact-number-email flex">
                    <span style={{fontSize: "20px", fontWeight: "600"}}>

                    Call/Whatsapp
                    </span>
                    <a
                      href={`tel:${phoneHref}`}
                      className="contact-details__contact-number"
                    >
                      {phone}
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="contact-details__contact-email"
                    >
                      {email}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetails;
