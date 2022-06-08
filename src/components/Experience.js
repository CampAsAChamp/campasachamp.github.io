import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { ExperienceCard } from "components/ExperienceCard";

import { experiences } from "data/experiencesData";

import "styles/Experience.css";

export function Experience() {
  return (
    <>
      <section id="experience-container" className="page-container">
        <ScrollAnimation animateIn="animate__bounce" animateOnce={true} initiallyVisible={true}>
          <div id="experience-header" className="section-header">
            <h2>Experience</h2>
          </div>
        </ScrollAnimation>
        {experiences.map((exp, index) => {
          return <ExperienceCard key={exp.company_name} index={index + 1} experience={exp} />;
        })}
      </section>
    </>
  );
}
