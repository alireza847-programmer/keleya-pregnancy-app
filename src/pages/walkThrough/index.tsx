import Carousel from 'components/uiElements/carousel';
import CarouselItem from 'components/walkThrough/carouseltem';
import WalkThroughLayout from 'layouts/walkThrough';
import React from 'react';
import useWalkThrough from './logic';
import {hp, wp} from 'utils/dimension';
import {Text, View} from 'react-native';
import Column from 'components/uiElements/column';
import style from './style';
import Button from 'components/uiElements/button';
import Pagination from 'components/pagination';

const WalkThrough = () => {
  const {CAROUSEL_DATA, onSignUp, onSignIn, activeIndex, setActiveIndex} =
    useWalkThrough();
  return (
    <WalkThroughLayout>
      <View style={style.buttonWrapper}>
        <Button onPress={onSignUp} text="walkThrough.buttons.primary" />
        <Button
          marginTopRatio={1}
          mode="TEXT"
          onPress={onSignIn}
          text="walkThrough.buttons.secondary"
        />
        <Column marginTopRatio={1}>
          <Pagination length={CAROUSEL_DATA.length} activeIndex={activeIndex} />
        </Column>
      </View>
      <Carousel
        loop={false}
        data={CAROUSEL_DATA}
        width={wp(100)}
        height={hp(100)}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({index, item}) => (
          <CarouselItem index={index} item={item} />
        )}
      />
    </WalkThroughLayout>
  );
};

export default WalkThrough;
