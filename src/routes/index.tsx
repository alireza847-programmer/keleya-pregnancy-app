import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './root';

const Routes = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}>
      <RootStack />
    </NavigationContainer>
  );
};
export default Routes;
