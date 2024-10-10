import "./styles/App.scss";
import AboutMe from "./sections/AboutMe";
import ProjectSection from "./sections/ProjectSection";
import WorkExperience from "./sections/WorkExperience";
import ChessPage from "./pages/chessPage/ChessPage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import GuitarHeroPage from "./pages/guitarHeroPage/GuitarHeroPage";
import RubiksCubePage from "./pages/rubiksCubePage/RubiksCubePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <AboutMe />
        <WorkExperience />
        <ProjectSection />

        {/* <ChessPage /> */}
        {/* <GuitarHeroPage /> */}
        {/* <RubiksCubePage /> */}
      </ErrorBoundary>
    </>
  );
}

export default App;
