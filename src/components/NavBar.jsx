import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Title from "./Title";
import { useState } from "react";
import { PurpleButton } from "../ui";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white  fixed w-full z-10 top-0 left-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Title />

        {/* Navbar Links - Desktop & Tablet */}
        <div className="hidden md:flex md:space-x-8">
          <NavLinks />
        </div>

        {/* Right-side controls: Hamburger + Get Started */}
        <div className="flex items-center gap-3">
          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden p-2 text-[#3A3939] hover:text-[#7AB4BC]"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Get Started Button */}
          <Link to="/login">
            <PurpleButton text="Get started" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden w-[400px] rounded-[20px] border-[1px] ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-white`}
        >
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
