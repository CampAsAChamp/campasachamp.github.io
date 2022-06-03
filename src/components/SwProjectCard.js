import parse from "html-react-parser";
import React from "react";

import GithubIcon from "assets/Dev_Icons/Github.svg";

import { COLORS } from "data/colorsData";

import { TechnologiesBar } from "./TechnologiesBar";
import { Svg } from "components/Svg";

export function SwProjectCard(props) {
  const { project, index } = props;

  return (
    <div className="sw-projects-cards" id={"sw-projects-card" + index}>
      <div className="card-content">
        <div className="sw-projects-title-container">
          <div className="sw-project-title card-title">{project.name}</div>
          <TechnologiesBar technologyNames={project.technologies} fillColor={COLORS.PURPLE} />
        </div>
        <div className="sw-projects-content">
          <div className="sw-projects-img-container">
            <img className="sw-projects-img" src={project.image} alt={project.imageAltText} />
          </div>
          <div className="sw-projects-info-container">
            <div className="sw-projects-text">
              <ul>{parse(project.textContent)}</ul>
            </div>
            <div className="sw-projects-button-row">
              <button
                type="button"
                className="button sw-projects-button"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Code
                <Svg className="github-button-icon" src={GithubIcon} fill="white" alt="Github Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
