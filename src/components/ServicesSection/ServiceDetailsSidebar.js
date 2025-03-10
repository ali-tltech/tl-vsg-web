import { serviceDetailsSidebar } from "@/data/servicesSection";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import { organization } from "src/api/api";

const { navItems, title, phoneIcon, text, phone, phoneHref } =
  serviceDetailsSidebar;

const ServiceDetailsSidebar = () => {
  const [organizationDetails, setOrganizationDetails] = useState([])
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
      
    
  const { pathname } = useRouter();

  return (
    <div className="service-details__sidebar">
      <div className="service-details__sidebar-service">
        <ul className="service-details__sidebar-service-list list-unstyled">
          {navItems.map(({ id, name, href }) => (
            <li key={id} className={pathname === href ? "current" : ""}>
              <Link href={href}>
                {name} <span className="icon-right-arrow"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="service-details__need-help">
        <div className="service-details__need-help-shape-1 float-bob-x-6"></div>
        <div className="service-details__need-help-shape-2 float-bob-x-7"></div>
        <h2 className="service-details__need-help-title">
          <TextSplit text={title} />
        </h2>
        <div className="service-details__need-help-icon">
          <span className={phoneIcon}></span>
        </div>
        <div className="service-details__need-help-contact">
          <p>{text}</p>
          <a href={`tel:+${organizationDetails.phone}`}>+{organizationDetails.phone}</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSidebar;
