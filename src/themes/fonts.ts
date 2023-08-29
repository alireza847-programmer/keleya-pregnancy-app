import {fp} from 'utils/dimension';

const fonts = {
  MuseoSansRounded500: 'MuseoSansRounded-500',
  MuseoSansRounded700: 'MuseoSansRounded-700',
};

export const fontStyles = {
  bold22: {
    fontFamily: fonts.MuseoSansRounded500,
    fontSize: fp(2.5),
  },
  button: {
    fontFamily: fonts.MuseoSansRounded700,
    fontSize: fp(2.3),
  },
  input: {
    fontFamily: fonts.MuseoSansRounded500,
    fontSize: fp(1.9),
  },
  checkBox: {
    fontFamily: fonts.MuseoSansRounded700,
    fontSize: fp(1.4),
  },
};

export {fonts};
