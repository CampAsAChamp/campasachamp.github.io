import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import ThreeDimensionalBlendTextPic from "assets/Projects/Art/3D_Blend_Text.svg";
import AlohaPic from "assets/Projects/Art/Aloha.png";
import BeeLogoPic from "assets/Projects/Art/Bee_Logo.svg";
import FloralTextPic from "assets/Projects/Art/Floral_Text.png";
import GradientFluidPosterPic from "assets/Projects/Art/Gradient_Fluid_Poster.svg";
import LineArtLogoPic from "assets/Projects/Art/Line_Art_Logo.svg";
import LineFillLetteringPic from "assets/Projects/Art/Line_Fill_Lettering.svg";
import LosAngelesPostCardPic from "assets/Projects/Art/Los_Angeles_Post_Card.png";
import RetroStripeLetteringPic from "assets/Projects/Art/Retro_Stripe_Lettering.svg";
import TriFergPic from "assets/Projects/Art/Tri_Ferg.svg";
import WaterColorPopsiclesPic from "assets/Projects/Art/Water_Color_Popsicles.svg";
import WellPic from "assets/Projects/Art/Well.png";

import { ArtProjectPicture } from "components/ArtProjectPicture";

import "styles/ArtProjects.css";

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
