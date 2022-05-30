import { Navbar } from "components/Navbar";
import { ScrollToTopButton } from "components/ScrollToTopButton";
import { LandingPage } from "components/LandingPage";
import { AboutMe } from "components/AboutMe";
import { SWProjects } from "components/SWProjects";
import { Experience } from "components/Experience";
import { SkillsAndTechnologies } from "components/SkillsAndTechnologies";
import { ArtProjects } from "components/ArtProjects";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
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
