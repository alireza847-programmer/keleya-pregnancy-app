import {useAppNavigation} from 'hooks/navigation';
import React, {useState} from 'react';
import {SIGN_IN_STACK, SIGN_UP_STACK} from 'routes/const';

const useWalkThrough = () => {
  const navigation = useAppNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const CAROUSEL_DATA = [
    {id: '1', image: require('assets/pngs/initialScreen.png')},
    {id: '2', image: require('assets/pngs/initialScreen.png')},
    {id: '3', image: require('assets/pngs/initialScreen.png')},
  ];
  const onSignIn = () => {
    navigation.navigate(SIGN_IN_STACK);
  };
  const onSignUp = () => {
    navigation.navigate(SIGN_UP_STACK);
  };
  return {CAROUSEL_DATA, activeIndex, setActiveIndex, onSignIn, onSignUp};
};

export default useWalkThrough;
