import React from "react";
import { experiences } from "data/experiences";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <>
      <section id="experience-container" className="page-container">
        <div id="experience-header" className="section-header">
          <h2>Experience</h2>
        </div>
        {experiences.map((exp, index) => {
          return <ExperienceCard key={exp.company_name} index={index + 1} experience={exp} />;
        })}
      </section>
    </>
  );
}
