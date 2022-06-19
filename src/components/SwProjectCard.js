import parse from "html-react-parser";
import React from "react";

import GithubIcon from "assets/Dev_Icons/Github.svg";

import { Svg } from "components/Svg";

import { COLORS } from "data/colorsData";

import { TechnologiesBar } from "./TechnologiesBar";

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
          <div className="sw-projects-thumbnail-container">
            <img className="sw-projects-thumbnail" src={project.thumbnail} alt={project.name} title={project.name} />
          </div>
          <div className="sw-projects-info-container">
            <div className="sw-projects-text">
              <ul>{parse(project.textContent)}</ul>
            </div>
            <div className="sw-projects-button-row">
              <button
                type="button"
                className="button sw-projects-button hvr-wobble-vertical"
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
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
