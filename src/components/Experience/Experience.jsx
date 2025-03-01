import React from 'react';

import { ExperienceCard } from 'components/Experience/ExperienceCard';

import { experiences } from 'data/experiences';

import 'styles/Experience/Experience.css';

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
