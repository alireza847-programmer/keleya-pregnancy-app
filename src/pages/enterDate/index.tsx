import Button from 'components/uiElements/button';
import Input from 'components/uiElements/input';
import Row from 'components/uiElements/row';
import Text from 'components/uiElements/text';
import {Formik} from 'formik';
import MainLayout from 'layouts/main';
import React, {Fragment} from 'react';
import {TOKEN_STORAGE} from 'types/enums';
import {hp} from 'utils/dimension';
import {setStorage} from 'utils/storage/setters';
import * as Yup from 'yup';
import style from './style';
import DatePicker from 'components/uiElements/datePicker';
import {useProfileStore} from 'stores/profile';
import {useAppNavigation} from 'hooks/navigation';
import {WORKOUT_STACK} from 'routes/const';

export interface Values {
  date: Date;
}

const EnterDate = () => {
  const navigation = useAppNavigation();
  const profile = useProfileStore(state => state.profile);
  const setProfile = useProfileStore(state => state.setProfile);
  const signupSchema = Yup.object().shape({
    date: Yup.date(),
  });
  const onSubmit = async (values: Values) => {
    try {
      setProfile('date', values.date);
      navigation.navigate(WORKOUT_STACK);
    } catch (error) {}
  };
  return (
    <MainLayout
      height={hp(50)}
      image={require('assets/pngs/date.png')}
      titleTextVariable={profile?.name}
      title="enterDate.title">
      <Formik
        initialValues={{
          date: new Date(),
        }}
        validationSchema={signupSchema}
        onSubmit={onSubmit}>
        {({
          errors,
          touched,
          setFieldValue,
          values,
          isValid,
          dirty,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <Fragment>
            <DatePicker onChange={date => setFieldValue('date', date)} />
            <Row style={style.button}>
              <Button
                mode={'DEFAULT'}
                disabled={!(isValid && dirty)}
                marginTopRatio={12}
                onPress={handleSubmit}
                text={'enterDate.button'}
              />
            </Row>
          </Fragment>
        )}
      </Formik>
    </MainLayout>
  );
};
export default EnterDate;
