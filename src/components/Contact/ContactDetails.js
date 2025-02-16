import { contactDetails } from "@/data/contact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMap from "../GoogleMap/GoogleMap";

const { phone, phoneHref, email, title, text, address1,address2,address3,address4, contactIcon } = contactDetails;
  const message = "Hello, I'm interested in VS GenX Solutions HR services. Could you share more details?";  
  const whatsappLink = `https://wa.me/${phoneHref}?text=${encodeURIComponent(message)}`;
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
                mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.262764299715!2d78.5475288!3d17.5011171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cb2414a5fab1a8d%3A0x5ec4ad603c12d6f4!2sVS%20GENX%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1738842791725!5m2!1sen!2sin"
                />
              <div className="contact-details__content">
                <div className="contact-details__title-box">
                  <h4 className="contact-details__title">{title}</h4>
                  <p className="contact-details__text">{text}</p>
                </div>
                <p className="contact-details__address">{address1}</p>
                <p className="contact-details__address">{address2}</p>
                <p className="contact-details__address">{address3}</p>
                <p className="contact-details__address">{address4}</p>
                <div className="contact-details__contact-info">
                  <div className="contact-details__contact-icon">
                    <span className={contactIcon}></span>
                  </div>
                  <h4 className="contact-details__contact-number-email flex">
                    <span style={{fontSize: "20px", fontWeight: "600"}}>

                    Call/Whatsapp
                    </span>
                    <a
                      href={whatsappLink}
                      className="contact-details__contact-number"
                      target="_blank" rel="noreferrer"
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
