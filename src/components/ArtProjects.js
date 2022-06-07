import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

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

import { ArtProjectPicture } from "./ArtProjectPicture";

export function ArtProjects() {
  return (
    <section id="graphic-design-container" className="page-container">
      <ScrollAnimation animateIn="animate__bounce" animateOnce={true} initiallyVisible={true}>
        <div id="graphic-design-header" className="section-header">
          <h2>Art and Design Projects</h2>
        </div>
      </ScrollAnimation>
      <div id="graphic-design-content">
        <div className="row">
          <div className="column">
            <ArtProjectPicture imgSrc={AlohaPic} altText="Aloha Pic" />
            <ArtProjectPicture imgSrc={LosAngelesPostCardPic} altText="LA" />
            <ArtProjectPicture imgSrc={GradientFluidPosterPic} altText="Gradient Poster" />
          </div>
          <div className="column">
            <ArtProjectPicture imgSrc={TriFergPic} altText="Tri Ferg Poster" />
            <ArtProjectPicture imgSrc={LineArtLogoPic} altText="Line Art Logo Poster" />
            <ArtProjectPicture imgSrc={ThreeDimensionalBlendTextPic} altText="3D Blend Text" />
          </div>
          <div className="column">
            <ArtProjectPicture imgSrc={FloralTextPic} altText="Floral Text" />
            <ArtProjectPicture imgSrc={RetroStripeLetteringPic} altText="Retro Stripe Lettering" />
            <ArtProjectPicture imgSrc={BeeLogoPic} altText="Bee Logo" />
          </div>
          <div className="column">
            <ArtProjectPicture imgSrc={LineFillLetteringPic} altText="Line Fill Lettering" />
            <ArtProjectPicture imgSrc={WellPic} altText="Well" />
            <ArtProjectPicture imgSrc={WaterColorPopsiclesPic} altText="Water Color Popsicles" />
          </div>
        </div>
        {/* Only for mobile view */}
        <div
          id="main-carousel"
          className="js-flickity"
          data-flickity-options='{"wrapAround": true, "imagesLoaded": true, "adaptiveHeight": true}'
        >
          <div className="carousel-cell">
            <img src={AlohaPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={LosAngelesPostCardPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={GradientFluidPosterPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={TriFergPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={LineArtLogoPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={ThreeDimensionalBlendTextPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={FloralTextPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={RetroStripeLetteringPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={BeeLogoPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={LineFillLetteringPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={WellPic} altText="" />
          </div>
          <div className="carousel-cell">
            <img src={WaterColorPopsiclesPic} altText="" />
          </div>
        </div>
      </div>
    </section>
  );
}
