import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import style from './style';

const RootWrapper = (props: PropsWithChildren) => {
  const {children} = props;
  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.select({
        ios: 'padding',
        android: 'height',
      })}
      enabled={true}>
      {children}
    </KeyboardAvoidingView>
  );
};
export default RootWrapper;
