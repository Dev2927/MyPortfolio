import React, { useState } from "react";
import "./Navbar.css";
import logoo from "../../assets/logoo.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png"

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <navbar className="navbar">
        <img src={logoo} alt="Logo" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="power"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopMenuListItem"
          >
            Projects
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </button>

        <img src={menu} alt="Menu" className="mobMenu" onClick={() =>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() =>setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() =>setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="power"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() =>setShowMenu(false)}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() =>setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() =>setShowMenu(false)}
          >
            Conatct Me
          </Link>
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
