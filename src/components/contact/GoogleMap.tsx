import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.445637936247!2d84.97135527543425!3d26.76206117673731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecb5aa253b3c7f%3A0xa895dedc2c4c788b!2sUDGAM%20VIDYA%20MANDIR!5e0!3m2!1sen!2sin!4v1735614272036!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
