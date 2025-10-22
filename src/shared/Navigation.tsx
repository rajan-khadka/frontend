import {
  FaHome,
  FaPhoneAlt,
  FaUser,
  FaWarehouse,
  FaWhmcs,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/vishavkarma-logo.jpg";

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-4">
                <div className="w-[200px] md:w-[300px] h-[60px] md:h-[80px]">
                  <img
                    src={logo}
                    alt="Vishavkarma Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-evenly items-center space-x-6 lg:space-x-8 whitespace-nowrap flex-1">
              <Link
                to="/"
                className={`font-semibold hover:text-red-700 transition ${
                  isActive("/") ? "text-red-700" : "text-gray-700"
                }`}
              >
                <div className="flex flex-row  items-center">
                  <span className="mr-2">
                    <FaHome size={20} />
                  </span>{" "}
                  <p>Home</p>
                </div>
              </Link>
              <Link
                to="/about"
                className={`hover:text-red-700 transition ${
                  isActive("/about")
                    ? "text-red-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                <div className="flex flex-row  items-center">
                  <span className="mr-2">
                    <FaUser size={20} />
                  </span>{" "}
                  <p>About Us</p>
                </div>
              </Link>

              <Link
                to="/product"
                className={`hover:text-red-700 transition ${
                  isActive("/product")
                    ? "text-red-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                <div className="flex flex-row  items-center">
                  <span className="mr-2">
                    <FaWarehouse size={20} />
                  </span>{" "}
                  <p>Product</p>
                </div>
              </Link>

              <Link
                to="/our-services"
                className={`hover:text-red-700 transition ${
                  isActive("/our-services")
                    ? "text-red-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                <div className="flex flex-row  items-center">
                  <span className="mr-2">
                    <FaWhmcs size={20} />
                  </span>{" "}
                  <p>Our Services</p>
                </div>
              </Link>

              <Link
                to="/contact"
                className={`hover:text-red-700 transition ${
                  isActive("/contact")
                    ? "text-red-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                <div className="flex flex-row  items-center">
                  <span className="mr-2">
                    <FaPhoneAlt size={20} />
                  </span>{" "}
                  <p>Contact Us</p>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-red-700 transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-4 py-4 space-y-4">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`flex items-center py-2 px-3 rounded-md transition ${
                    isActive("/")
                      ? "text-red-700 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                  }`}
                >
                  <FaHome size={20} className="mr-3" />
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className={`flex items-center py-2 px-3 rounded-md transition ${
                    isActive("/about")
                      ? "text-red-700 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                  }`}
                >
                  <FaUser size={20} className="mr-3" />
                  About Us
                </Link>
                <Link
                  to="/product"
                  onClick={closeMobileMenu}
                  className={`flex items-center py-2 px-3 rounded-md transition ${
                    isActive("/product")
                      ? "text-red-700 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                  }`}
                >
                  <FaWarehouse size={20} className="mr-3" />
                  Product
                </Link>
                <Link
                  to="/our-services"
                  onClick={closeMobileMenu}
                  className={`flex items-center py-2 px-3 rounded-md transition ${
                    isActive("/our-services")
                      ? "text-red-700 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                  }`}
                >
                  <FaWhmcs size={20} className="mr-3" />
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={`flex items-center py-2 px-3 rounded-md transition ${
                    isActive("/contact")
                      ? "text-red-700 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                  }`}
                >
                  <FaPhoneAlt size={20} className="mr-3" />
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* <div className="flex flex-col content-between absolute top-[20px] right-[100px]">
          <img src={pam} alt="Pam" className="w-[100px] h-[30px] object-fill" />
          <img
            src={krisaw}
            alt="Krisaw"
            className="w-[100px] h-[40px] object-fill"
          />
        </div> */}
      </nav>
    </>
  );
}
