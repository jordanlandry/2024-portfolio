import "./styles/App.scss";
import AboutMe from "./sections/AboutMe";
import ProjectSection from "./sections/ProjectSection";
import WorkExperience from "./sections/WorkExperience";
import ChessPage from "./pages/ChessPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        {/* <AboutMe />
      <WorkExperience />
      <ProjectSection /> */}

        <ChessPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
