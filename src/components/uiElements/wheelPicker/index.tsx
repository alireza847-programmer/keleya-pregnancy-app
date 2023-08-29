import React, {useEffect, useState} from 'react';
import RnWheelPicker from 'react-native-wheely';
import style from './style';
import {WheelPickerProps} from 'types/components/uiElements/wheekPicker';
import {fontStyles} from 'themes/fonts';

const WheelPicker = (props: WheelPickerProps) => {
  const {data, onChange, selectedIndex} = props;
  return (
    <RnWheelPicker
      selectedIndex={selectedIndex}
      options={data}
      containerStyle={style.container}
      itemTextStyle={{...fontStyles.input}}
      onChange={index => onChange(index)}
    />
  );
};
export default WheelPicker;
