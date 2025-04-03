import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Terminal } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden py-10 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Logo Section (Separated from Grid) */}
        <div className="sm:mb-8 mb-2 flex justify-center md:justify-start">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Debug Diaries
          </span>
        </div>

        {/* Footer Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-600 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-600 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-600 mb-4">
              Legals
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 hover:text-gray-700"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Text */}
        <p className="text-center text-sm text-gray-700 mt-8">
          &copy; 2023 Rajkumar Ojha. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
