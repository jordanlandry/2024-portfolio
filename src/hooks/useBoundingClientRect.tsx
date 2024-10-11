import { useEffect, useState } from "react";
import { RefType } from "../types";

const ALL_EVENTS = ["resize", "load", "scroll"] as const;
type EventType = (typeof ALL_EVENTS)[number];

type Props = {
  elementRef: RefType<HTMLElement | null>;
  events?: EventType[];
};

export default function useBoundingClientRect({
  elementRef,
  events = [...ALL_EVENTS],
}: Props) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    const updateRect = () => {
      if (element) setRect(element.getBoundingClientRect());
    };

    updateRect();

    events.forEach((event) => window.addEventListener(event, updateRect));
    
    return () => {
      events.forEach((event) => window.removeEventListener(event, updateRect));
    };
  }, [elementRef.current]);

  return rect;
}
