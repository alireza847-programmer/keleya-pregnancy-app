import {StyleSheet} from 'react-native';
import {globalHeightRatio} from 'themes/global';
import {hp, wp} from 'utils/dimension';

export default StyleSheet.create({
  image: {
    width: wp(100),
    height: hp(75),
    position: 'absolute',
    zIndex: -1,
  },
  logo: {
    width: wp(25),
    height: wp(25),
    zIndex: 1,
    marginTop: globalHeightRatio * 5,
  },
});
