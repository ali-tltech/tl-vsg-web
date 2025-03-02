import React, { useEffect, useState } from "react";
import { organization } from "src/api/api";

const GoogleMap = ({
  containerClassName = "google-map",
  mapClassName = "google-map__one",
}) => {

   const [organizationDetails, setOrganizationDetails] = useState()
    useEffect(() => {
      const fetchData = async () => {
        try {
          const contactData = await organization();
          if (contactData.data) {
            console.log(contactData.data.data);
    
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
  return (
    <section className={containerClassName}>
      <iframe src={organizationDetails?.mapUrl} className={mapClassName} allowFullScreen></iframe>
    </section>
  );
};

export default GoogleMap;
