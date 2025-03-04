import React from 'react';
import AnteaterIllustration from 'assets/Illustrations/Anteater_Illustration.webp';
import DeskIllustration from 'assets/Illustrations/Desk_Illustration.svg';
import GradCapIllustration from 'assets/Illustrations/Graduation_Illustration.svg';
import S_Logo_Purple from 'assets/S_Logo_Purple.svg';
import ScrollAnimation from 'react-animate-on-scroll';

import 'styles/AboutMe/AboutMe.css';

export function AboutMe() {
  return (
    <section id="about-me-container" className="page-container">
      <img id="background-logo" src={S_Logo_Purple} alt="Logo Backdrop" />
      <div id="about-me-images">
        <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOnce>
          <img id="grad-cap-illustration" src={GradCapIllustration} alt="Graduation Cap" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__lightSpeedInLeft" delay="500" animateOnce>
          <img id="anteater-illustration" className="hvr-grow-rotate" src={AnteaterIllustration} alt="Anteater Illustration" />
        </ScrollAnimation>
        <img id="desk-illustration" src={DeskIllustration} alt="Desk Illustration" />
      </div>
      <div id="about-me-text">
        <div id="about-me-header">
          <ScrollAnimation animateIn="animate__jackInTheBox" animateOnce>
            <h2>ABOUT ME</h2>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="animate__backInRight" animateOnce>
          <p>Hey I'm Nick, a software engineer based in San Diego ☀️🌮</p>
          <p>
            I graduated from the 🎓 <strong>University of California, Irvine</strong> in 2019 with a{' '}
            <strong>B.S. in Computer Science</strong> and am currently working full time as a Software Engineer at{' '}
            <strong>Intuit</strong> 🧾
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
