import "animate.css/animate.min.css";
import React from "react";

import { AboutMe } from "components/AboutMe/AboutMe";
import { ArtProjects } from "components/ArtProjects/ArtProjects";
import { Experience } from "components/Experience/Experience";
import { LandingPage } from "components/LandingPage/LandingPage";
import { Navbar } from "components/NavBar/Navbar";
import { SWProjects } from "components/SwProjects/SwProjects";
import { ScrollToTopButton } from "components/Common/ScrollToTopButton";
import { SkillsAndTechnologies } from "components/SkillsAndTech/SkillsAndTechnologies";

import "styles/Globals.css";
import "styles/Scrollbar.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <LandingPage />
      <AboutMe />
      <Experience />
      <SkillsAndTechnologies />
      <SWProjects />
      <ArtProjects />
    </>
  );
}

export default App;
