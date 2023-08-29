import {ViewStyle} from 'react-native';
import {AlignItems, JustifyContent} from './flex';

export interface ColumnProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  style?: ViewStyle | ViewStyle[];
  marginTopRatio?: number;
}
