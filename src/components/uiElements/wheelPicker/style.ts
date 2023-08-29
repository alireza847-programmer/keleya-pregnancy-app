import {StyleSheet} from 'react-native';
import {colors} from 'themes/colors';
import {globalHeightRatio} from 'themes/global';
import {hp, wp} from 'utils/dimension';

export default StyleSheet.create({
  container: {
    width: wp(80),
    marginTop: globalHeightRatio * 5,
  },
});
