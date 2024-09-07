import { useRef } from "react";
import "./guitarHeroPage.scss";
import { GUITAR_HERO_ANIMATIONS } from "./guitarHeroAnims";
import { getScrollAnimationObject } from "../../hooks/useScrollAnimation";

export default function GuitarHeroPage() {
  const headerRef = useRef<HTMLImageElement>(null);

  const a = getScrollAnimationObject(GUITAR_HERO_ANIMATIONS, headerRef);

  return (
    <div
      className="guitar-hero-page"
      style={{ height: "500vh" }}
      ref={headerRef}
    >
      <video
        src="videos/guitar-hero.mp4"
        autoPlay
        // style={{
        //   position: "fixed",
        //   width: "100%",
        //   scale: a.headerImgAnims.scale + "%",
        //   right: a.headerImgAnims.left + "%",
        // }}
      />
    </div>
  );
}
