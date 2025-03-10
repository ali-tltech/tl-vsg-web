import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import MenuList from "./MenuList";
import { organization } from "src/api/api";

const { logo, navItems: items, callText, phone, phoneHref } = headerData;
const message = "Hello, I'm interested in VS GenX Solutions HR services. Could you share more details?";  
const whatsappLink = `https://wa.me/${phoneHref}?text=${encodeURIComponent(message)}`;

const Header = ({ mainMenuClass = "", navItems = items, onePage = false }) => {
  const { scrollTop } = useScroll(100);
  const { toggleMenu, toggleSearch } = useRootContext();
  const [organizationDetails, setOrganizationDetails] = useState([])



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
    const fetchData = async () => {
      try {
        const contactData = await organization();
        if (contactData.data) {
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
  }, []);
  
  
      

  return (
    <header className="main-header clearfix">
      <nav
        className={`${
          scrollTop
            ? "stricky-header stricked-menu stricky-fixed slideInDown"
            : "slideIn"
        } main-menu ${mainMenuClass} animated clearfix`}
      >
        <div
          className={`main-menu-wrapper clearfix${
            scrollTop ? " sticky-header__content" : ""
          }`}
        >
          <div className="main-menu-wrapper__left">
            <div className="main-menu-wrapper__logo">
              <Link href="/">
                <Image src={organizationDetails.logo} alt="Logo" width={106}/>
                {/* <h2 style={{fontSize:"2rem",color:"white"}}>Vs Genx Solutions</h2> */}
              </Link>
            </div>
            <div className="main-menu-wrapper__main-menu">
              <a onClick={handleToggleMenu} className="mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </a>
              <MenuList navItems={navItems} onePage={onePage} />
            </div>
          </div>
          <div className="main-menu-wrapper__right">
            <div className="main-menu-wrapper__call">
              <div className="main-menu-wrapper__call-icon">
                <span className="icon-phone-call"></span>
              </div>
              <div className="main-menu-wrapper__call-number">
                <p>{callText}</p>
                <h5>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">+{organizationDetails?.phone}</a>
                </h5>
              </div>
            </div>
            {/* <div className="main-menu-wrapper__search-cat">
              <a
                onClick={handleToggleSearch}
                className="main-menu-wrapper__search search-toggler icon-magnifying-glass cursor-pointer"
              ></a>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
