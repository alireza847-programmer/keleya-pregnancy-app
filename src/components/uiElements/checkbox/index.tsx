import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useEffect, useState} from 'react';
import Row from '../row';
import Text from '../text';
import {fontStyles} from 'themes/fonts';
import {colors} from 'themes/colors';
import style from './style';
import {CheckBoxProps} from 'types/components/uiElements/checkBox';

const CheckBox = (props: CheckBoxProps) => {
  const {onChange, title, defaultValue} = props;
  const [value, setValue] = useState(false);
  useEffect(() => {
    onChange(value);
  }, [value]);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <Row marginTopRatio={4}>
      <BouncyCheckbox
        size={20}
        isChecked={value}
        fillColor={colors.lightTeal}
        iconStyle={style.iconStyle}
        style={style.conteiner}
        innerIconStyle={style.iconStyle}
        onPress={(isChecked: boolean) => setValue(isChecked)}
      />
      <Text text={title} typography={fontStyles.checkBox} />
    </Row>
  );
};
export default CheckBox;
