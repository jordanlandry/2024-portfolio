import "./chessPage.scss";
import ChessDatabaseSection from "./sections/ChessDatabaseSection";
import ChessDevelopmentSection from "./sections/ChessDevelopmentSection";
import ChessEvaluationSection from "./sections/ChessEvaluationSection";
import ChessHeaderSection from "./sections/ChessHeaderSection";
import ChessTimeControlSection from "./sections/ChessTimeControlSection";

export default function ChessPage() {
  return (
    <div className="chess-page">
      <ChessHeaderSection />
      <ChessDevelopmentSection />
      <ChessTimeControlSection />
      <ChessEvaluationSection />
      <ChessDatabaseSection />
    </div>
  );
}
