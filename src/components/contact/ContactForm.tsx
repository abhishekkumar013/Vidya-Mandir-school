import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setResponseMessage("Message sent successfully!");
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setResponseMessage("Failed to send the message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <form className="space-y-6" onSubmit={sendEmail}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSending}
        className={`w-full py-3 px-4 rounded-md text-white transition-colors ${
          isSending ? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
      {responseMessage && (
        <p
          className={`mt-4 text-center ${
            responseMessage.includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
