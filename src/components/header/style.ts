import {StyleSheet} from 'react-native';
import {globalHeightRatio} from 'themes/global';

export default StyleSheet.create({
  row: {
    paddingVertical: globalHeightRatio * 2,
    marginTop: globalHeightRatio * 2,
    position: 'absolute',
  },
  back: {
    transform: [{rotateZ: '180deg'}],
  },
});
