import FaceSwappingThumbnail from "assets/Projects/Face Morphing.gif";
import ObjectDetectionThumbnail from "assets/Projects/Object Detection.jpg";
import PersonalWebsiteThumbnail from "assets/Projects/Portfolio_Thumbnail.png";
import SpotifyPPThumbnail from "assets/Projects/Spotify.png";
import DiggermanThumbnail from "assets/Projects/diggerman.gif";

import * as technologies from "./technologiesData";

export const SPOTIFYPP = "Spotify++";
export const DIGGERMAN = "Diggerman";
export const FACE_SWAPPING = "Face Swapping";
export const OBJECT_AND_FACE_DETECTION_SYSTEM = "Object & Face Detection System";
export const PERSONAL_WEBSITE = "Personal Website";

const projects = [
  {
    name: SPOTIFYPP,
    technologies: [
      technologies.NODEJS,
      technologies.EXPRESS,
      technologies.ANGULAR,
      technologies.TYPESCRIPT,
      technologies.HTML5,
      technologies.CSS3,
    ],
    textContent: `<li>
                    Created Spotify browser using the
                    <a
                      href="https://developer.spotify.com/documentation/web-api/"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Spotify Web API</a
                    >
                    with custom front end interface built from the ground up using
                    <a 
                      href="https://github.com/khanhas/spicetify-cli" target="_blank" 
                      rel="noopener noreferrer"
                      >Spicetify</a
                    >
                    to inject custom CSS and Javascript into the Spotify client.
                  </li>
                  <li>
                    Adds additional track information the user normally doesn't have access to such as dance-ability,
                    energy, acousticness, instrumentalness, and liveness provided by the track endpoint.
                  </li>
                 `,
    link: "https://github.com/CampAsAChamp/SpotifyPP",
    image: SpotifyPPThumbnail,
  },
  {
    name: DIGGERMAN,
    technologies: [technologies.CPP, technologies.OPEN_GL],
    textContent: `<li>
                    Designed and implemented a large 2D Dig Dug-like game in C++ driven by
                    <a href="https://www.opengl.org/" target="_blank" rel="noopener noreferrer">OpenGL</a>, utilizing
                    A.I. enemies and sprites with light animations.
                  </li>
                  <li>
                    Coordinated with team members to realize the groups design goals.
                  </li>
                  <li>
                    Added logic for digging through the game board, as well as falling boulders to be an obstacle and
                    kill the player if the player wasn't moving.
                  </li>
                  <li>
                    Implemented gold nuggets, score system and hidden oil barrels power ups.
                  </li>`,
    link: "https://github.com/CampAsAChamp/DiggerMan",
    image: DiggermanThumbnail,
  },
  {
    name: FACE_SWAPPING,
    technologies: [technologies.PYTHON, technologies.NUMPY],
    textContent: `<li>
                    Piecewise affine warping, computes an affine transformation for triangles placed along the face.
                  </li>
                  <li>
                    Morphs a face into another one or can swap parts of a face(eyes, mouth, nose) to another face while
                    still maintaining the facial structure.
                  </li>`,
    link: "https://github.com/CampAsAChamp/FaceSwap",
    image: FaceSwappingThumbnail,
  },
  {
    name: OBJECT_AND_FACE_DETECTION_SYSTEM,
    technologies: [technologies.PYTHON, technologies.NUMPY],
    textContent: `<li>
                    Python program that uses gradient features of an image for edge detection.
                  </li>
                  <li>
                    Uses sliding window classification for detecting objects based on a template generated from test images. 
                  </li>
                  <li>
                    Can detect any object including faces given test data.
                  </li>`,
    link: "https://github.com/CampAsAChamp/ObjectDetection",
    image: ObjectDetectionThumbnail,
  },
  {
    name: PERSONAL_WEBSITE,
    technologies: [
      technologies.REACT,
      technologies.JAVASCRIPT,
      technologies.HTML5,
      technologies.CSS3,
      technologies.FIGMA,
    ],
    textContent: `<li>
                    Static React, Javascript, HTML and CSS website built to showcase my design skills along with experience and projects I've had over the years.
                  </li>
                  <li>
                    Created mockup design with Figma.
                  </li>`,
    link: "https://github.com/CampAsAChamp/Personal-Website",
    image: PersonalWebsiteThumbnail,
  },
];

const projectMap = new Map();

projects.forEach((item) => {
  projectMap.set(item.name, item);
});

export { projects, projectMap };
