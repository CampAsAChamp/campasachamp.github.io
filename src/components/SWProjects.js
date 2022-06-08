import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import BottomWavePic from "assets/Organic_Shapes/Bottom_Wave.png";

import { SwProjectCard } from "components/SwProjectCard";

import { projects } from "data/projectsData";

import "styles/SwProjects.css";

export function SWProjects() {
  return (
    <section id="sw-projects-container" className="page-container">
      <ScrollAnimation animateIn="animate__bounce" animateOnce={true} initiallyVisible={true}>
        <div id="sw-projects-header" className="section-header">
          <h2>Software Projects</h2>
        </div>
      </ScrollAnimation>
      {projects.map((project, index) => {
        return <SwProjectCard key={project.name} index={index + 1} project={project} />;
      })}
      <img id="bottom-wave" src={BottomWavePic} alt="" />
    </section>
  );
}
