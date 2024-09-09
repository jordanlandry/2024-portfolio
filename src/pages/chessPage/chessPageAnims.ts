import { AnimationPropsMap } from "../../hooks/useScrollAnimation";

export const CHESS_HEADER_ANIMATIONS: { [key: string]: AnimationPropsMap } = {
  headerImageAnims: {
    opacity: {
      scrollTarget: "bottom",
      startValue: 1,
      keyframes: [
        { from: 1, to: 1, start: 0, end: 10 },
        { from: 1, to: 0.2, start: 10, end: 30 },
        { from: 0.2, to: 0, start: 50, end: 75 },
      ],
    },

    scale: {
      scrollTarget: "bottom",
      startValue: 1,
      keyframes: [{ from: 1, to: 0.8, start: 50, end: 75 }],
    },
  },

  eloHeaderAnims: {
    opacity: {
      scrollTarget: "bottom",
      startValue: 0,
      keyframes: [{ from: 0, to: 1, start: 0, end: 25 }],
    },

    top: {
      scrollTarget: "bottom",
      startValue: 100,
      keyframes: [{ from: 100, to: 30, start: 0, end: 40 }],
    },

    translateY: {
      scrollTarget: "bottom",
      startValue: 0,
      keyframes: [{ from: 0, to: -50, start: 0, end: 40 }],
    },
  },

  eloInformationAnims: {
    opacity: {
      scrollTarget: "bottom",
      startValue: 0,
      keyframes: [
        { from: 0, to: 1, start: 0, end: 80 },
        { from: 1, to: 0, start: 80, end: 100 },
      ],
    },
  },
};

export const CHESS_DEVELOPED_ANIMATIONS: { [key: string]: AnimationPropsMap } =
  {
    typescriptAnims: {
      opacity: {
        scrollTarget: "bottom",
        startValue: 0,
        keyframes: [
          { from: 0, to: 0, start: 0, end: 20 },
          { from: 0, to: 1, start: 20, end: 50 },
          { from: 1, to: 0, start: 50, end: 60 },
        ],
      },

      left: {
        scrollTarget: "bottom",
        startValue: 100,
        keyframes: [{ from: 100, to: 25, start: 20, end: 50 }],
      },

      top: {
        scrollTarget: "bottom",
        startValue: 50,
        keyframes: [{ from: 50, to: 45, start: 50, end: 60 }],
      },

      scale: {
        scrollTarget: "bottom",
        startValue: 1,
        keyframes: [{ from: 1, to: 0.5, start: 50, end: 60 }],
      },
    },

    reactAnims: {
      opacity: {
        scrollTarget: "bottom",
        startValue: 0,
        keyframes: [
          { from: 0, to: 0, start: 0, end: 20 },
          { from: 0, to: 1, start: 20, end: 50 },
          { from: 1, to: 0, start: 50, end: 65 },
        ],
      },

      left: {
        scrollTarget: "bottom",
        startValue: 100,
        keyframes: [{ from: 100, to: 50, start: 20, end: 50 }],
      },

      top: {
        scrollTarget: "bottom",
        startValue: 50,
        keyframes: [{ from: 50, to: 45, start: 55, end: 65 }],
      },
    },

    scssAnims: {
      opacity: {
        scrollTarget: "bottom",
        startValue: 0,
        keyframes: [
          { from: 0, to: 0, start: 0, end: 20 },
          { from: 0, to: 1, start: 20, end: 50 },
          { from: 1, to: 0, start: 60, end: 70 },
        ],
      },

      left: {
        scrollTarget: "bottom",
        startValue: 100,
        keyframes: [{ from: 100, to: 75, start: 20, end: 50 }],
      },

      top: {
        scrollTarget: "bottom",
        startValue: 50,
        keyframes: [{ from: 50, to: 45, start: 60, end: 70 }],
      },
    },

    developedHeader: {
      opacity: {
        scrollTarget: "bottom",
        startValue: 0,
        keyframes: [
          { from: 0, to: 1, start: -20, end: 10 },
          { from: 1, to: 0, start: 70, end: 80 },
        ],
      },

      top: {
        scrollTarget: "bottom",
        startValue: 100,
        keyframes: [
          { from: 100, to: 25, start: -20, end: 10 },
          { from: 25, to: 0, start: 70, end: 80 },
        ],
      },
    },
  };

export const CHESS_INFORMATION_ANIMS: { [key: string]: AnimationPropsMap } = {
  contentAnims: {
    opacity: {
      scrollTarget: "bottom",
      startValue: 0,
      keyframes: [{ from: 0, to: 1, start: 0, end: 10 }],
    },
    left: {
      scrollTarget: "bottom",
      startValue: 100,
      keyframes: [{ from: 100, to: -100, start: 10, end: 90 }],
    },
  },
};

// Static animations not tied to scrolling events
export const CHESS_HEADER_IMAGE_ANIM = {
  from: 0,
  to: 1,
  duration: 1000,
  delay: 0,
};
