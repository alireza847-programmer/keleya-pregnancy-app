import {StyleSheet} from 'react-native';
import {globalHeightRatio, radius} from 'themes/global';
import {wp} from 'utils/dimension';

export default StyleSheet.create({
  button: {
    width: wp(80),
    paddingVertical: globalHeightRatio * 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: radius,
  },
});
