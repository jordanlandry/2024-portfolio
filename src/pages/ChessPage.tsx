import { useRef } from "react";
import {
  hideElementScrolled,
  getScrollAnimationObject,
} from "../hooks/useScrollAnimation";
import "./chessPage.scss";
import { HEADER_ANIMATIONS, HEADER_IMAGE_ANIM } from "./chessPageAnims";
import { useAnimation } from "../hooks/useAnimation";

export default function ChessPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);

  const headerImageFadeIn = useAnimation(HEADER_IMAGE_ANIM);
  const { headerImageAnims, eloHeaderAnims, eloInformationAnims } =
    getScrollAnimationObject(HEADER_ANIMATIONS, headerRef);

  const eloHeaderRef = useRef<HTMLDivElement>(null);
  const eloHeaderRect = eloHeaderRef.current?.getBoundingClientRect();

  const headerDisplay = hideElementScrolled(headerRef);

  return (
    <div className="chess-page">
      <div className="chess-page-header" ref={headerRef}>
        <img
          src="images/chess-thumbnail.png"
          alt="chess thumbnail"
          style={{
            opacity:
              window.scrollY === 0
                ? headerImageFadeIn
                : headerImageAnims.opacity,

            top: "50%",
            transform: `scale(${headerImageAnims.scale}) translate(0%, -50%)`,
            transformOrigin: "top",
            position: "fixed",
            display: headerDisplay,
          }}
        />
        <h2
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
        </h2>
        <p
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
          It is considered to be the level of a strong club player or a
          candidate master.
        </p>
      </div>

      <div className="chess-page-section-1" ref={section1Ref}></div>
      <div className="chess-page-section-2"></div>
    </div>
  );
}
