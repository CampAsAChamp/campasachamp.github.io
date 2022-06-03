import React from "react";

import { Svg } from "components/Svg";

import { technologiesMap } from "data/technologiesData";
import { COLORS } from "data/colorsData";

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
            <Svg src={tech.image} fill={COLORS.PURPLE} title={tech.name + " Icon"} alt={tech.name + " Icon"} />
            <div className="skills-caption">{tech.name}</div>
          </div>
        );
      })}
    </div>
  );
}
