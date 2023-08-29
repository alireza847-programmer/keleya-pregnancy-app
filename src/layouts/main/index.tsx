import Header from 'components/header';
import React, {PropsWithChildren} from 'react';
import {Image, ScrollView, View} from 'react-native';
import style from './style';
import {MainLayoutProps} from 'types/layouts/main';
import Text from 'components/uiElements/text';
import Column from 'components/uiElements/column';
import {hp} from 'utils/dimension';
import Row from 'components/uiElements/row';

const MainLayout = (props: PropsWithChildren<MainLayoutProps>) => {
  const {
    children,
    image,
    title,
    height = hp(45),
    headerTitle,
    titleTextVariable,
  } = props;
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Column>
        <Header />
        {headerTitle && (
          <Row style={style.headerTitle}>
            <Text text={headerTitle} textAlign="center" />
          </Row>
        )}
        {image && (
          <Image
            resizeMode="cover"
            style={[style.image, {height: height}]}
            source={image}
          />
        )}
      </Column>
      {title && (
        <Text text={title} variable={titleTextVariable} textAlign="center" />
      )}
      {children}
    </ScrollView>
  );
};
export default MainLayout;
