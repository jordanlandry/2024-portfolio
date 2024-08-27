import { AnimationPropsMap } from "../hooks/useScrollAnimation";

// Since this is the first element, we offset it by 100% of the window height to start the animation properly
const headerAnimOffset = -100;

export const HEADER_ANIMATIONS: { [key: string]: AnimationPropsMap } = {
  headerImageAnims: {
    opacity: {
      scrollTarget: "bottom",
      startValue: 1,
      topOffset: headerAnimOffset,
      keyframes: [
        { from: 1, to: 0.2, start: 10, end: 30 },
        { from: 0.2, to: 0, start: 50, end: 75 },
      ],
    },

    scale: {
      scrollTarget: "bottom",
      startValue: 1,
      topOffset: headerAnimOffset,
      keyframes: [{ from: 1, to: 0.8, start: 50, end: 75 }],
    },
  },

  eloHeaderAnims: {
    opacity: {
      scrollTarget: "top",
      startValue: 0,
      topOffset: headerAnimOffset,
      keyframes: [
        { from: 0, to: 1, start: 10, end: 25 },
        { from: 1, to: 0, start: 85, end: 90 },
      ],
    },

    top: {
      scrollTarget: "bottom",
      startValue: 100,
      topOffset: headerAnimOffset,
      keyframes: [
        { from: 100, to: 30, start: 10, end: 60 },
      ],
    },

    translateY: {
      scrollTarget: "bottom",
      startValue: 0,
      topOffset: headerAnimOffset,
      keyframes: [
        { from: 0, to: -50, start: 10, end: 60 },
      ],
    },
  },

  eloInformationAnims: {
    opacity: {
      scrollTarget: "top",
      startValue: 0,
      topOffset: headerAnimOffset,
      keyframes: [
        { from: 0, to: 1, start: 65, end: 80 },
        { from: 1, to: 0, start: 85, end: 90 },
      ],
    },
  },
};

export const HEADER_IMAGE_ANIM = {
  from: 0,
  to: 1,
  duration: 500,
  delay: 0,
};
