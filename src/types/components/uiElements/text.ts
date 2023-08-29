export interface TextProps {
  typography?: {
    fontFamily: string;
    fontSize: number;
  };
  text: string;
  color?: string;
  width?: number | null;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  marginTopRatio?: number;
  variable?: string;
}
