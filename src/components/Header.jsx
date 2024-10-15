import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../images/logo.png';
import downIcon from '../images/down-icon.png';
import bg from '../images/bg.jpg';

const Header = () => {
  return (
    <div
      className="header bg-black text-white font-sans h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <nav className="flex justify-between items-center p-4">
        <img src={logo} alt="Netflix Logo" className="logo h-8" />
        <div className="flex space-x-4">
         
          <button className="language-btn flex items-center bg-transparent border border-gray-500 px-3 py-1 text-white rounded">
            <i className="fa-solid fa-globe"></i> English
            <img src={downIcon} alt="Dropdown" className="ml-1 w-3" />
          </button>
          <Link to="/movies">
            <button className="sign bg-red-600 px-4 py-2 rounded">
              All Movies
            </button>
          </Link>
          
        </div>
      </nav>
      <div className="header-content text-center flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-bold font-helvetica-neue">
          Unlimited movies, TV <br /> shows and more.
        </h1>
        <h3 className="text-xl mt-4 font-helvetica-neue">Watch anywhere. Cancel anytime.</h3>
        <p className="mt-2 font-helvetica-neue">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="email-signup mt-4 flex justify-center w-full max-w-lg">
          <input
            type="email"
            placeholder="Email address"
            required
            className="p-3 flex-1 text-black rounded-l"
          />
          <button
            type="submit"
            className="bg-red-600 p-3 px-6 text-white rounded-r"
          >
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
        <Link to="/movies">
            <button className="sign bg-red-600 px-6 py-3 text-lg font-helvetica-neue  rounded-md mt-6 ">
              All Movies 
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Header;
