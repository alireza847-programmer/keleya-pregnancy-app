import React, {Children, PropsWithChildren} from 'react';
import {Image, View} from 'react-native';
import style from './style';
import {WalkThroughProps} from 'types/layouts/walkThrough';
import Text from 'components/uiElements/text';
import {fontStyles} from 'themes/fonts';
import {colors} from 'themes/colors';

const WalkThroughLayout = (props: PropsWithChildren<WalkThroughProps>) => {
  const {children, backgroundImage, headerIcon, headerTitle} = props;
  return (
    <View style={style.container}>
      {headerIcon && <View style={style.headerIcon}>{headerIcon}</View>}
      {headerTitle && (
        <Text
          textAlign="center"
          typography={fontStyles.bold22}
          color={colors.warmGrey}
          text={headerTitle}
        />
      )}
      {backgroundImage && (
        <Image
          resizeMode="cover"
          style={style.backgroundImage}
          source={backgroundImage}
        />
      )}
      {children}
    </View>
  );
};
export default WalkThroughLayout;
