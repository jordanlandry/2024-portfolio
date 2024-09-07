import { useEffect, useState } from "react";
import { RefType } from "../types";

type Keyframe = {
  from: number | string;
  to: number | string;
  start: number;
  end: number;
};

type ScrollTarget = "top" | "bottom";
type AnimationProps = {
  startValue?: number | string;
  bottomOffset?: number; // Percentage of screen height to offset the start and end of the keyframes
  topOffset?: number; // Percentage of screen height to offset the start and end of the keyframes
  keyframes: Keyframe[];
  scrollTarget?: ScrollTarget; // 'top' or 'bottom'
};

type Props = AnimationProps & { element: RefType<HTMLElement | null> };

export function useScrollAnimation({
  startValue,
  element,
  keyframes,
  scrollTarget = "top",
  bottomOffset = 0,
  topOffset = 0,
}: Props) {
  const [value, setValue] = useState<number | string>(startValue ?? 0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleScroll = () => {
      if (!element?.current) return;

      const scroll = window.scrollY;
      const height = element.current.clientHeight;
      const offsetTop = element.current.offsetTop;

      const start = offsetTop - window.innerHeight * (topOffset / 100);
      const end =
        offsetTop + height - window.innerHeight * (bottomOffset / 100);

      if (scroll <= start) {
        setValue(keyframes[0].from);
        return;
      }

      if (scroll >= end) {
        setValue(keyframes[keyframes.length - 1].to);
        return;
      }

      let activeKeyframe: Keyframe | undefined;
      let nextKeyframe: Keyframe | undefined;

      for (let i = 0; i < keyframes.length; i++) {
        const keyframe = keyframes[i];

        const keyframeStart = start + ((end - start) * keyframe.start) / 100;
        const keyframeEnd =
          start +
          ((end - start) * (keyframe.end ?? keyframes[i + 1]?.start ?? 100)) /
            100;

        if (scroll >= keyframeStart && scroll <= keyframeEnd) {
          activeKeyframe = keyframe;
          nextKeyframe = keyframes[i + 1];
          break;
        }

        // If you pass the last keyframe, set the active keyframe to the last keyframe
        if (i === keyframes.length - 1) {
          activeKeyframe = keyframe;
        }
      }

      if (activeKeyframe) {
        const { from, to } = activeKeyframe;
        const keyframeStart =
          start + ((end - start) * activeKeyframe.start) / 100;
        const keyframeEnd =
          start +
          ((end - start) * (activeKeyframe.end ?? nextKeyframe?.start ?? 100)) /
            100;

        if (typeof from === "number" && typeof to === "number") {
          const progress =
            (scroll - keyframeStart) / (keyframeEnd - keyframeStart);
          const clampedProgress = Math.max(0, Math.min(1, progress));
          setValue(from + (to - from) * clampedProgress);
        } else {
          setValue(to);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", onScroll);

    onScroll(); // Initial call to set value

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, [element, keyframes, scrollTarget, topOffset, bottomOffset, startValue]);

  return value;
}

export type AnimationPropsMap = { [key: string]: AnimationProps };
export function getScrollAnimation(
  props: { [key: string]: AnimationProps },
  ref: RefType<HTMLElement | null>
) {
  const animations: { [key: string]: number | string } = {};

  for (const key in props) {
    animations[key] = useScrollAnimation({ ...props[key], element: ref });
  }

  return animations;
}

export function getScrollAnimationObject(
  anims: { [key: string]: AnimationPropsMap },
  ref: RefType<HTMLElement | null>
) {
  const animations: { [key: string]: { [key: string]: number | string } } = {};

  for (const key in anims) {
    animations[key] = getScrollAnimation(anims[key], ref);
  }

  return animations as {
    [key in keyof typeof anims]: { [key: string]: number | string };
  };
}

export function hideElementScrolled(
  ref: RefType<HTMLElement | null>,
  start = ""
) {
  const animation: AnimationProps = {
    scrollTarget: "top",
    topOffset: 0,
    startValue: start,
    keyframes: [
      { from: start, to: start, start: 0, end: 100 },
      { from: start, to: "none", start: 100, end: 101 },
    ],
  };

  return useScrollAnimation({ ...animation, element: ref }) as string;
}
