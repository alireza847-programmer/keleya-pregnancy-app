import {StyleSheet} from 'react-native';
import {hp, wp} from 'utils/dimension';

export default StyleSheet.create({
  pagination: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotStyle: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.25),
    marginHorizontal: wp(0.7),
  },
  inactiveStyle: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.25),
    marginHorizontal: wp(0.7),
    opacity: 0.5,
  },
});
