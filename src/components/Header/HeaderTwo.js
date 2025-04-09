import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Container, Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import MenuList from "./MenuList";
import { organization } from "src/api/api";
import { getSocial } from "src/api/webapi";

const {
  logo,
  navItems: items,
  callText,
  phone,
  phoneHref,
  socials,
} = headerData;

const message = "Hello, I'm interested in VS GenX Solutions HR services. Could you share more details?";  
const whatsappLink = `https://wa.me/${phoneHref}?text=${encodeURIComponent(message)}`;

const HeaderTwo = ({ navItems = items, onePage = false }) => {
  const { scrollTop } = useScroll(100);
  const { toggleMenu, toggleSearch } = useRootContext();
  const [organizationDetails, setOrganizationDetails] = useState([]);
  const [socialLink, setSocialLink] = useState([]);
  const isMounted = useRef(true);
  
  // Optimize render by only updating when scrollTop crosses the threshold
  const throttledScrollTop = useMemo(() => {
    return scrollTop;
  }, [scrollTop]);
  
  const platformIcons = {
    linkedin: "fab fa-linkedin",
    youtube: "fab fa-youtube",
    facebook: "fab fa-facebook",
    instagram: "fab fa-instagram",
    whatsapp: "fab fa-whatsapp",
  };

  const handleToggleSearch = () => {
    toggleSearch();
    toggleMenu(false);
    document.body.classList.toggle("locked");
  };

  const handleToggleMenu = () => {
    document.body.classList.toggle("locked");
    toggleMenu();
  };  

  useEffect(() => {
    // Set mounted ref
    isMounted.current = true;
    
    const fetchSocial = async () => {
      try {
        const response = await getSocial();
        if (response?.data?.data && isMounted.current) {
          const formattedLinks = response.data.data
            .filter((item) => item.isActive)
            .map((item) => ({
              id: item.id,
              icon: platformIcons[item.platform.toLowerCase()] || "fas fa-globe",
              href: item.url,
            }));
          setSocialLink(formattedLinks);
        }
      } catch (error) {
        console.error("Error fetching Social Links", error);
      }
    };
  
    fetchSocial();
    
    // Cleanup function
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  useEffect(() => {
    isMounted.current = true;
    
    const fetchData = async () => {
      try {
        const contactData = await organization();
        if (contactData.data && isMounted.current) {
          const fullAddress = contactData.data.data.location;
          const addressParts = fullAddress.split(/(.*?,.*?,)/g).filter(Boolean);
  
          // Format the phone number by adding a space only after the first two digits
          const phone = contactData.data.data.phone;
          const formattedPhone = phone.length > 2 ? phone.slice(0, 2) + " " + phone.slice(2) : phone;
  
          setOrganizationDetails({
            ...contactData.data.data,
            formattedAddress: addressParts, // Store as an array
            phone: formattedPhone, // Store the formatted phone number
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
    
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  return (
    <header className="main-header-two clearfix">
      {/* Top navbar */}
      <div className="main-header-two__top clearfix">
        <div className="container clearfix">
          <div className="main-header-two__top-inner clearfix">
            <div className="main-header-two__top-left">
              <div className="main-header-two__logo">
                <Link href="/">
                  <Image src={organizationDetails.logo} alt="Logo" width={106} />
                </Link>
              </div>
              <div className="main-header-two__top-social">
                {socialLink.map((social) => (
                  <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="main-header-two__top-right">
              <div className="main-header-two__top__call">
                <div className="main-header-two__top-icon">
                  <span className="icon-phone-call"></span>
                </div>
                <div className="main-header-two__top-call-number">
                  <p>{callText}</p>
                  <h5>
                    <a href={whatsappLink} target="_blank" rel="noreferrer">+{organizationDetails?.phone}</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Top navbar */}

      <nav
        className={`main-menu main-menu-two animated clearfix ${
          throttledScrollTop ? "stricky-header stricked-menu stricky-fixed" : ""
        }`}
      >
        <div
          className={`main-menu-two-wrapper clearfix${
            throttledScrollTop ? " sticky-header__content" : ""
          }`}
        >
          <Container className="clearfix">
            <div className="main-menu-two-wrapper__inner clearfix">
              <div className="main-menu-two-wrapper__left">
                <div className="main-menu-two-wrapper__main-menu">
                  <a onClick={handleToggleMenu} className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <MenuList navItems={navItems} onePage={onePage} />
                </div>
              </div>
              {/* <div className="main-menu-two-wrapper__right">
                <div className="main-menu-two-wrapper__search-box">
                  <a
                    onClick={handleToggleSearch}
                    className="main-menu-two-wrapper__search search-toggler icon-magnifying-glass cursor-pointer"
                  ></a>
                </div>
              </div> */}
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;