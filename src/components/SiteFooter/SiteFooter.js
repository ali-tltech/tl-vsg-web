import footerData from "@/data/siteFooter";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import toast from "react-hot-toast";
import { organization } from "src/api/api";
import { Subscribe } from "../../api/webapi";

const {
  bg,
  logo,
  aboutText,
  author,
  year,
  links,
  socials,
  newsletterText,
  addressLine1,
  addressLine2,
  addressLine3,
  addressLine4,
  phone,
  phoneHref,
  email,
} = footerData;

const SiteFooter = ({ footerClassName = "" }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const response = await Subscribe(email);
      if (response.data.success) {
        toast.success("You have subscribed successfully!");
        setEmail(""); // Clear input field
      } else {
        toast.error(response.data.message || "Subscription failed.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const [organizationDetails, setOrganizationDetails] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactData = await organization();
        if (contactData.data) {  
          const fullAddress = contactData.data.data.location;
  
          // Split the address after every two commas while keeping the commas
          const addressParts = fullAddress.split(/(.*?,.*?,)/g).filter(Boolean);
  
          setOrganizationDetails({
            ...contactData.data.data,
            formattedAddress: addressParts, // Store as an array
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  const message =
    "Hello, I'm interested in VS GenX Solutions HR services. Could you share more details?";
  const whatsappLink = `https://wa.me/${phoneHref}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer className={`site-footer ${footerClassName}`}>
      <div className="site-footer__top">
        <div
          className="site-footer-shape-1"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <Row>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__logo">
                  <Link href="/">
                    <Image src={organizationDetails?.logo} alt="Logo" width={200} height={90} />
                  </Link>
                </div>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">{aboutText}</p>
                </div>
                <div className="site-footer__social">
                  {socials.map(({ id, href, icon }) => (
                    <a key={id} href={href} target="_blank" rel="noreferrer">
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="footer-widget__explore-list list-unstyled clearfix">
                  {links.slice(0, 5).map(({ id, href, text }) => (
                    <li key={id}>
                      <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled clearfix">
                  {links.slice(5).map(({ id, href, text }) => (
                    <li key={id}>
                      <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__newsletter-box clearfix">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p className="footer-widget__newsletter-text">
                  {newsletterText}
                </p>
                <form onSubmit={handleSubscribe} className="footer-widget__newsletter-form">
                  <div className="footer-widget__newsletter-input-box">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="footer-widget__newsletter-btn"
                      disabled={loading}
                    >
                      <i className="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="animated fadeInUp">
              <div className="footer-widget__column footer-widget__contact clearfix">
                <h3 className="footer-widget__title">Contact</h3>
                {organizationDetails?.formattedAddress?.map((line, index) => (
                  <p key={index} className="contact-details__address text-white">{line}</p>
                ))}
                {/* <p className="footer-widget__contact-text">{addressLine1}</p>
                <p className="footer-widget__contact-text">{addressLine2}</p>
                <p className="footer-widget__contact-text">{addressLine3}</p>
                <p className="footer-widget__contact-text">{addressLine4}</p> */}
                <h4 className="footer-widget__contact-info">
                  <a
                    href={whatsappLink}
                    className="footer-widget__contact-number"
                    target="_blank"
                    rel="noreferrer"
                  >
                   +91 {organizationDetails?.phone}
                  </a>{" "}

                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  All rights reserved © Copyright {year} by{" "}
                  <a
                    href="https://tltechnologies.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {author}
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
