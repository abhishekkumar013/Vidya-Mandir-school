import React from "react";
import { MapPin, Phone, Mail, Clock, YoutubeIcon, Youtube } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center border-none">
            <MapPin className="h-5 w-5 text-indigo-600" />
            <a
              className="border-none "
              href="https://maps.app.goo.gl/ArP3wEmHHrbGwNvS7"
              target="_blank"
            >
              <span className="ml-3 text-gray-600 border-none">
                Totahar Math, Duhosuho, Lakhaura, East Champaran, Bihar, 845302
              </span>
            </a>
          </div>
          {/* <div className="flex items-center">
            <Phone className="h-5 w-5 text-indigo-600" />
            <span className="ml-3 text-gray-600">not available</span>
          </div> */}
          <div className="flex items-center">
            <a
              href="mailto:udgamvidyamandir@gmail.com"
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail className="h-5 w-5 text-indigo-600" />
              <span>udgamvidyamandir@gmail.com</span>
            </a>
          </div>
          {/* https://www.youtube.com/@UDGAMVIDYAMANDIR */}
          <div className="flex items-center">
            <Youtube className="h-5 w-5 text-indigo-600" />
            <a
              href="https://www.youtube.com/@UDGAMVIDYAMANDIR"
              target="_blank"
              className="ml-3 text-gray-600"
            >
              YouTube
            </a>
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
