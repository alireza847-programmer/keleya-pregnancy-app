import {ViewStyle} from 'react-native';
import {AlignItems, JustifyContent} from './flex';

export interface RowProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  style?: ViewStyle | ViewStyle[];
  width?: number;
  marginTopRatio?: number;
}
