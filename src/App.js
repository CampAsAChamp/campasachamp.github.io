import { AboutMe } from "components/AboutMe";
import { ArtProjects } from "components/ArtProjects";
import { Experience } from "components/Experience";
import { LandingPage } from "components/LandingPage";
import { Navbar } from "components/Navbar";
import { SWProjects } from "components/SWProjects";
import { ScrollToTopButton } from "components/ScrollToTopButton";
import { SkillsAndTechnologies } from "components/SkillsAndTechnologies";

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
