import Button from 'components/uiElements/button';
import Row from 'components/uiElements/row';
import WheelPicker from 'components/uiElements/wheelPicker';
import MainLayout from 'layouts/main';
import React, {useState} from 'react';
import {hp, wp} from 'utils/dimension';
import style from './style';
import {useProfileStore} from 'stores/profile';
import {useAppNavigation} from 'hooks/navigation';
import {SUCCESS_STACK} from 'routes/const';

const Workout = () => {
  const navigation = useAppNavigation();
  const setProfile = useProfileStore(state => state.setProfile);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const DATA = [
    '1 times a week',
    '2 times a week',
    '3 times a week',
    '4 times a week',
  ];
  const onSubmit = () => {
    try {
      setProfile('workout', DATA[selectedIndex]);
      navigation.navigate(SUCCESS_STACK);
    } catch (error) {}
  };
  return (
    <MainLayout
      headerTitle="workout.headerTitle"
      height={hp(50)}
      image={require('assets/pngs/workout.png')}>
      <WheelPicker
        data={DATA}
        selectedIndex={selectedIndex}
        onChange={index => setSelectedIndex(index)}
      />
      <Row style={style.button}>
        <Button onPress={onSubmit} text="workout.button" />
      </Row>
    </MainLayout>
  );
};
export default Workout;
