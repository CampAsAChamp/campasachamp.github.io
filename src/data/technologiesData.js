import Adobe_Illustrator_Icon from "assets/Dev_Icons/Adobe_Illustrator.svg";
import Adobe_Photoshop_Icon from "assets/Dev_Icons/Adobe_Photoshop.svg";
import Adobe_XD_Icon from "assets/Dev_Icons/Adobe_XD.svg";
import Angular_Icon from "assets/Dev_Icons/Angular.svg";
import C_Icon from "assets/Dev_Icons/C.svg";
import CPP_Icon from "assets/Dev_Icons/CPP.svg";
import CSS3_Icon from "assets/Dev_Icons/CSS3.svg";
import ColdFusion_Icon from "assets/Dev_Icons/ColdFusion.svg";
import Docker_Icon from "assets/Dev_Icons/Docker.svg";
import Express_Icon from "assets/Dev_Icons/Express.svg";
import Figma_Icon from "assets/Dev_Icons/Figma.svg";
import GCP_Icon from "assets/Dev_Icons/GCP.svg";
import Git_Icon from "assets/Dev_Icons/Git.svg";
import Go_Icon from "assets/Dev_Icons/Go.svg";
import HTML5_Icon from "assets/Dev_Icons/HTML5.svg";
import Java_Icon from "assets/Dev_Icons/Java.svg";
import JavaScript_Icon from "assets/Dev_Icons/JavaScript.svg";
import Kubernetes_Icon from "assets/Dev_Icons/Kubernetes.svg";
import Linux_Icon from "assets/Dev_Icons/Linux.svg";
import MySQL_Icon from "assets/Dev_Icons/MySQL.svg";
import NumPy_Icon from "assets/Dev_Icons/NumPy.svg";
import NodeJS_Icon from "assets/Dev_Icons/NodeJS.svg";
import Postgres_Icon from "assets/Dev_Icons/Postgres.svg";
import Python_Icon from "assets/Dev_Icons/Python.svg";
import React_Icon from "assets/Dev_Icons/React.svg";
import Redis_Icon from "assets/Dev_Icons/Redis.svg";
import Redux_Icon from "assets/Dev_Icons/Redux.svg";
import TypeScript_Icon from "assets/Dev_Icons/TypeScript.svg";

export const ADOBE_ILLUSTRATOR = "Adobe Illustrator";
export const ADOBE_PHOTOSHOP = "Adobe Photoshop";
export const ADOBE_XD = "Adobe XD";
export const ANGULAR = "Angular";
export const C = "C";
export const COLDFUSION = "ColdFusion";
export const CPP = "C++";
export const CSS3 = "CSS3";
export const DOCKER = "Docker";
export const EXPRESS = "Express";
export const FIGMA = "Figma";
export const GCP = "Google Cloud Platform (GCP)";
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
export const TYPESCRIPT = "TypeScript";

const technologies = [
  {
    name: ADOBE_ILLUSTRATOR,
    image: Adobe_Illustrator_Icon,
    link: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: ADOBE_PHOTOSHOP,
    image: Adobe_Photoshop_Icon,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: ADOBE_XD,
    image: Adobe_XD_Icon,
    link: "https://www.adobe.com/products/xd.html",
  },
  {
    name: ANGULAR,
    image: Angular_Icon,
    link: "https://angular.io/",
  },
  {
    name: C,
    image: C_Icon,
    link: "http://www.open-std.org/jtc1/sc22/wg14/",
  },
  {
    name: COLDFUSION,
    image: ColdFusion_Icon,
    link: "https://www.adobe.com/products/coldfusion-family.html",
  },
  {
    name: CPP,
    image: CPP_Icon,
    link: "https://isocpp.org/",
  },
  {
    name: CSS3,
    image: CSS3_Icon,
    link: "https://www.w3.org/TR/CSS/#css",
  },
  {
    name: DOCKER,
    image: Docker_Icon,
    link: "https://www.docker.com/",
  },
  {
    name: EXPRESS,
    image: Express_Icon,
    link: "https://expressjs.com/",
  },
  {
    name: FIGMA,
    image: Figma_Icon,
    link: "https://www.figma.com/",
  },
  {
    name: GCP,
    image: GCP_Icon,
    link: "https://cloud.google.com/",
  },
  {
    name: GIT,
    image: Git_Icon,
    link: "https://git-scm.com/",
  },
  {
    name: GO,
    image: Go_Icon,
    link: "https://go.dev/",
  },
  {
    name: HTML5,
    image: HTML5_Icon,
    link: "https://html.spec.whatwg.org/",
  },
  {
    name: JAVA,
    image: Java_Icon,
    link: "https://www.oracle.com/java/",
  },
  {
    name: JAVASCRIPT,
    image: JavaScript_Icon,
    link: "http://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
  },
  {
    name: KUBERNETES,
    image: Kubernetes_Icon,
    link: "https://kubernetes.io/",
  },
  {
    name: LINUX,
    image: Linux_Icon,
    link: "https://www.kernel.org/",
  },
  {
    name: MYSQL,
    image: MySQL_Icon,
    link: "https://www.mysql.com/",
  },
  {
    name: NODEJS,
    image: NodeJS_Icon,
    link: "https://nodejs.org/",
  },
  {
    name: NUMPY,
    image: NumPy_Icon,
    link: "https://numpy.org/",
  },
  {
    name: POSTGRES,
    image: Postgres_Icon,
    link: "https://www.postgresql.org/",
  },
  {
    name: PYTHON,
    image: Python_Icon,
    link: "https://www.python.org/",
  },
  {
    name: REACT,
    image: React_Icon,
    link: "https://reactjs.org/",
  },
  {
    name: REDIS,
    image: Redis_Icon,
    link: "https://redis.io/",
  },
  {
    name: REDUX,
    image: Redux_Icon,
    link: "https://redux.js.org/",
  },
  {
    name: TYPESCRIPT,
    image: TypeScript_Icon,
    link: "https://www.typescriptlang.org/",
  },
];

const technologiesMap = new Map();

technologies.forEach((item) => {
  technologiesMap.set(item.name, item);
});

export { technologies, technologiesMap };
