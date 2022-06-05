import React from "react";

import BottomWavePic from "assets/Organic_Shapes/Bottom Wave.png";

import { projects } from "data/projectsData";

import { SwProjectCard } from "./SwProjectCard";
import ScrollAnimation from "react-animate-on-scroll";

export function SWProjects() {
  return (
    <section id="sw-projects-container" className="page-container">
      <ScrollAnimation animateIn="animate__fadeInRight" duration={0.5} animateOnce={true}>
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
