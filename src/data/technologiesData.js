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

const technologies = [
  {
    name: ADOBE_ILLUSTRATOR,
    image: Adobe_Illustrator_Icon,
  },
  {
    name: ADOBE_PHOTOSHOP,
    image: Adobe_Photoshop_Icon,
  },
  {
    name: ADOBE_XD,
    image: Adobe_XD_Icon,
  },
  {
    name: ANGULAR,
    image: Angular_Icon,
  },
  {
    name: C,
    image: C_Icon,
  },
  {
    name: CPP,
    image: CPP_Icon,
  },
  {
    name: CSS3,
    image: CSS3_Icon,
  },
  {
    name: DOCKER,
    image: Docker_Icon,
  },
  {
    name: EXPRESS,
    image: Express_Icon,
  },
  {
    name: FIGMA,
    image: Figma_Icon,
  },
  {
    name: GCP,
    image: GCP_Icon,
  },
  {
    name: GIT,
    image: Git_Icon,
  },
  {
    name: GO,
    image: Go_Icon,
  },
  {
    name: HTML5,
    image: HTML5_Icon,
  },
  {
    name: JAVA,
    image: Java_Icon,
  },
  {
    name: JAVASCRIPT,
    image: JavaScript_Icon,
  },
  {
    name: KUBERNETES,
    image: Kubernetes_Icon,
  },
  {
    name: LINUX,
    image: Linux_Icon,
  },
  {
    name: MYSQL,
    image: MySQL_Icon,
  },
  {
    name: NODEJS,
    image: NodeJS_Icon,
  },
  {
    name: NUMPY,
    image: NumPy_Icon,
  },
  {
    name: POSTGRES,
    image: Postgres_Icon,
  },
  {
    name: PYTHON,
    image: Python_Icon,
  },
  {
    name: REACT,
    image: React_Icon,
  },
  {
    name: REDIS,
    image: Redis_Icon,
  },
  {
    name: REDUX,
    image: Redux_Icon,
  },
  {
    name: COLDFUSION,
    image: ColdFusion_Icon,
  },
];

const technologiesMap = new Map();

technologies.forEach((item) => {
  technologiesMap.set(item.name, item);
});

export { technologies, technologiesMap };
