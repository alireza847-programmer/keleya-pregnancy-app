import React, {PropsWithChildren, useState} from 'react';
import {View, ViewStyle} from 'react-native';
import {InputProps} from 'types/components/uiElements/input';
import {hp, wp} from 'utils/dimension';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Row from '../row';
import {fontStyles} from 'themes/fonts';
import {colors} from 'themes/colors';
import style from './style';
import {EyeHide, EyeShow} from 'assets/svgs';
import Text from '../text';
import Column from '../column';
import {useTranslation} from 'react-i18next';

const Input = (props: PropsWithChildren<InputProps>) => {
  const {password = false, label, error, touched, ...rest} = props;
  const {t} = useTranslation();
  const renderBorderStyle = (): ViewStyle => {
    if (error && touched) {
      return {
        borderColor: 'red',
      };
    }
    return {};
  };
  return (
    <Column>
      <Row marginTopRatio={3}>
        <FloatingLabelInput
          {...rest}
          label={t(label)}
          containerStyles={{...style.container, ...renderBorderStyle()}}
          labelStyles={style.labelStyle}
          customLabelStyles={{
            colorBlurred: error && touched ? 'red' : colors.warmGrey,
            fontSizeBlurred: fontStyles.input.fontSize,
          }}
          isPassword={password}
          customHidePasswordComponent={<EyeShow width={24} height={24} />}
          customShowPasswordComponent={<EyeHide width={24} height={24} />}
          inputStyles={style.inputStyle}
          textAlign="center"
        />
      </Row>
      {error && touched && (
        <Text
          color="red"
          marginTopRatio={2}
          typography={fontStyles.checkBox}
          text={error}
        />
      )}
    </Column>
  );
};
export default Input;
