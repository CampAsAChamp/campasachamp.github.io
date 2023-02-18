import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { SkillsRow } from "components/SkillsRow";

import * as technologies from "data/technologiesData";

import "styles/SkillsAndTechnologies.css";

export function SkillsAndTechnologies() {
  return (
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce offset={-155}>
      <section id="skills-container" className="page-container">
        <div id="skills-header" className="section-header">
          <h2>Skills & Technologies</h2>
        </div>
        <div id="skills-content">
          <SkillsRow
            technologyNames={[
              technologies.GO,
              technologies.PYTHON,
              technologies.JAVA,
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
              technologies.MYSQL,
              technologies.KUBERNETES,
              technologies.DOCKER,
              technologies.GCP,
            ]}
          />
          <SkillsRow
            technologyNames={[
              technologies.GIT,
              technologies.LINUX,
              technologies.ADOBE_ILLUSTRATOR,
              technologies.ADOBE_PHOTOSHOP,
              technologies.FIGMA,
            ]}
          />
        </div>
      </section>
    </ScrollAnimation>
  );
}
