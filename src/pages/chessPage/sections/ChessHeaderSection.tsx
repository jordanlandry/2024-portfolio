import { useRef } from "react";
import { useAnimation } from "../../../hooks/useAnimation";
import {
  CHESS_HEADER_ANIMATIONS,
  CHESS_HEADER_IMAGE_ANIM,
} from "../chessPageAnims";
import {
  getScrollAnimationObject,
  hideElementScrolled,
} from "../../../hooks/useScrollAnimation";

export default function ChessHeaderSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerImageFadeIn = useAnimation(CHESS_HEADER_IMAGE_ANIM);
  const { headerImageAnims, eloHeaderAnims, eloInformationAnims } =
    getScrollAnimationObject(CHESS_HEADER_ANIMATIONS, headerRef);

  const eloHeaderRef = useRef<HTMLDivElement>(null);
  const eloHeaderRect = eloHeaderRef.current?.getBoundingClientRect();
  const headerDisplay = hideElementScrolled(headerRef);

  return (
    <div className="chess-page-header" ref={headerRef}>
      <img
        src="images/chess-thumbnail.png"
        alt="chess thumbnail"
        style={{
          opacity:
            window.scrollY === 0 ? headerImageFadeIn : headerImageAnims.opacity,

          top: "50%",
          transform: `scale(${headerImageAnims.scale}) translate(0%, -50%)`,
          transformOrigin: "top",
          position: "fixed",
          display: headerDisplay,
        }}
      />
      <h1
        ref={eloHeaderRef}
        style={{
          opacity: eloHeaderAnims.opacity,
          transform: `translateY(${eloHeaderAnims.translateY}%)`,
          position: "fixed",
          top: eloHeaderAnims.top + "%",
          display: headerDisplay,
        }}
      >
        2000 ELO
      </h1>
      <p
        className="h4"
        style={{
          position: "fixed",
          display: headerDisplay,
          textAlign: "center",
          opacity: eloInformationAnims.opacity,
          transform: `translateY(${eloHeaderAnims.translateY}%)`,
          top: eloHeaderRect
            ? eloHeaderRect.bottom + eloHeaderRect.height + "px"
            : "0px",
        }}
      >
        2000 ELO is the benchmark for being a strong chess player.
        <br />
        It is considered to be the level of a strong club player or a candidate
        master.
        <br />
        <p className="h6" style={{ marginTop: "24px" }}>
          (This rating was evaluated using Chess.com's rating estimator tool.)
        </p>
      </p>
    </div>
  );
}
