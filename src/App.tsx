import { ErrorBoundary } from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import ProjectSection from "./sections/ProjectSection";
import WorkExperience from "./sections/WorkExperience";
import "./styles/App.scss";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AboutMe />
        <Navbar />
        <WorkExperience />
        <ProjectSection />
      </ErrorBoundary>
    </>
  );
}

export default App;
