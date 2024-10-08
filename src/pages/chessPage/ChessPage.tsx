import "./chessPage.scss";
import ChessDatabaseSection from "./sections/ChessDatabaseSection";
import ChessDevelopmentSection from "./sections/ChessDevelopmentSection";
import ChessEvaluationSection from "./sections/ChessEvaluationSection";
import ChessFooterSection from "./sections/ChessFooterSection";
import ChessHeaderSection from "./sections/ChessHeaderSection";
import ChessInformationSection from "./sections/ChessInformationSection";
import ChessTimeControlSection from "./sections/ChessTimeControlSection";

export default function ChessPage() {
  return (
    <div className="chess-page">
      <ChessHeaderSection />
      <ChessDevelopmentSection />
      <ChessInformationSection />
      <ChessTimeControlSection />
      <ChessEvaluationSection />
      <ChessDatabaseSection />
      <ChessFooterSection />
    </div>
  );
}
