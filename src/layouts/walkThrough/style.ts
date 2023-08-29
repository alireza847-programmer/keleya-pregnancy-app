import {StyleSheet} from 'react-native';
import {globalHeightRatio} from 'themes/global';
import {hp, wp} from 'utils/dimension';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(98),
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: wp(100),
    height: hp(87),
    zIndex: -1,
  },
  headerIcon: {
    marginTop: globalHeightRatio * 10,
  },
});
