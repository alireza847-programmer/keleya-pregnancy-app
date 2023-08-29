import {StyleSheet} from 'react-native';
import {colors} from 'themes/colors';
import {globalWidthRatio, radius} from 'themes/global';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: globalWidthRatio * 2,
    borderRadius: radius,
  },
});
