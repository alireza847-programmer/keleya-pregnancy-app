import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {RowProps} from 'types/components/uiElements/row';
import styles from './style';
import {wp} from 'utils/dimension';
import {globalHeightRatio} from 'themes/global';

const Row = (props: PropsWithChildren<RowProps>) => {
  const {
    alignItems = 'center',
    justifyContent = 'space-between',
    children,
    style,
    width = wp(80),
    marginTopRatio = 0,
  } = props;
  return (
    <View
      style={[
        {
          alignItems,
          justifyContent,
          width,
          marginTop: marginTopRatio * globalHeightRatio,
        },
        styles.container,
        style,
      ]}>
      {children}
    </View>
  );
};
export default Row;
