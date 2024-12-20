import React, { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import { IoHomeOutline } from "react-icons/io5";

export default function NavBar() {
  const { i18n } = useTranslation();
  const [navCollapse, setNavCollapse] = useState(true);

  const navs = ["EN", "TR", "ES"];

  // Optional: Handle language change (could be passed as a function if necessary)
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.toString().toLowerCase());
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <a href="/" className="logo">
          <IoHomeOutline /> Home
        </a>

        <ul className="nav-links">
          {navs.map((e) => (
            <div onClick={() => handleLanguageChange(e)}>
              <li key={e}>{e}</li>
            </div>
          ))}
        </ul>

        <div className="menu-icon" onClick={() => setNavCollapse(false)}>
          <CgMenuRight size={20} />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${!navCollapse ? "open" : ""}`}>
        <div className="mobile-nav-menu">
          <CgClose
            className="close-icon"
            onClick={() => setNavCollapse(true)}
          />
          <ul>
            {navs.map((e) => (
              <div onClick={() => handleLanguageChange(e)}>
                <li key={e}>{e}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
