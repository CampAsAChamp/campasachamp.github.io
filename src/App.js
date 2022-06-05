import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

import { AboutMe } from "components/AboutMe";
import { ArtProjects } from "components/ArtProjects";
import { Experience } from "components/Experience";
import { LandingPage } from "components/LandingPage";
import { Navbar } from "components/Navbar";
import { SWProjects } from "components/SWProjects";
import { ScrollToTopButton } from "components/ScrollToTopButton";
import { SkillsAndTechnologies } from "components/SkillsAndTechnologies";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <DarkModeToggle className="theme-switcher" onChange={setIsDarkMode} checked={isDarkMode} size={80} />
      <LandingPage />
      <AboutMe />
      <Experience />
      <SkillsAndTechnologies />
      <ArtProjects />
      <SWProjects />
    </>
  );
}

export default App;
