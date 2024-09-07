import { useRef, useState } from "react";
import useInterval from "../../../hooks/useInterval";

export default function ChessEvaluationSection() {
  const evalMoves = [
    { name: "Blunder", active: false, color: "red" },
    { name: "Inaccuracy", active: false, color: "yellow" },
    { name: "Best Move", active: true, color: "green" },
  ];

  const evalBarVideoRef = useRef<HTMLVideoElement>(null);
  const changePlaybackRate = () => {
    if (evalBarVideoRef.current) evalBarVideoRef.current.playbackRate = 1;
  };

  const [activeEvalMove, setActiveEvalMove] = useState(0);
  const previousEvalMove =
    (activeEvalMove + evalMoves.length - 1) % evalMoves.length;

  useInterval(() => {
    setActiveEvalMove((prev) => (prev + 1) % evalMoves.length);
  }, 3000);

  return (
    <div className="chess-page-evaluation-section">
      <h1 className="chess-page-evaluation-title">Live Evaluation</h1>
      <div className="chess-page-evaluation-moves">
        <video
          ref={evalBarVideoRef}
          onPlay={changePlaybackRate}
          src="videos/chess/eval-bar.mp4"
          autoPlay
          loop
          style={{ maxHeight: "80vh" }}
        ></video>

        <div className="chess-page-evaluation-move-names">
          {evalMoves.map((move, index) => (
            <h1
              key={move.name}
              onClick={() => setActiveEvalMove(index)}
              style={{ color: move.color }}
              className={
                `chess-eval-move` +
                (activeEvalMove === index ? " active" : "") +
                (previousEvalMove === index ? " fade-out" : "")
              }
            >
              {move.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
