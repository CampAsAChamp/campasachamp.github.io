import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import DeskIllustration from "assets/Illustrations/Desk_Illustration.svg";
import GradCapIllustration from "assets/Illustrations/Graduation_Illustration.svg";
import S_Logo_Purple from "assets/S_Logo_Purple.svg";

import "styles/AboutMe.css";

export function AboutMe() {
  return (
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
      <section id="about-me-container" className="page-container">
        <img id="background-logo" src={S_Logo_Purple} alt="Logo Backdrop" />
        <div id="about-me-images">
          <ScrollAnimation animateIn="animate__backInLeft" animateOnce>
            <img id="grad-cap-illustration" src={GradCapIllustration} alt="Graduation Cap" />
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__backInLeft" animateOnce delay={50}>
            <img id="desk-illustration" src={DeskIllustration} alt="Desk Illustration" />
          </ScrollAnimation>
        </div>
        <div id="about-me-text">
          <div id="about-me-header">
            <h2>ABOUT ME</h2>
          </div>
          <p>Hey I'm Nick, a software engineer based in San Diego ☀️🌮</p>
          <p>
            I graduated from the 🎓 <strong>University of California, Irvine</strong> in 2019 with a{" "}
            <strong>B.S. in Computer Science</strong> and am currently working full time as a Software Engineer at <strong>Intuit</strong> 🧾
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
}
