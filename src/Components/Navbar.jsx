import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import Logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CgMenuRightAlt as HamburgerMenu,
  CgClose as Close,
} from "react-icons/cg";

function Navbar({ margin }) {
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    const changeWidth = () => {
      setscreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <nav className="pt-[2rem]">
        <div className="flex items-center justify-between relative ">
          <div className="logo ml-[4rem]" id="logo">
            <Link to="/">
              <img src={Logo} alt="Space Tourism Logo" />
            </Link>
          </div>
          <button
            className="menu-btn"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="myNavbar"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <Close id="myNavbar" color="white" size="2rem" />
            ) : (
              <HamburgerMenu id="myNavbar" color="white" size="2rem" />
            )}
          </button>

          {(isOpen || screenWidth > 640) && (
            <ul
              className="nav-lists p-[1.5rem] bg-[#979797]/[4%] text-white flex gap-x-[5rem] justify-center items-center pl-[5rem] basis-1/2"
              id="navList"
            >
              <li className="relative flex items-center">
                <Link to="/" className="font-Bellefair tracking-[1px]">
                  <span className="font-bold font-Barlow mr-3">00</span>HOME
                </Link>
              </li>
              <li className="relative flex items-center">
                <Link
                  to="/Destination/MOON"
                  className="font-Bellefair tracking-[1px]"
                >
                  <span className="font-bold font-Barlow mr-3">01</span>
                  DESTINATION
                </Link>
              </li>
              <li className="relative flex items-center">
                <Link
                  to="/Crew/Douglas%20Hurley"
                  className="font-Bellefair tracking-[1px]"
                >
                  <span className="font-bold font-Barlow mr-3">02</span>CREW
                </Link>
              </li>
              <li className="relative flex items-center">
                <Link
                  to="/Technology/Launch%20vehicle"
                  className="font-Bellefair tracking-[1px]"
                >
                  <span className="font-bold font-Barlow mr-3">03</span>
                  TECHNOLOGY
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
