export default function ChessTimeControlSection() {
  return (
    <div className="chess-page-time-control">
      <h1>Select Your Time Control</h1>
      <video
        src="videos/chess/time-control.mp4"
        autoPlay
        loop
        style={{ maxHeight: "65vh" }}
      ></video>
    </div>
  );
}
