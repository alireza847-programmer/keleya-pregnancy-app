import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import {En} from './langs/en';
import {De} from './langs/de';

const resources = {
  En: {
    translation: En,
  },
  De: {
    translation: De,
  },
};

const fallback = {languageTag: 'En'}; // Fallback language in case device language is not supported

const {languageTag} =
  RNLocalize.findBestLanguageTag(Object.keys(resources)) || fallback;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: languageTag, // Set the default language based on device language
  fallbackLng: 'En',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
