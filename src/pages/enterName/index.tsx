import Button from 'components/uiElements/button';
import Input from 'components/uiElements/input';
import Row from 'components/uiElements/row';
import Text from 'components/uiElements/text';
import {Formik} from 'formik';
import MainLayout from 'layouts/main';
import React, {Fragment} from 'react';
import {hp} from 'utils/dimension';
import * as Yup from 'yup';
import style from './style';
import {useProfileStore} from 'stores/profile';
import {useTranslation} from 'react-i18next';
import {useAppNavigation} from 'hooks/navigation';
import {ENTER_DATE_STACK} from 'routes/const';

export interface Values {
  name: string;
}

const EnterName = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const setProfile = useProfileStore(state => state.setProfile);
  const signupSchema = Yup.object().shape({
    name: Yup.string().required(t('formErros.required')),
  });
  const onSubmit = async (values: Values) => {
    try {
      // apiCall and send name to api
      // use zustand for state and store data, this is just a example to store data in a state manager like zustand we can handle that with navigation route params instead
      setProfile('name', values.name);
      navigation.navigate(ENTER_DATE_STACK);
    } catch (error) {}
  };
  return (
    <MainLayout
      height={hp(55)}
      image={require('assets/pngs/enterName.png')}
      title="enterName.title">
      <Formik
        initialValues={{
          name: '',
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
            <Input
              error={errors['name']}
              value={values['name']}
              onChangeText={handleChange('name')}
              keyboardType="email-address"
              label={'enterName.input'}
              touched={touched['name']}
              onFocus={handleBlur('name')}
            />
            <Row style={style.button}>
              <Button
                mode={'DEFAULT'}
                disabled={!(isValid && dirty)}
                onPress={handleSubmit}
                text={'signIn.button'}
              />
            </Row>
          </Fragment>
        )}
      </Formik>
    </MainLayout>
  );
};
export default EnterName;
