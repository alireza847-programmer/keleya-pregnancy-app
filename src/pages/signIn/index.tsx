import Button from 'components/uiElements/button';
import Input from 'components/uiElements/input';
import Text from 'components/uiElements/text';
import {Formik} from 'formik';
import {useAppNavigation} from 'hooks/navigation';
import MainLayout from 'layouts/main';
import React, {Fragment} from 'react';
import {SUCCESS_STACK} from 'routes/const';
import {fontStyles} from 'themes/fonts';
import {TOKEN_STORAGE} from 'types/enums';
import {setStorage} from 'utils/storage/setters';
import * as Yup from 'yup';
import style from './style';
import Column from 'components/uiElements/column';
import {useTranslation} from 'react-i18next';

export interface Values {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigation = useAppNavigation();
  const {t} = useTranslation();
  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('formErros.email'))
      .required(t('formErros.required')),
    password: Yup.string().required(t('formErros.required')),
  });
  const onSubmit = async (values: Values) => {
    try {
      // apiCall and get Token with values
      const token = 'Bearer ...';
      await setStorage(TOKEN_STORAGE.name, token);
      navigation.navigate(SUCCESS_STACK);
    } catch (error) {}
  };
  return (
    <MainLayout title="signIn.title" image={require('assets/pngs/signUp.png')}>
      <Formik
        initialValues={{
          email: '',
          password: '',
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
              label="Enter Passsword"
              touched={touched['password']}
              onFocus={handleBlur('password')}
            />
            <Column style={style.button}>
              <Text
                text="signIn.forgot"
                typography={fontStyles.input}
                textAlign="center"
                marginTopRatio={25}
              />
              <Button
                mode={'DEFAULT'}
                disabled={!(isValid && dirty)}
                marginTopRatio={4}
                onPress={handleSubmit}
                text={'signIn.button'}
              />
            </Column>
          </Fragment>
        )}
      </Formik>
    </MainLayout>
  );
};
export default SignIn;
