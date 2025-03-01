import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import MenuList from "./MenuList";
import { organization } from "src/api/api";

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

  const handleToggleSearch = () => {
    toggleSearch();
    toggleMenu(false);
    document.body.classList.toggle("locked");
  };

  const handleToggleMenu = () => {
    document.body.classList.toggle("locked");
    toggleMenu();
  };  const [organizationDetails, setOrganizationDetails] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const contactData = await organization();
          if (contactData.data) {
    
            const fullAddress = contactData.data.data.location;
    
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
                {socials.map(({ id, icon, href }) => (
                  <a key={id} target="_blank" rel="noreferrer" href={href}>
                    <i className={icon}></i>
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
                    <a href={whatsappLink} target="_blank" rel="noreferrer">+91 {organizationDetails?.phone}</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Top navbar */}

      <nav
        className={`${
          scrollTop
            ? "stricky-header stricked-menu stricky-fixed slideInDown"
            : "slideIn"
        } main-menu main-menu-two animated clearfix`}
      >
        <div
          className={`main-menu-two-wrapper clearfix${
            scrollTop ? " sticky-header__content" : ""
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
