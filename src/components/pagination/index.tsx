import React from 'react';
import {View} from 'react-native';
import {Props} from 'types/components/pagination';
import style from './style';
import {colors} from 'themes/colors';

const Pagination = (props: Props) => {
  const {activeIndex, length} = props;
  const array = new Array(length).fill(0);
  const renderDots = () => {
    return array.map((item, index) => {
      return (
        <View
          key={index}
          style={[
            activeIndex === index ? style.dotStyle : style.inactiveStyle,
            {
              backgroundColor:
                activeIndex === index ? colors.paleTeal : colors.warmGrey,
            },
          ]}
        />
      );
    });
  };
  return <View style={style.pagination}>{renderDots()}</View>;
};
export default Pagination;
