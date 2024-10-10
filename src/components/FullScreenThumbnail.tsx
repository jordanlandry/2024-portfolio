import useKeybind from "../hooks/useKeybind";
import { SetState } from "../types";

type Props = {
  src: string;
  smallSize: string;
  id: string;
  openId: string | null;
  setOpenId: SetState<string | null>;
} & React.HTMLProps<HTMLImageElement>;

export default function FullScreenThumbnail({
  src,
  id,
  smallSize,
  setOpenId,
  openId,
  ...rest
}: Props) {
  const OPEN_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh",
    borderRadius: "8px",
    zIndex: 1000,
    cursor: "zoom-out",
  } as React.CSSProperties;

  const handleClick = () => setOpenId(id);
  useKeybind({ keybind: "Escape", action: () => setOpenId(null) });

  const isFullScreen = openId === id;

  return (
    <>
      <img
        className={rest.className}
        src={src}
        alt="thumbnail"
        width={smallSize}
        onClick={handleClick}
      />
      {isFullScreen ? (
        <img
          alt="full-screen-thumbnail"
          onClick={() => setOpenId(null)}
          src={src}
          style={OPEN_STYLES}
          {...rest}
        />
      ) : null}
    </>
  );
}
