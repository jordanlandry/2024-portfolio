import { useContext } from "react";
import FadeInOnScroll from "../components/FadeInOnScroll";
import Signature from "../components/Signature";
import "./homeSection.scss";
import { NavHeightContext } from "../context";

export default function HomeSection() {
  const nameAnimationDurationMs = 1500;
  const { navHeight } = useContext(NavHeightContext);

  return (
    <div
      id="home"
      className="home-section"
      style={{ height: `calc(100vh - ${navHeight}px)` }}
    >
      <Signature durationMs={nameAnimationDurationMs} />

      <FadeInOnScroll
        durationMs={nameAnimationDurationMs}
        delayMs={nameAnimationDurationMs + 500}
      >
        <h1>Software Developer</h1>
      </FadeInOnScroll>
    </div>
  );
}
