import React from "react";
import * as technologies from "data/technologies";
import { SkillsRow } from "./SkillsRow";

export function SkillsAndTechnologies() {
  return (
    <section id="skills-container" className="page-container">
      <div id="skills-header" className="section-header">
        <h2>Skills &amp; Technologies</h2>
      </div>
      <div id="skills-content">
        <SkillsRow
          technologyNames={[
            technologies.CPP,
            technologies.C,
            technologies.JAVA,
            technologies.PYTHON,
            technologies.JAVASCRIPT,
          ]}
        />
        <SkillsRow
          technologyNames={[
            technologies.ANGULAR,
            technologies.NODEJS,
            technologies.EXPRESS,
            technologies.HTML5,
            technologies.CSS3,
          ]}
        />
        <SkillsRow
          technologyNames={[
            technologies.DOCKER,
            technologies.GIT,
            technologies.LINUX
          ]}
        />
        <SkillsRow
          technologyNames={[
            technologies.ADOBE_ILLUSTRATOR,
            technologies.ADOBE_PHOTOSHOP,
            technologies.FIGMA
          ]}
        />
      </div>
    </section>
  );
}
