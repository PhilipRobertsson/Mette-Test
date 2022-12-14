import React, { useState } from "react";
import { Link } from "react-router-dom";
import MetteLogga from "../images/MetteLogga.png";
import { Button } from "./Button";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [Button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  /* -----Navbar appear when scrolling------*/
  const navbarChange = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navbarChange); //show at the website

  return (
    <>
      {/* <nav className="navbar active"> */}
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={MetteLogga} height={35} width={35} />
            <div className="navText">METTE</div>
          </Link>

          {/* hamburger and cross icon */}
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fa fa-times" : "fa fa-bars"}
              aria-hidden="true"
            />
          </div>

          {/* Header titles */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <p className="navText">Hem</p>
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/om-oss'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Om oss
              </Link>
            </li> */}

            <li className="nav-item">
              <Link
                to="/mette22-23"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <p className="navText">Mette 22/23</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <p className="navText">Kontakt</p>
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="https://www.instagram.com/mettemedbandana/"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ fontSize: "25px" }}
              >
                <i
                  className={click ? "fab fa-instagram" : "fab fa-instagram"}
                  aria-hidden="true"
                />
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://www.facebook.com/MTMette/"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ fontSize: "25px" }}
              >
                <i
                  className={
                    click ? "fab fa-facebook-square" : "fab fa-facebook-square"
                  }
                  aria-hidden="true"
                />
              </a>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
