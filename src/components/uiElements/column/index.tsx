import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {globalHeightRatio} from 'themes/global';
import {ColumnProps} from 'types/components/uiElements/column';

const Column = (props: PropsWithChildren<ColumnProps>) => {
  const {
    alignItems = 'center',
    justifyContent = 'flex-start',
    children,
    style,
    marginTopRatio = 0,
  } = props;
  return (
    <View
      style={[
        {
          alignItems,
          justifyContent,
          marginTop: globalHeightRatio * marginTopRatio,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
export default Column;
