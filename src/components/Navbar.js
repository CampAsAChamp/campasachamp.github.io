import React, { useState } from "react";

import S_Logo from "assets/S_Logo.svg";

import { Svg } from "components/Svg";

import "styles/Navbar.css";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openNavModal() {
    const burger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("nav ul");

    // Open Nav
    nav.classList.add("nav-active");
    burger.classList.add("toggle");

    // When the modal is shown, we want a fixed body
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    setIsNavOpen(true);
  }

  function closeNavModal() {
    const burger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("nav ul");

    // Close Nav
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");

    document.body.style.position = "";
    document.body.style.top = "";
    setIsNavOpen(false);
  }

  function navSlide() {
    isNavOpen ? closeNavModal() : openNavModal();
  }

  return (
    <nav>
      <a href="/">
        <Svg id="logo" src={S_Logo} alt="S Logo" />
      </a>
      <ul>
        <li>
          <a href="#about-me-images" onClick={closeNavModal}>
            About Me
          </a>
        </li>
        <li>
          <a href="#experience-header" onClick={closeNavModal}>
            Experience
          </a>
        </li>
        <li>
          <a href="#skills-header" onClick={closeNavModal}>
            Skills
          </a>
        </li>
        <li>
          <a href="#graphic-design-header" onClick={closeNavModal}>
            Art & Design
          </a>
        </li>
        <li>
          <a href="#sw-projects-header" onClick={closeNavModal}>
            Projects
          </a>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={navSlide}>
        <div className="line" id="line1" />
        <div className="line" id="line2" />
        <div className="line" id="line3" />
      </div>
    </nav>
  );
}
