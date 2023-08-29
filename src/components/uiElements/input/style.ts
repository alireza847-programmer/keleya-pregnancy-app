import {Platform, StyleSheet} from 'react-native';
import {fontStyles} from 'themes/fonts';
import {globalHeightRatio} from 'themes/global';
import {wp} from 'utils/dimension';

export default StyleSheet.create({
  inputStyle: {
    fontFamily: fontStyles.input.fontFamily,
    fontSize: fontStyles.input.fontSize,
    paddingBottom: 0,
    paddingLeft: wp(3.5),
  },
  labelStyle: {
    paddingBottom: Platform.OS === 'ios' ? globalHeightRatio * 5 : 0,
    fontFamily: fontStyles.input.fontFamily,
    fontSize: fontStyles.input.fontSize,
    paddingLeft: wp(3.5),
  },
  container: {
    borderBottomWidth: 1,
    marginTop: globalHeightRatio * 5,
  },
});
