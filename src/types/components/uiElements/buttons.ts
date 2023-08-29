export interface ButtonProps {
  onPress: () => void;
  text: string;
  mode?: 'TEXT' | 'DEFAULT';
  marginTopRatio?: number;
  disabled?: boolean;
}
