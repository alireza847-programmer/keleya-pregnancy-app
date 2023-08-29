import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {ButtonProps} from 'types/components/uiElements/buttons';
import style from './style';
import {colors} from 'themes/colors';
import Text from '../text';
import {fontStyles} from 'themes/fonts';
import {globalHeightRatio} from 'themes/global';

const Button = (props: ButtonProps) => {
  const {
    onPress,
    text,
    mode = 'DEFAULT',
    disabled = false,
    marginTopRatio = 0,
  } = props;
  const renderStyles = (): ViewStyle => {
    if (disabled) {
      return {
        backgroundColor: colors.warmGrey,
      };
    }
    switch (mode) {
      case 'TEXT':
        return {
          backgroundColor: 'transparent',
        };
      default:
        return {
          backgroundColor: colors.paleTeal,
        };
    }
  };
  const renderColor = () => {
    if (mode === 'TEXT') {
      return colors.greyishBrown;
    }
    return colors.white;
  };
  const renderTypography = () => {
    if (mode === 'TEXT') {
      return fontStyles.button;
    }
    return fontStyles.bold22;
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        style.button,
        renderStyles(),
        {marginTop: globalHeightRatio * marginTopRatio},
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        color={renderColor()}
        typography={renderTypography()}
        width={null}
        text={text}
      />
    </TouchableOpacity>
  );
};
export default Button;
