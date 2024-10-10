import { createPortal } from "react-dom";
import useKeybind from "../hooks/useKeybind";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  open: boolean;
  className?: string;
  customStyles?: React.CSSProperties;
  onClose?: () => void;
};

export default function Modal({
  children,
  open,
  className,
  customStyles,
  onClose,
}: Props) {
  className = className ?? ""; // This is to prevent giving undefined as a className

  const MODAL_STYLES: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90dvh",
    borderRadius: "8px",
    zIndex: 1000,
    overflowY: "auto",
    ...customStyles,
  };

  const OVERLAY_STYLES: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
  };

  const exitModal = () => {
    if (!onClose || !open) return;
    onClose();
  };

  useKeybind({
    keybind: "Escape",
    action: exitModal,
    dependencies: [open, onClose],
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;
  return createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}></div>
      <div className={`modal ${className}`} style={MODAL_STYLES}>
        {children}
      </div>
    </>,

    document.getElementById("modal")!
  );
}
