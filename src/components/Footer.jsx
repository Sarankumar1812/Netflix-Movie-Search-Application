import React from "react";
import downIcon from "../images/down-icon.png";

const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-gray-400 py-8 px-40">
      <h2 className="text text-xl">
        Questions? Call <u>000-800-919-1694</u>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-center justify-center items-center sm:text-left">
        <div className="col space-y-2 flex flex-col pl-20 pt-10">
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Media Centre
          </a>
          <a href="#" className="hover:underline">
            Ways to Watch
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
        </div>
        <div className="col space-y-2 flex flex-col pl-20 pt-10">
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
          <a href="#" className="hover:underline">
            Legal Notices
          </a>
        </div>
        <div className="col space-y-2 flex flex-col pl-20 pt-10">
          <a href="#" className="hover:underline">
            Account
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-start -ml-[1100px]">
        <button className="language-btn flex justify-center items-center mt-8 mx-auto bg-transparent border border-gray-500 px-4 py-2 text-white rounded-md">
          <i className="fa-solid fa-globe mr-2"></i> English
          <img src={downIcon} alt="Dropdown" className="ml-2 w-3 h-2" />
        </button>

        <p className="text-center mt-6 text-xl font-bold">
          {" "}
          <span className="text-red-700">Netflix</span> India
        </p>
      </div>
    </div>
  );
};

export default Footer;
