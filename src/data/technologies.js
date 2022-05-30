import PythonIcon from "assets/Dev_Icons/Purple/python-plain-wordmark.svg";
import CppIcon from "assets/Dev_Icons/Purple/cplusplus-plain.svg";
import JavaIcon from "assets/Dev_Icons/Purple/java-plain.svg";
import C_Icon from "assets/Dev_Icons/Purple/c-plain.svg";
import JavaScriptIcon from "assets/Dev_Icons/Purple/javascript-plain.svg";
import AngularIcon from "assets/Dev_Icons/Purple/angularjs-plain.svg";
import NodeJSIcon from "assets/Dev_Icons/Purple/nodejs-original.svg";
import ExpressIcon from "assets/Dev_Icons/Purple/express-original.svg";
import HTML5Icon from "assets/Dev_Icons/Purple/html5-plain-wordmark.svg";
import CSS3Icon from "assets/Dev_Icons/Purple/css3-plain-wordmark.svg";
import DockerIcon from "assets/Dev_Icons/Purple/docker-plain-wordmark.svg";
import GitIcon from "assets/Dev_Icons/Purple/git-plain-wordmark.svg";
import LinuxIcon from "assets/Dev_Icons/Purple/linux-plain.svg";
import IllustratorIcon from "assets/Dev_Icons/Purple/illustrator-plain.svg";
import PhotoshopIcon from "assets/Dev_Icons/Purple/photoshop-plain.svg";
import FigmaIcon from "assets/Dev_Icons/Purple/Figma-logo.svg";
import ReactIcon from "assets/Dev_Icons/Base/cf.svg";
import ReduxIcon from "assets/Dev_Icons/Base/cf.svg";
import GCPIcon from "assets/Dev_Icons/Base/cf.svg";
import PostgresIcon from "assets/Dev_Icons/Base/cf.svg";
import MySQLIcon from "assets/Dev_Icons/Purple/mysql-plain-wordmark.svg";
import GoIcon from "assets/Dev_Icons/Base/cf.svg";
import KubernetesIcon from "assets/Dev_Icons/Base/cf.svg";

export const CPP = "C++";
export const JAVA = "Java";
export const C = "C";
export const PYTHON = "Python";
export const JAVASCRIPT = "JavaScript";
export const GO = "Go (Golang)";
export const HTML5 = "HTML5";
export const CSS3 = "CSS3";
export const REACT = "React";
export const REDUX = "Redux";
export const ANGULAR = "Angular";
export const NODEJS = "NodeJS";
export const EXPRESS = "Express";
export const NUMPY = "NumPy";
export const POSTGRES = "Postgres";
export const MYSQL = "MySQL";
export const REDIS = "Redis";
export const KUBERNETES = "Kubernetes";
export const DOCKER = "Docker";
export const GCP = "Google Cloud Platform";
export const GIT = "Git";
export const LINUX = "Linux";
export const ADOBE_ILLUSTRATOR = "Adobe Illustrator";
export const ADOBE_PHOTOSHOP = "Adobe Photoshop";
export const FIGMA = "Figma";

const technologies = [
  {
    name: CPP,
    image: CppIcon,
  },
  {
    name: JAVA,
    image: JavaIcon,
  },
  {
    name: C,
    imagCe: C_Icon,
  },
  {
    name: PYTHON,
    image: PythonIcon,
  },
  {
    name: JAVASCRIPT,
    image: JavaScriptIcon,
  },
  {
    name: ANGULAR,
    image: AngularIcon,
  },
  {
    name: NODEJS,
    image: NodeJSIcon,
  },
  {
    name: EXPRESS,
    image: ExpressIcon,
  },
  {
    name: HTML5,
    image: HTML5Icon,
  },
  {
    name: CSS3,
    image: CSS3Icon,
  },
  {
    name: DOCKER,
    image: DockerIcon,
  },
  {
    name: GIT,
    image: GitIcon,
  },
  {
    name: LINUX,
    image: LinuxIcon,
  },
  {
    name: ADOBE_ILLUSTRATOR,
    image: IllustratorIcon,
  },
  {
    name: ADOBE_PHOTOSHOP,
    image: PhotoshopIcon,
  },
  {
    name: FIGMA,
    image: FigmaIcon,
  },
  {
    name: REACT,
    image: ReactIcon,
  },
  {
    name: REDUX,
    image: ReduxIcon,
  },
  {
    name: GCP,
    image: GCPIcon,
  },
  {
    name: POSTGRES,
    image: PostgresIcon,
  },
  {
    name: MYSQL,
    image: MySQLIcon,
  },
  {
    name: GO,
    image: GoIcon,
  },
  {
    name: KUBERNETES,
    image: KubernetesIcon,
  },
  {
    name: REDIS,
    image: "",
  },
  {
    name: NUMPY,
    image: "",
  },
];

const technologiesMap = new Map();

technologies.forEach((item) => {
  technologiesMap.set(item.name, item);
});

export { technologies, technologiesMap };
