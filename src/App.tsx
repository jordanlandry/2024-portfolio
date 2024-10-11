import { ErrorBoundary } from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import HomeSection from "./sections/HomeSection";
import ProjectSection from "./sections/ProjectSection";
import WorkExperience from "./sections/WorkExperience";
import "./styles/App.scss";

function App() {
  return (
    <>
      <ErrorBoundary>
        <HomeSection />
        <Navbar />
        <AboutMe />
        <WorkExperience />
        <ProjectSection />
      </ErrorBoundary>
    </>
  );
}

export default App;
