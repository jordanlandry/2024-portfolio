import FadeInOnScroll from "../components/FadeInOnScroll";
import Signature from "../components/Signature";
import "./homeSection.scss";

export default function HomeSection() {
  const nameAnimationDurationMs = 1500;

  return (
    <div className="home-section" id="home">
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
