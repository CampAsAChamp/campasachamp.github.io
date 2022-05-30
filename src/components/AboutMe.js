import React from "react";

import Purple_S_Logo from "assets/Purple S Logo.svg";
import GradCapIllustration from "assets/undraw_Graduation_ktn0.svg";
import DeskIllustration from "assets/undraw_feeling_proud_qne1.svg";

export function AboutMe() {
  return (
    <section id="about-me-container" className="page-container">
      <img id="background-logo" src={Purple_S_Logo} alt="Logo Backdrop" />
      <div id="about-me-images">
        <img id="grad-cap-illustration" src={GradCapIllustration} alt="Graduation Cap" />
        <img id="desk-illustration" src={DeskIllustration} alt="Desk Illustration" />
      </div>
      <div id="about-me-text">
        <h2>ABOUT ME</h2>
        <p>Hey I'm Nick, a software engineer and UI/UX designer based in Los Angeles</p>
        <p>
          I graduated from the 🎓 <strong>University of California, Irvine</strong> in 2019 with a
          <strong>B.S. in Computer Science</strong> and am now working full time as a Software Engineer at 📸
          <strong>Arcules</strong>
        </p>
      </div>
    </section>
  );
}
