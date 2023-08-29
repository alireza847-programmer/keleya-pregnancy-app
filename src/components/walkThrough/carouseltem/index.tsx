import Column from 'components/uiElements/column';
import React from 'react';
import {Image} from 'react-native';
import {CarouselItemProps} from 'types/components/walkThrough/carouselItem';
import style from './style';
import Text from 'components/uiElements/text';

const CarouselItem = (props: CarouselItemProps) => {
  const {index, item} = props;
  const {id, image} = item;
  return (
    <Column key={id}>
      <Image
        resizeMode="contain"
        style={style.logo}
        source={require('assets/pngs/keleyaLogo.png')}
      />
      <Text marginTopRatio={2} textAlign="center" text={`walkThrough.title`} />
      <Image resizeMode="cover" style={style.image} source={image} />
    </Column>
  );
};
export default CarouselItem;
