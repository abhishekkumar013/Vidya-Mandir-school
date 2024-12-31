import React from 'react';
import SectionTitle from './ui/SectionTitle';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import GoogleMap from './contact/GoogleMap';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Contact Us"
          subtitle="Get in touch with us"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>

        <div className="mt-16">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;