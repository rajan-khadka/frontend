import React from "react";
import SeoComponent from "../shared/SeoComponent";

export default function ContactUs() {
  return (
    <React.Fragment>
      <SeoComponent
        title="Contact Us | Vishavkarma Overseas"
        description="Vishavkarma Overseas (PAM) is India's premier manufacturer of PAM combine harvesters, rice mill machinery, and seed processing equipment."
        type="website"
        // name="Vishavkarma Overseas | PAM"
        path="/contact"
        keywords="PAM combine harvester, Vishavkarma Overseas, agricultural machinery, rice mill equipment, seed processing machinery, farming solutions, combine harvester manufacturer, agricultural equipment India"
        // image="/pam-combine-harvester.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-8">Get in touch with us.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-700 mb-4">
              Contact Information
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Contact Number:</strong> +919518844628
              </p>
              <p className="text-gray-700">
                <strong>Whatsapp Number:</strong> +917404948995
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> vishavkarmaoverseas@gmail.com
              </p>

              <p className="text-gray-700">
                <strong>Address:</strong> 212, Ram Nagar, Jagadhri Workshop -
                135002, Yamunanagar, Haryana, India
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-700 mb-4">
              Send a Message
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-700"
              />
              <button
                disabled={true}
                type="submit"
                className="
                bg-red-700 
                text-white 
                px-6 py-2 
                rounded 
                font-semibold 
                transition 
                hover:bg-red-800 
                disabled:opacity-50 
                disabled:cursor-not-allowed
              "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
