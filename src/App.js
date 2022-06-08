import "animate.css/animate.min.css";

import { AboutMe } from "components/AboutMe";
import { ArtProjects } from "components/ArtProjects";
import { Experience } from "components/Experience";
import { LandingPage } from "components/LandingPage";
import { Navbar } from "components/Navbar";
import { SWProjects } from "components/SWProjects";
import { ScrollToTopButton } from "components/ScrollToTopButton";
import { SkillsAndTechnologies } from "components/SkillsAndTechnologies";
import { ThemeSwitcher } from "components/ThemeSwitcher";

import "styles/Globals.css";
import "styles/Responsive.css";
import "styles/Scrollbar.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <ThemeSwitcher />
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
