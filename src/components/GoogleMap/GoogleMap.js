import React from "react";

const GoogleMap = ({
  containerClassName = "google-map",
  mapClassName = "google-map__one",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.262764299715!2d78.5475288!3d17.5011171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cb2414a5fab1a8d%3A0x5ec4ad603c12d6f4!2sVS%20GENX%20Solutions%20LLP!5e1!3m2!1sen!2sin!4v1738842791725!5m2!1sen!2sin",
}) => {
  return (
    <section className={containerClassName}>
      <iframe src={mapSrc} className={mapClassName} allowFullScreen></iframe>
    </section>
  );
};

export default GoogleMap;
