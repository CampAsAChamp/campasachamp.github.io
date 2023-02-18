import ArculesLogo from "assets/Company_Logos/Arcules.svg";
import IDTechLogo from "assets/Company_Logos/ID_Tech.svg";
import RaytheonLogo from "assets/Company_Logos/Raytheon.svg";
import ReazonLogo from "assets/Company_Logos/Reazon.svg";

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
                    Currently working on the <a href="https://manage.arcules.com/login/" target="_blank" rel="noopener noreferrer">product</a> team across the whole stack
                  </li>
                  <li>
                    Writing microservices & REST APIs with Go, and Postgres.
                  </li>
                  <li>
                    Working on the frontend with React & Redux. 
                  </li>
                  <li>
                    Utilizing Kubernetes, Docker, Google Cloud Platform and Spinnaker for maintaining the services and applications.
                  </li>`,
    technologies: [
      technologies.GO,
      technologies.POSTGRES,
      technologies.REACT,
      technologies.REDUX,
      technologies.GCP,
      technologies.KUBERNETES,
      technologies.DOCKER,
    ],
    logo: ArculesLogo,
    color: COLORS.ARCULES,
  },
  {
    company_name: RAYTHEON,
    location: "Los Angeles, CA",
    position: "Software Engineer 1",
    duration: "Jan 2020 - Dec 2021 (2 yrs)",
    textContent: `<li>
                      Worked on <a href="https://www.raytheon.com/capabilities/products/space-based-early-warning" target="_blank" rel="noopener noreferrer">Space Based Early Missile Warning Satellite</a> on the Ground Software team
                  </li>
                  <li>
                      Developed Space Mission Data Processing <a href="https://www.raytheonintelligenceandspace.com/what-we-do/space-solutions/missile-warning-and-defense/forge" target="_blank" rel="noopener noreferrer">Framework</a> in C++ 11 and Google Protobufs to stream and process terabytes of real-time satellite data each day with extremely high reliability, performance, and fault tolerance.
                  </li>
                  <li>
                      Implemented modules in Space to Earth message simulation with Python & C++, allowing for extensive development and testing without needing Space hardware.
                  </li>
                  <li>
                      Optimized statistical feature generation algorithm leading to a 83% improvement in runtime.
                  </li>
                  <li>
                      Received program-wide performance recognition award for outstanding and impressive performance (July 2020, June 2021, Sept 2021); Recognition Awards for collaboration (June 2020, Aug 2020, Jan 2021).
                  </li>`,
    technologies: [technologies.CPP, technologies.C, technologies.PYTHON, technologies.DOCKER],
    logo: RaytheonLogo,
    color: COLORS.RAYTHEON,
  },
  {
    company_name: ID_TECH,
    location: "Cypress, CA",
    position: "Software Engineer Co-op",
    duration: "Sept 2018 - Dec 2018 (4 mos)",
    textContent: `<li>
                    Created responsive mobile web app <a href="https://www.vivostate.com/" target="_blank" rel="noopener noreferrer">ViVOstate Terminal Management System (TMS)</a> with Node, Express, and Angular for viewing credit card reader device information and performing remote firmware updates in the field.
                </li>
                <li>
                    Built a web based barcode scanner to allow easy lookup of a device's status and specs using a smartphone/laptop camera, resulting in a 78% faster average task time.
                </li>
                <li>
                    Added GPS location tracking for quickly viewing devices on a map, utilizing the <a href="https://developers.google.com/maps/documentation" target="_blank" rel="noopener noreferrer"> Google Maps API</a>.
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
    duration: "Jan 2018 - Mar 2018 (3 mos)",
    textContent: `<li>
                    Implemented RCampus online classroom learning tools and RESTful APIs with Java and MySQL for universities such as University of Virginia and Indiana University to use in courses.
                </li>
                <li>
                    Created Google Sheets parsing tool using the
                    <a href="https://developers.google.com/sheets/api" target="_blank" rel="noopener noreferrer">Google Sheets API</a> for personalized site designs.
                </li>`,
    technologies: [
      technologies.JAVA,
      technologies.MYSQL,
      technologies.JAVASCRIPT,
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
