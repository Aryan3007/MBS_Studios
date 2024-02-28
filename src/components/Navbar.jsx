import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import DropdownNews from "./DropdownNews";
import DropdownSocial from "./DropdownSocial";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-16 z-50 text-zinc-100 justify-between px-12 items-center flex w-full ">
      <div className="">
        <h1 className="font-bold text-xl">MSB Studios</h1>
      </div>
      <div className="hidden md:flex justify-center items-center gap-6">
        <Link
          to="/"
          className="hover:underline hover:text-purple-500 hover:cursor-pointer duration-150 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline hover:text-purple-500 hover:cursor-pointer duration-150 transition"
        >
          About
        </Link>
        <Dropdown />
        <DropdownNews />
        <Link
          to="/purchase"
          className="hover:underline hover:text-purple-500 hover:cursor-pointer duration-150 transition"
        >
          Purchase
        </Link>
        <Link
          to="/all-games"
          className="hover:underline hover:text-purple-500 hover:cursor-pointer duration-150 transition"
        >
          All Games
        </Link>
        <DropdownSocial />
        <Link
          to="/contact"
          className="hover:underline hover:text-purple-500 hover:cursor-pointer duration-150 transition"
        >
          Contact Us
        </Link>
      </div>

      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          className="block text-2xl text-white focus:outline-none"
        >
          &#8801;
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-black py-4 px-6 flex flex-col gap-4">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Dropdown />
          <DropdownNews />
          <Link to="/purchase" onClick={toggleMenu}>
            Purchase
          </Link>
          <Link to="/all-games" onClick={toggleMenu}>
            All Games
          </Link>
          <DropdownSocial />
          <Link to="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}

      <div className="hidden md:flex gap-5">
        <form className="form">
          <label htmlFor="search">
            <input
              required
              autoComplete="off"
              placeholder="search here"
              id="search"
              type="text"
            />
            <div className="icon">
              <svg
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="swap-on"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="swap-off"
              >
                <path
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <button type="reset" className="close-btn">
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </form>

        <button className="bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-md">
          Login / Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
