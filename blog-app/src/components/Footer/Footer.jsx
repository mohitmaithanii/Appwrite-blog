import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export default Footer;
function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
                <div className="w-full inline-flex p-6 md:w-full lg:w-1/12">
                  <div className="h-full flex flex-col justify-between">
                    <div className="mb-4">
                      <a
                        href="https://github.com/amngairola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white"
                      >
                        <FaGithub size={24} />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/aman-gairola-8ba2a7244"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-100">
                  &copy; Copyright 2023. All Rights Reserved by Aman Gairola
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-100">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-100">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-100">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-100 hover:text-white"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Add social links with icons */}
        </div>
      </div>
    </section>
  );
}
