import {StyleSheet} from 'react-native';
import {radiuses} from 'themes/global';
import {hp, wp} from 'utils/dimension';

export default StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(7),
    backgroundColor: '#0087E0',
    borderRadius: radiuses.min,
  },
});
