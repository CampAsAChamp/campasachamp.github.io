import React from "react";

import { technologiesMap } from "data/technologies";

export function SkillsRow(props) {
  const { technologyNames } = props;

  const technologies = technologyNames.map((name) => {
    return technologiesMap.get(name);
  });

  return (
    <div className="skills-row">
      {technologies.map((tech) => {
        return (
          <div className="skills-icon-container" key={tech.name}>
            <img src={tech.image} title={tech.name + " Icon"} alt={tech.name + " Icon"} />
            <div className="skills-caption">{tech.name}</div>
          </div>
        );
      })}
    </div>
  );
}
