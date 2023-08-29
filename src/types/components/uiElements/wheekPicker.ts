export interface WheelPickerProps {
  data: Array<string>;
  onChange: (index: number) => void;
  selectedIndex: number;
}
