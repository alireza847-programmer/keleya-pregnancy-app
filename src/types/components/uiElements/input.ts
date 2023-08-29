import {TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  password?: boolean;
  label: string;
  error?: string;
  touched?: boolean;
}
