import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar(): JSX.Element {
  const [nav, setNav] = useState<boolean>(false);

  const location = useLocation();
  const { pathname } = location;

  const openNav = (): void => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <img src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" width={140} alt="" />

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        {pathname === "/appointment" ? (
          <></>
        ) : (
          <li>
            <Link to="/appointment" className="navbar-links">
              Book Appointment
            </Link>
          </li>
        )}
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faTimes} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Book Appointment
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon" />
      </div>
    </div>
  );
}

export default Navbar;
