import React from "react";

import S_Logo from "assets/S_Logo.svg";

import { Svg } from "components/Svg";

import "styles/Navbar.css";

export function Navbar() {
  return (
    <nav>
      <a href="/">
        <Svg id="logo" src={S_Logo} alt="S Logo" />
      </a>
      <ul>
        <li>
          <a href="#about-me-images">About Me</a>
        </li>
        <li>
          <a href="#experience-header">Experience</a>
        </li>
        <li>
          <a href="#skills-header">Skills</a>
        </li>
        <li>
          <a href="#graphic-design-header">Art &amp; Design</a>
        </li>
        <li>
          <a href="#sw-projects-header">Projects</a>
        </li>
      </ul>
      <div className="hamburger-menu">
        <div className="line" id="line1" />
        <div className="line" id="line2" />
        <div className="line" id="line3" />
      </div>
    </nav>
  );
}
