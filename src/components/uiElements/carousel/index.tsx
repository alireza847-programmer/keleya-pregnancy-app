import React, {Fragment} from 'react';
import SnapCarousel, {TCarouselProps} from 'react-native-reanimated-carousel';

const Carousel = (props: TCarouselProps<any>) => {
  const {...rest} = props;
  return <SnapCarousel {...rest} />;
};
export default Carousel;
