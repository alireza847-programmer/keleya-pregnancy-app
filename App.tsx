import RootWrapper from 'components/wrappers/root';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from 'routes/index';
import 'translation/index';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootWrapper>
        <Routes />
      </RootWrapper>
    </SafeAreaView>
  );
};
export default App;
