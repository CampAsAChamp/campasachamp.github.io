import React from "react";

import BottomWavePic from "assets/Organic_Shapes/Bottom Wave.png";

import { projects } from "data/projects";

import { SwProjectCard } from "./SwProjectCard";

export function SWProjects() {
  return (
    <section id="sw-projects-container" className="page-container">
      <div id="sw-projects-header" className="section-header">
        <h2>Software Projects</h2>
      </div>
      {projects.map((project, index) => {
        return <SwProjectCard key={project.name} index={index + 1} project={project} />;
      })}
      <img id="bottom-wave" src={BottomWavePic} alt="" />
    </section>
  );
}
