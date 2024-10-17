import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CHESS_INFORMATION } from "../chessInformation";

export default function ChessInformationSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="chess-page-information">
      <h1 className="chess-information-page-title text-center">How It Works</h1>

      <Carousel responsive={responsive}>
        {CHESS_INFORMATION.map((info) => (
          <div key={info.title} className="chess-information-wrapper">
            <h3 className="chess-information-title">{info.title}</h3>
            <p>{info.description}</p>
            {info.thumbnail && (
              <img src={info.thumbnail} alt={info.title} width={"50%"} />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
