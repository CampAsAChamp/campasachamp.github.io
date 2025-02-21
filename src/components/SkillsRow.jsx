import React from "react";

import { Svg } from "components/Svg";

import { COLORS } from "data/colorsData";
import { technologiesMap } from "data/technologiesData";

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
            <a href={tech.link}>
              <Svg
                className="skills-icon hvr-wobble-vertical"
                src={tech.image}
                fill={COLORS.PURPLE}
                title={tech.name + " Icon"}
                alt={tech.name + " Icon"}
              />
            </a>
            <div className="skills-caption">{tech.name}</div>
          </div>
        );
      })}
    </div>
  );
}
