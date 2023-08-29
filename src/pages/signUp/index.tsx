import Button from 'components/uiElements/button';
import CheckBox from 'components/uiElements/checkbox';
import Input from 'components/uiElements/input';
import Row from 'components/uiElements/row';
import {Formik} from 'formik';
import {useAppNavigation} from 'hooks/navigation';
import MainLayout from 'layouts/main';
import React, {Fragment} from 'react';
import {useTranslation} from 'react-i18next';
import {ENTER_NAME_STACK} from 'routes/const';
import {TOKEN_STORAGE} from 'types/enums';
import {setStorage} from 'utils/storage/setters';
import * as Yup from 'yup';

export interface Values {
  email: string;
  password: string;
  privacy: boolean;
  terms: boolean;
}

const SignUp = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('formErros.email'))
      .required(t('formErros.required')),
    password: Yup.string().required(t('formErros.required')),
    privacy: Yup.boolean().required(t('formErros.required')),
    terms: Yup.boolean().required(''),
  });
  const onSubmit = async (values: Values) => {
    try {
      // apiCall and get Token with values
      const token = 'Bearer ...';
      await setStorage(TOKEN_STORAGE.name, token);
      navigation.navigate(ENTER_NAME_STACK);
    } catch (error) {}
  };
  return (
    <MainLayout title="signUp.title" image={require('assets/pngs/signUp.png')}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          privacy: false,
          terms: false,
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
              error={errors['email']}
              value={values['email']}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              label="example@gmail.com"
              touched={touched['email']}
              onFocus={handleBlur('email')}
            />
            <Input
              error={errors['password']}
              value={values['password']}
              onChangeText={handleChange('password')}
              password
              label={'signUp.password'}
              touched={touched['password']}
              onFocus={handleBlur('password')}
            />
            <Row marginTopRatio={2}>
              <CheckBox
                defaultValue={values['privacy']}
                onChange={value => setFieldValue('privacy', value)}
                title={'signUp.checkBoxOne'}
              />
            </Row>
            <CheckBox
              defaultValue={values['terms']}
              onChange={value => setFieldValue('terms', value)}
              title={'signUp.checkBoxTwo'}
            />
            <Button
              mode={'DEFAULT'}
              disabled={
                !(isValid && dirty && values['privacy'] && values['terms'])
              }
              marginTopRatio={6}
              onPress={handleSubmit}
              text={'signUp.button'}
            />
          </Fragment>
        )}
      </Formik>
    </MainLayout>
  );
};
export default SignUp;
