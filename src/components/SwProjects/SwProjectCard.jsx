import parse from "html-react-parser";
import React from "react";

import GitHubIcon from "assets/Dev_Icons/GitHub.svg";

import { Svg } from "components/Common/Svg";

import { COLORS } from "data/colors";

import { TechnologiesBar } from "components/Common/TechnologiesBar";

export function SwProjectCard(props) {
  const { project, index } = props;

  return (
    <div className="card sw-projects-card" id={"sw-projects-card" + index}>
      <div className="sw-projects-title-container">
        <div className="sw-project-title card-title">{project.name}</div>
        <TechnologiesBar technologyNames={project.technologies} fillColor={COLORS.PURPLE} />
      </div>
      <div className="sw-projects-content">
        <div className="sw-projects-thumbnail-container">
          {
            project.isVideo ?
              <video className="sw-projects-thumbnail" src={project.videoThumbnail} alt={project.name} title={project.name} autoplay="autoplay" loop="loop" muted="muted" /> :
              <img className="sw-projects-thumbnail" src={project.thumbnail} alt={project.name} title={project.name} />
          }
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
              <Svg className="github-button-icon" src={GitHubIcon} fill="white" alt="Github Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
