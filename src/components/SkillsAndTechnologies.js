import React from "react";

import { SkillsRow } from "components/SkillsRow";

import * as technologies from "data/technologiesData";
import ScrollAnimation from "react-animate-on-scroll";

export function SkillsAndTechnologies() {
  return (
    <section id="skills-container" className="page-container">
      <ScrollAnimation animateIn="animate__zoomIn" duration={0.5} animateOnce={true}>
        <div id="skills-header" className="section-header">
          <h2>Skills &amp; Technologies</h2>
        </div>
      </ScrollAnimation>
      <div id="skills-content">
        <SkillsRow
          technologyNames={[technologies.GO, technologies.PYTHON, technologies.JAVA, technologies.CPP, technologies.C]}
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
        <SkillsRow technologyNames={[technologies.POSTGRES, technologies.MYSQL]} />
        <SkillsRow
          technologyNames={[
            technologies.KUBERNETES,
            technologies.DOCKER,
            technologies.GCP,
            technologies.GIT,
            technologies.LINUX,
          ]}
        />
        <SkillsRow
          technologyNames={[technologies.ADOBE_ILLUSTRATOR, technologies.ADOBE_PHOTOSHOP, technologies.FIGMA]}
        />
      </div>
    </section>
  );
}
