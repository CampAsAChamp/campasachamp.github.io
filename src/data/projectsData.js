import ChickFilAThumbnail from "assets/Projects/Software/Chick_Fil_A.webp"
import DiggermanVideoThumbnailMp4 from "assets/Projects/Software/Diggerman.mp4";
import DiggermanVideoThumbnail from "assets/Projects/Software/Diggerman.webm";
import DiggermanThumbnail from "assets/Projects/Software/Diggerman.webp";
import FaceSwappingVideoThumbnailMp4 from "assets/Projects/Software/Face_Morphing.mp4";
import FaceSwappingVideoThumbnail from "assets/Projects/Software/Face_Morphing.webm";
import FaceSwappingThumbnail from "assets/Projects/Software/Face_Morphing.webp";
import ObjectDetectionThumbnail from "assets/Projects/Software/Object_Detection.webp";
import PersonalWebsiteThumbnail from "assets/Projects/Software/Portfolio_Thumbnail.webp";
import SpotifyPPThumbnail from "assets/Projects/Software/Spotify.webp";

import * as technologies from "./technologiesData";

const projects = [
  {
    name: "Spotify++",
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
    thumbnail: SpotifyPPThumbnail,
  },
  {
    name: "Diggerman",
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
    thumbnail: DiggermanThumbnail,
    videoThumbnail: DiggermanVideoThumbnail,
    videoThumbnailMp4: DiggermanVideoThumbnailMp4,
    isVideo: true,
  },
  {
    name: "Los Angeles Chick Fil A Scraper",
    technologies: [
      technologies.PYTHON,
      technologies.GITHUB
    ],
    textContent: `
                  <li>
                    Service that checks for free Chick Fil A each day at 8 AM PST using Python and GitHub Actions (for the automatic cron job) and sends me an email as a reminder to check my Chick Fil A app to claim my free Chick Fil A sandwich.
                  </li>
                  <li>
                    Free Chick Fil A is available if one of the following criteria for the sports teams are met
                  </li>
                  <ul>
                  <li>Los Angeles Angels score 7 or more runs at home</li>
                  <li>Anaheim Ducks score 5 or more goals at home</li>
                  <li>LAFC wins at home</li>
                    </ul>
                  `,
    link: "https://github.com/CampAsAChamp/los-angeles-chick-fil-a-scraper",
    thumbnail: ChickFilAThumbnail,
  },
  {
    name: "Object & Face Detection System",
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
    thumbnail: ObjectDetectionThumbnail,
  },
  {
    name: "Personal Website",
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
    thumbnail: PersonalWebsiteThumbnail,
  },
  {
    name: "Face Swapping",
    technologies: [technologies.PYTHON, technologies.NUMPY],
    textContent: `<li>
                    Piecewise affine warping, computes an affine transformation for triangles placed along the face.
                  </li>
                  <li>
                    Morphs a face into another one or can swap parts of a face(eyes, mouth, nose) to another face while
                    still maintaining the facial structure.
                  </li>`,
    link: "https://github.com/CampAsAChamp/FaceSwap",
    thumbnail: FaceSwappingThumbnail,
    videoThumbnail: FaceSwappingVideoThumbnail,
    videoThumbnailMp4: FaceSwappingVideoThumbnailMp4,
    isVideo: true,
  }
];

const projectMap = new Map();

projects.forEach((item) => {
  projectMap.set(item.name, item);
});

export { projects, projectMap };
