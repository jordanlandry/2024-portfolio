import { useEffect, useState } from "react";

type Props = {
  from: number;
  to: number;
  duration: number;
  delay?: number;
};

export function useAnimation({ from, to, duration, delay }: Props) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let start: number;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (start === undefined) start = timestamp;

      const time = timestamp - start;
      const progress = Math.min(time / duration, 1);

      setValue(from + (to - from) * progress);

      if (time < duration) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration, delay]);

  return value;
}
