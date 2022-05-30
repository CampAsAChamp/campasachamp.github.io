import GCPIcon from "assets/Dev_Icons/Base/cf.svg";
import GoIcon from "assets/Dev_Icons/Base/cf.svg";
import KubernetesIcon from "assets/Dev_Icons/Base/cf.svg";
import PostgresIcon from "assets/Dev_Icons/Base/cf.svg";
import ReactIcon from "assets/Dev_Icons/Base/cf.svg";
import ReduxIcon from "assets/Dev_Icons/Base/cf.svg";
import FigmaIcon from "assets/Dev_Icons/Purple/Figma-logo.svg";
import AngularIcon from "assets/Dev_Icons/Purple/angularjs-plain.svg";
import C_Icon from "assets/Dev_Icons/Purple/c-plain.svg";
import CppIcon from "assets/Dev_Icons/Purple/cplusplus-plain.svg";
import CSS3Icon from "assets/Dev_Icons/Purple/css3-plain-wordmark.svg";
import DockerIcon from "assets/Dev_Icons/Purple/docker-plain-wordmark.svg";
import ExpressIcon from "assets/Dev_Icons/Purple/express-original.svg";
import GitIcon from "assets/Dev_Icons/Purple/git-plain-wordmark.svg";
import HTML5Icon from "assets/Dev_Icons/Purple/html5-plain-wordmark.svg";
import IllustratorIcon from "assets/Dev_Icons/Purple/illustrator-plain.svg";
import JavaIcon from "assets/Dev_Icons/Purple/java-plain.svg";
import JavaScriptIcon from "assets/Dev_Icons/Purple/javascript-plain.svg";
import LinuxIcon from "assets/Dev_Icons/Purple/linux-plain.svg";
import MySQLIcon from "assets/Dev_Icons/Purple/mysql-plain-wordmark.svg";
import NodeJSIcon from "assets/Dev_Icons/Purple/nodejs-original.svg";
import PhotoshopIcon from "assets/Dev_Icons/Purple/photoshop-plain.svg";
import PythonIcon from "assets/Dev_Icons/Purple/python-plain-wordmark.svg";

export const ADOBE_ILLUSTRATOR = "Adobe Illustrator";
export const ADOBE_PHOTOSHOP = "Adobe Photoshop";
export const ANGULAR = "Angular";
export const C = "C";
export const CPP = "C++";
export const CSS3 = "CSS3";
export const DOCKER = "Docker";
export const EXPRESS = "Express";
export const FIGMA = "Figma";
export const GCP = "Google Cloud Platform";
export const GIT = "Git";
export const GO = "Go (Golang)";
export const HTML5 = "HTML5";
export const JAVA = "Java";
export const JAVASCRIPT = "JavaScript";
export const KUBERNETES = "Kubernetes";
export const LINUX = "Linux";
export const MYSQL = "MySQL";
export const NODEJS = "NodeJS";
export const NUMPY = "NumPy";
export const POSTGRES = "Postgres";
export const PYTHON = "Python";
export const REACT = "React";
export const REDIS = "Redis";
export const REDUX = "Redux";

const technologies = [
  {
    name: ADOBE_ILLUSTRATOR,
    image: IllustratorIcon,
  },
  {
    name: ADOBE_PHOTOSHOP,
    image: PhotoshopIcon,
  },
  {
    name: ANGULAR,
    image: AngularIcon,
  },
  {
    name: C,
    image: C_Icon,
  },
  {
    name: CPP,
    image: CppIcon,
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
    name: EXPRESS,
    image: ExpressIcon,
  },
  {
    name: FIGMA,
    image: FigmaIcon,
  },
  {
    name: GCP,
    image: GCPIcon,
  },
  {
    name: GIT,
    image: GitIcon,
  },
  {
    name: GO,
    image: GoIcon,
  },
  {
    name: HTML5,
    image: HTML5Icon,
  },
  {
    name: JAVA,
    image: JavaIcon,
  },
  {
    name: JAVASCRIPT,
    image: JavaScriptIcon,
  },
  {
    name: KUBERNETES,
    image: KubernetesIcon,
  },
  {
    name: LINUX,
    image: LinuxIcon,
  },
  {
    name: MYSQL,
    image: MySQLIcon,
  },
  {
    name: NODEJS,
    image: NodeJSIcon,
  },
  {
    name: NUMPY,
    image: "",
  },
  {
    name: POSTGRES,
    image: PostgresIcon,
  },
  {
    name: PYTHON,
    image: PythonIcon,
  },
  {
    name: REACT,
    image: ReactIcon,
  },
  {
    name: REDIS,
    image: "",
  },
  {
    name: REDUX,
    image: ReduxIcon,
  },
];

const technologiesMap = new Map();

technologies.forEach((item) => {
  technologiesMap.set(item.name, item);
});

export { technologies, technologiesMap };
