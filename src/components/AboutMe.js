import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Purple_S_Logo from "assets/Purple S Logo.svg";
import GradCapIllustration from "assets/undraw_Graduation_ktn0.svg";
import DeskIllustration from "assets/undraw_feeling_proud_qne1.svg";

export function AboutMe() {
  return (
    <section id="about-me-container" className="page-container">
      <img id="background-logo" src={Purple_S_Logo} alt="Logo Backdrop" />
      <div id="about-me-images">
        <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true}>
          <img id="grad-cap-illustration" src={GradCapIllustration} alt="Graduation Cap" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true} delay={50}>
          <img id="desk-illustration" src={DeskIllustration} alt="Desk Illustration" />
        </ScrollAnimation>
      </div>
      <div id="about-me-text">
        <ScrollAnimation animateIn="animate__bounce" animateOnce={true} initiallyVisible={true}>
          <h2>ABOUT ME</h2>
        </ScrollAnimation>
        <p>Hey I'm Nick, a software engineer based in Los Angeles</p>
        <p>
          I graduated from the 🎓 <strong>University of California, Irvine</strong> in 2019 with a{" "}
          <strong>B.S. in Computer Science</strong> and am now working full time as a Software Engineer at 📸{" "}
          <strong>Arcules</strong>
        </p>
      </div>
    </section>
  );
}
