import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Workout from 'pages/workout';
import EnterDate from 'pages/enterDate';
import EnterName from 'pages/enterName';
import SignIn from 'pages/signIn';
import SignUp from 'pages/signUp';
import WalkThrough from 'pages/walkThrough';
import React from 'react';
import {
  ENTER_DATE_STACK,
  ENTER_NAME_STACK,
  SIGN_IN_STACK,
  SIGN_UP_STACK,
  SUCCESS_STACK,
  WALK_THROUGH_STACK,
  WORKOUT_STACK,
} from 'routes/const';
import {RootStackNavigationParamList} from 'types/routes/root';
import Success from 'pages/success';

const Root = createNativeStackNavigator<RootStackNavigationParamList>();

const RootStack = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Root.Navigator
      screenOptions={screenOptions}
      initialRouteName={WALK_THROUGH_STACK}>
      <Root.Screen name={WALK_THROUGH_STACK} component={WalkThrough} />
      <Root.Screen name={SIGN_IN_STACK} component={SignIn} />
      <Root.Screen name={SIGN_UP_STACK} component={SignUp} />
      <Root.Screen name={ENTER_NAME_STACK} component={EnterName} />
      <Root.Screen name={ENTER_DATE_STACK} component={EnterDate} />
      <Root.Screen name={WORKOUT_STACK} component={Workout} />
      <Root.Screen name={SUCCESS_STACK} component={Success} />
    </Root.Navigator>
  );
};
export default RootStack;
