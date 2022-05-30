import React from "react";
import parse from "html-react-parser";

import { TechnologiesBar } from "./TechnologiesBar";
import "../styles/style.css";

export function ExperienceCard(props) {
  const { experience, index } = props;

  return (
    <div className="card" id={"card" + index}>
      <div className="experience-title-container">
        <div className="employer card-title">{experience.company_name}</div>
        <img className="experience-thumbnail" src={experience.logo} alt={experience.name} />
      </div>
      <div className="location">{experience.location}</div>
      <div className="secondary-title">
        <div className="position">{experience.position}</div>
        <div className="duration">{experience.duration}</div>
      </div>
      <div className="supporting-text">
        <ul>{parse(experience.textContent)}</ul>
      </div>
      <TechnologiesBar technologyNames={experience.technologies} />
    </div>
  );
}
