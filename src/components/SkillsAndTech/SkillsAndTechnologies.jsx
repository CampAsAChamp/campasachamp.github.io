import React from "react";

import { SkillsRow } from "components/SkillsAndTech/SkillsRow";

import * as technologies from "data/technologies";

import "styles/SkillsAndTech/SkillsAndTechnologies.css";

export function SkillsAndTechnologies() {
  return (
    <section id="skills-container" className="page-container">
      <div id="skills-header" className="section-header">
        <h2>Skills & Technologies</h2>
      </div>
      <div id="skills-content">
        <SkillsRow
          technologyNames={[
            technologies.GO,
            technologies.JAVA,
            technologies.SPRING,
            technologies.PYTHON,
            technologies.CPP,
          ]}
        />
        <SkillsRow
          technologyNames={[
            technologies.JAVASCRIPT,
            technologies.REACT,
            technologies.REDUX,
            technologies.HTML5,
            technologies.CSS3,
          ]}
        />
        <SkillsRow
          technologyNames={[
            technologies.POSTGRES,
            technologies.KUBERNETES,
            technologies.DOCKER,
            technologies.GCP,
          ]}
        />
        <SkillsRow
          technologyNames={[
            technologies.GIT,
            technologies.LINUX,
            technologies.FIGMA,
          ]}
        />
      </div>
    </section>
  );
}
