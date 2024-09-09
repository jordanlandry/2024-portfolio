import { useRef } from "react";
import { CHESS_INFORMATION } from "../chessInformation";
import { getScrollAnimationObject } from "../../../hooks/useScrollAnimation";
import { CHESS_INFORMATION_ANIMS } from "../chessPageAnims";

export default function ChessInformationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { contentAnims } = getScrollAnimationObject(
    CHESS_INFORMATION_ANIMS,
    sectionRef
  );

  return (
    <div
      className="chess-page-information"
      ref={sectionRef}
      style={{ height: CHESS_INFORMATION.length * 100 + "vh" }}
    >
      <h1 className="chess-information-page-title">How It Works</h1>
      <div
        className="chess-information-content"
        style={{
          opacity: contentAnims.opacity,
          width: CHESS_INFORMATION.length * 100 + "dvw",
          left:
            ((contentAnims.left as number) * CHESS_INFORMATION.length) / 2 +
            "vw",
          top: contentAnims.top,
        }}
      >
        {CHESS_INFORMATION.map((info) => (
          <div key={info.title} className="chess-information-box">
            <h2 className="chess-information-title">{info.title}</h2>
            <p>{info.description}</p>
            {info.thumbnail && (
              <img
                src={info.thumbnail}
                alt={info.title}
                width={"50%"}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
