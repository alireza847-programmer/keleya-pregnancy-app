import React, {Fragment, memo} from 'react';
import {Text as MyText, ViewStyle} from 'react-native';
import {TextProps} from 'types/components/uiElements/text';
import {wp} from 'utils/dimension';
import {useTranslation} from 'react-i18next';
import {fontStyles} from 'themes/fonts';
import {colors} from 'themes/colors';
import {globalHeightRatio} from 'themes/global';

const Text = (props: TextProps) => {
  const {
    text,
    typography = fontStyles.bold22,
    color = colors.greyishBrown,
    width = wp(80),
    textAlign = 'auto',
    marginTopRatio = 0,
    variable,
  } = props;
  const {t} = useTranslation();
  return (
    <MyText
      {...props}
      style={[
        {
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize,
          color,
          width,
          textAlign,
          marginTop: globalHeightRatio * marginTopRatio,
        },
      ]}>
      {t(text, {variable})}
    </MyText>
  );
};
export default memo(Text);
