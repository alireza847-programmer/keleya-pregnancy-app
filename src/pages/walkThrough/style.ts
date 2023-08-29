import {Platform, StyleSheet} from 'react-native';
import {globalHeightRatio} from 'themes/global';

export default StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom:
      Platform.OS === 'ios' ? globalHeightRatio * 7 : globalHeightRatio * 19,
    zIndex: 1,
    alignItems: 'center',
  },
});
