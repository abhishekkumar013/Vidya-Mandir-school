import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-indigo-600" />
            <span className="ml-3 text-gray-600">
              Totahar Math, Duhosuho, Lakhaura, East Champaran, Bihar, 845302
            </span>
          </div>
          {/* <div className="flex items-center">
            <Phone className="h-5 w-5 text-indigo-600" />
            <span className="ml-3 text-gray-600">not available</span>
          </div> */}
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-indigo-600" />
            <span className="ml-3 text-gray-600">
              udgamvidyamandir@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Clock className="h-5 w-5 text-indigo-600" />
          <h3 className="ml-2 text-lg font-medium text-gray-900">
            School Hours
          </h3>
        </div>
        <div className="space-y-2 text-gray-600">
          <p>Open 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
