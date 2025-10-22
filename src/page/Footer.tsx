import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className=" max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <FaPhoneAlt size={20} className="text-red-700" />
          <div>
            <p className="font-bold">Phone</p>
            <p>+919518844628</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <FaEnvelope size={20} className="text-red-700" />
          <div>
            <p className="font-bold">Email</p>
            <p>vishavkarmaoverseas@gmail.com</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt size={20} className="text-red-700" />
          <div>
            <p className="font-bold">Location</p>
            <p> 212, Ram Nagar, Jagadhri Workshop - 135002</p>
            <p>Yamunanagar, Haryana</p>
            <p>India</p>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-700 my-8" />

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-300">
          © 2024 Vishavkarma Overseas India Pvt Ltd | All rights reserved.
        </div>
        {/* <div className="text-sm text-gray-300">
          Designed & Developed By Info RK
        </div> */}
      </div>
    </footer>
  );
}
