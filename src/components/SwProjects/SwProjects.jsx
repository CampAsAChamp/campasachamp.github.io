import React from "react";

import { SwProjectCard } from "components/SwProjects/SwProjectCard";

import { projects } from "data/projects";

import "styles/SwProjects.css";

export function SWProjects() {
  return (
    <section id="sw-projects-container" className="page-container">
      <div id="sw-projects-header" className="section-header">
        <h2>Software Projects</h2>
      </div>
      {projects.map((project, index) => {
        return <SwProjectCard key={project.name} index={index + 1} project={project} />;
      })}
    </section>
  );
}
