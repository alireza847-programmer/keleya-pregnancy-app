import {Platform, StyleSheet} from 'react-native';
import {hp} from 'utils/dimension';

export default StyleSheet.create({
  buttons: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? hp(12) : hp(5),
  },
});
