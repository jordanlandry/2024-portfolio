import { useRef } from "react";
import { getScrollAnimationObject } from "../../../hooks/useScrollAnimation";
import { CHESS_DEVELOPED_ANIMATIONS } from "../chessPageAnims";

export default function ChessDevelopmentSection() {
  const developedInRef = useRef<HTMLDivElement>(null);

  const { typescriptAnims, reactAnims, scssAnims, developedHeader } =
    getScrollAnimationObject(CHESS_DEVELOPED_ANIMATIONS, developedInRef);

  const developedInData = [
    { title: "TypeScript", icon: "typescript.svg", anims: typescriptAnims },
    { title: "React", icon: "react.svg", anims: reactAnims },
    { title: "Scss", icon: "sass.svg", anims: scssAnims },
  ];

  return (
    <>
      <div className="chess-page-developed-in-background"></div>
      <div className="chess-page-developed-in-section" ref={developedInRef}>
        <div className="chess-page-developed-in-content">
          <h1
            style={{
              position: "fixed",
              top: developedHeader.top + "%",
              opacity: developedHeader.opacity,
              zIndex: 1,
              textAlign: "center",
              transform: "translateX(-50%)",
            }}
          >
            Developed In
          </h1>

          {developedInData.map((data) => (
            <div
              key={data.title}
              className="flex-ac flex-column"
              style={{
                opacity: data.anims.opacity,
                gap: "1rem",
                position: "fixed",
                left: data.anims.left + "%",
                transform: "translateX(-50%)",
                top: data.anims.top + "%",
                scale: data.anims.scale,
              }}
            >
              <h5>{data.title}</h5>
              <img src={`images/icons/${data.icon}`} width="100" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
