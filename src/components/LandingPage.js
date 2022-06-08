import React from "react";

import ArtProfilePic from "assets/Art Profile Pic.svg";
import GithubLogo from "assets/Dev_Icons/Github.svg";
import LinkedInLogo from "assets/Dev_Icons/LinkedIn.svg";
import HeroImageBlobShape from "assets/Organic_Shapes/Hero Image Blob Shape.svg";
import RealProfilePic from "assets/Real Profile Pic.png";

import { MouseScrollIndicator } from "components/MouseScrollIndicator";
import { Svg } from "components/Svg";

export function LandingPage() {
  const showModal = () => {
    let modal_bg = document.getElementsByClassName("modal-bg")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];
    modal_bg.classList.add("show");
    modal_content.classList.add("show");
  };

  const hideModal = () => {
    let modal_bg = document.getElementsByClassName("modal-bg")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];
    modal_bg.classList.remove("show");
    modal_content.classList.remove("show");
  };

  return (
    <>
      <img id="landing-blob" src={HeroImageBlobShape} alt="" />
      <section id="landing-page-container" className="page-container">
        <div id="name-intro-container">
          <h1>
            NICK
            <br />
            SCHNEIDER
          </h1>
          <h3>Software Engineer</h3>
          <h4>If you're going to make something, why not make it pretty?</h4>
          <div id="contact-me-bar">
            <button type="button" className="button" id="contact-me-button" onClick={showModal}>
              <span>Contact Me</span>
            </button>
            <div className="modal-bg" onClick={hideModal}>
              <div className="modal-content">
                <span id="contact-me-modal-close" onClick={hideModal}>
                  ×
                </span>
                <img id="modal-profile-pic" src={RealProfilePic} alt="Nick Schneider" />
                <p>
                  <strong>📧 Email: </strong>
                  <a href="mailto:nickschneider101@gmail.com" target="_blank" rel="noopener noreferrer">
                    nickschneider101@gmail.com
                  </a>
                </p>
                <p>
                  <strong>📞 Phone: </strong>
                  <a href="tel:+13109531324" target="_blank" rel="noopener noreferrer">
                    (310) 953-1324
                  </a>
                </p>
              </div>
            </div>
            <div id="contact-me-socials">
              <a href="https://github.com/CampAsAChamp/" target="_blank" rel="noopener noreferrer">
                <Svg className="contact-me-item" id="github-logo" src={GithubLogo} alt="Github Icon" />
              </a>
              <a href="https://www.linkedin.com/in/nick-schneider-la/" target="_blank" rel="noopener noreferrer">
                <Svg className="contact-me-item" id="linkedin-logo" src={LinkedInLogo} alt="LinkedIn Icon" />
              </a>
            </div>
          </div>
          <MouseScrollIndicator />
        </div>
        <div id="profile-pic-container">
          <Svg id="profile-pic" src={ArtProfilePic} alt="Flat Profile Pic" className="center" />
        </div>
      </section>
    </>
  );
}
