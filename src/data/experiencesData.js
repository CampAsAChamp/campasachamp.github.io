import RaytheonLogo from "assets/Company_Logos/Raytheon.svg";
import ReazonLogo from "assets/Company_Logos/Reazon.svg";
import IDTechLogo from "assets/Company_Logos/ID_Tech.svg";

import * as technologies from "data/technologiesData";

import { COLORS } from "./colorsData";

export const RAYTHEON = "Raytheon Intelligence & Space";
export const ARCULES = "Arcules";
export const ID_TECH = "ID Tech";
export const REAZON = "Reazon Systems";

const experiences = [
  {
    company_name: ARCULES,
    location: "Irvine, CA",
    position: "Software Engineer 2",
    duration: "Jan 2022 - Present",
    textContent: `<li>
                    Writing microservices & REST APIs with Go, Postgres, and Redis.
                  </li>
                  <li>
                    Building microapps for the frontend with React & Redux. Utilizing Kubernetes, Docker, Google Cloud Platform and
                  </li>
                  <li>
                    Spinnaker for maintaining the services and applications.
                  </li>`,
    technologies: [
      technologies.GO,
      technologies.POSTGRES,
      technologies.REDIS,
      technologies.REACT,
      technologies.REDUX,
      technologies.GCP,
      technologies.KUBERNETES,
      technologies.DOCKER,
    ],
    logo: "",
    color: COLORS.ARCULES,
  },
  {
    company_name: RAYTHEON,
    location: "Los Angeles, CA",
    position: "Software Engineer 1",
    duration: "Jan 2020 - Dec 2021 (2 yrs)",
    textContent: `<li>
                    Developed Space Mission Data Processing Framework in C++ 11 to stream and process terabytes of real-time
                    satellite data each day with extremely high reliability and performance.
                </li>
                <li>
                    Implemented modules in Space to Earth message simulation, allowing for extensive development and testing
                    without needing Space hardware.
                </li>
                <li>
                    Designed multi-threaded data infrastructure in Ground System Software to be used in Space Based Missile
                    Warning System.
                </li>
                <li>
                    Built Docker containers to break up monolithic executable, increasing scalability and optimizing speed.
                </li>
                <li>
                    Created multiple unit and integration tests with mock objects using Google Test & Google Mock testing
                    frameworks.
                </li>
                <li>
                    Received program-wide performance recognition award for outstanding and impressive performance (July
                    2020); Recognition Awards for collaboration (June 2020, Aug 2020, Jan 2021).
                </li>`,
    technologies: [technologies.CPP, technologies.C, technologies.DOCKER, technologies.PYTHON],
    logo: RaytheonLogo,
    color: COLORS.RAYTHEON,
  },
  {
    company_name: ID_TECH,
    location: "Cypress, CA",
    position: "Software Engineer Co-op",
    duration: "Sept 2018 - Dec 2018 (4 mos)",
    textContent: `<li>
                    Created a mobile web app <a href="https://www.vivostate.com/" target="_blank" rel="noopener noreferrer">ViVOstate Terminal Management System (TMS)</a> with Node & Express for viewing device information and performing remote firmware
                    updates to credit card readers in the field.
                    
                </li>
                <li>
                    Built a web based barcode scanner with Angular, Javascript, HTML & CSS to allow easy lookup of a credit
                    card reader's status and specifications with a smartphone camera or laptop webcam.
                </li>
                <li>
                    Added GPS location of devices on a map for quickly viewing our readers location on a map, utilizing the <a href="https://developers.google.com/maps/documentation" target="_blank" rel="noopener noreferrer"> Google Maps API</a>.
                </li>
                <li>
                    Designed wireframes, mockups and UX flows with Figma for rapidly prototyping designs to stakeholders.
                </li>`,
    technologies: [
      technologies.NODEJS,
      technologies.EXPRESS,
      technologies.ANGULAR,
      technologies.JAVASCRIPT,
      technologies.HTML5,
      technologies.CSS3,
      technologies.FIGMA,
    ],
    logo: IDTechLogo,
    color: COLORS.ID_TECH,
  },
  {
    company_name: REAZON,
    location: "Santa Ana, CA",
    position: "Software Engineer Intern",
    duration: "Jan 2018 - Mar 2018",
    textContent: `<li>
                    Implemented RCampus online classroom learning tools and RESTful APIs with Java and MySQL for universities
                    such as University of Virginia and Indiana University to use in courses.
                </li>
                <li>
                    Created Google Sheets parsing tool using the
                    <a href="https://developers.google.com/sheets/api" target="_blank" rel="noopener noreferrer"
                    >Google Sheets API</a> for personalized site designs (students or professor).
                </li>`,
    technologies: [
      technologies.JAVA,
      technologies.JAVASCRIPT,
      technologies.MYSQL,
      technologies.HTML5,
      technologies.CSS3,
    ],
    logo: ReazonLogo,
    color: COLORS.REAZON,
  },
];

const experienceMap = new Map();

experiences.forEach((item) => {
  experienceMap.set(item.company_name, item);
});

export { experiences, experienceMap };
