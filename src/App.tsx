import { useState } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import { NavHeightContext } from "./context";
import AboutMe from "./sections/AboutMe";
import HomeSection from "./sections/HomeSection";
import ProjectSection from "./sections/ProjectSection";
import WorkExperience from "./sections/WorkExperience";
import "./styles/App.scss";

function App() {
  const [navHeight, setNavHeight] = useState(0); // Measured in Px

  return (
    <>
      <NavHeightContext.Provider value={{ navHeight, setNavHeight }}>
        <ErrorBoundary>
          <HomeSection />
          <Navbar />
          <AboutMe />
          <WorkExperience />
          <ProjectSection />
        </ErrorBoundary>
      </NavHeightContext.Provider>
    </>
  );
}

export default App;
