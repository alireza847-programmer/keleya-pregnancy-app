import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from 'utils/dimension';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: Platform.OS === 'ios' ? hp(97) : hp(91),
  },
  image: {
    width: wp(100),
    height: hp(45),
    zIndex: -1,
  },
  headerTitle: {
    position: 'absolute',
    top: hp(6),
  },
});
