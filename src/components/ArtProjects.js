import React from "react";

import ThreeDimensionalBlendTextPic from "assets/Projects/3D Blend Text.png";
import AlohaPic from "assets/Projects/Aloha.png";
import BeeLogoPic from "assets/Projects/Bee Logo.png";
import FloralTextPic from "assets/Projects/Floral Text.png";
import GradientFluidPosterPic from "assets/Projects/Gradient Fluid Poster.png";
import LineArtLogoPic from "assets/Projects/Line Art Logo.png";
import LineFillLetteringPic from "assets/Projects/Line Fill Lettering.png";
import LosAngelesPostCardPic from "assets/Projects/Los Angeles Post Card.png";
import RetroStripeLetteringPic from "assets/Projects/Retro Stripe Lettering.png";
import TriFergPic from "assets/Projects/Tri Ferg.png";
import WaterColorPopsiclesPic from "assets/Projects/Water Color Popsicles.png";
import WellPic from "assets/Projects/Well.png";
import ScrollAnimation from "react-animate-on-scroll";

export function ArtProjects() {
  return (
    <section id="graphic-design-container" className="page-container">
      <ScrollAnimation animateIn="animate__fadeInRight" duration={0.5} animateOnce={true}>
        <div id="graphic-design-header" className="section-header">
          <h2>Art and Design Projects</h2>
        </div>
      </ScrollAnimation>
      <div id="graphic-design-content">
        <div className="row">
          <div className="column">
            <img src={AlohaPic} alt="" />
            <img src={LosAngelesPostCardPic} alt="" />
            <img src={GradientFluidPosterPic} alt="" />
          </div>
          <div className="column">
            <img src={TriFergPic} alt="" />
            <img src={LineArtLogoPic} alt="" />
            <img src={ThreeDimensionalBlendTextPic} alt="" />
          </div>
          <div className="column">
            <img src={FloralTextPic} alt="" />
            <img src={RetroStripeLetteringPic} alt="" />
            <img src={BeeLogoPic} alt="" />
          </div>
          <div className="column">
            <img src={LineFillLetteringPic} alt="" />
            <img src={WellPic} alt="" />
            <img src={WaterColorPopsiclesPic} alt="" />
          </div>
        </div>
        {/* Only for mobile view */}
        <div
          id="main-carousel"
          className="js-flickity"
          data-flickity-options='{"wrapAround": true, "imagesLoaded": true, "adaptiveHeight": true}'
        >
          <div className="carousel-cell">
            <img src={AlohaPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={LosAngelesPostCardPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={GradientFluidPosterPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={TriFergPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={LineArtLogoPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={ThreeDimensionalBlendTextPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={FloralTextPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={RetroStripeLetteringPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={BeeLogoPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={LineFillLetteringPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={WellPic} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={WaterColorPopsiclesPic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
