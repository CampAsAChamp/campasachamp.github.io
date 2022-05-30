import React from "react";

import { technologiesMap } from "../data/technologies";
import "../styles/style.css";

export function TechnologiesBar(props) {
  // Technologies is an array of strings listing the name of each technology
  const { technologyNames } = props;

  const technologies = technologyNames.map((name) => {
    return technologiesMap.get(name);
  });

  return (
    <div className="languages-bar">
      {technologies.map((tech) => {
        return (
          <img
            key={tech.name}
            className="languages-item"
            src={tech.image}
            title={tech.name + " Icon"}
            alt={tech.name + " Icon"}
          />
        );
      })}
    </div>
  );
}
