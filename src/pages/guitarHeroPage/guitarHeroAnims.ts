const headerOffset = -100;

export const GUITAR_HERO_ANIMATIONS = {
  headerImgAnims: {
    scale: {
      startValue: 100,
      topOffset: headerOffset, 
      keyframes: [
        {
          from: 100,
          to: 200,
          start: 0,
          end: 90,
        },
      ],
    },
    left: {
      topOffset: headerOffset,
      startValue: 0,
      keyframes: [
        {
          from: 0,
          to: 90,
          start: 0,
          end: 90,
        },
      ],
    },
  },
};
