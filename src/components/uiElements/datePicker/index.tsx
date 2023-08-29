import React, {useEffect, useState} from 'react';
import RnDatePicker from 'react-native-date-picker';
import Text from '../text';
import Row from '../row';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import {fontStyles} from 'themes/fonts';
import {colors} from 'themes/colors';
import style from './style';
import {DatePickerProps} from 'types/components/uiElements/datePicker';

const DatePicker = (props: DatePickerProps) => {
  const {onChange} = props;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  useEffect(() => {
    onChange(date);
  }, [date]);
  return (
    <Row marginTopRatio={8} justifyContent="center">
      <TouchableOpacity
        style={style.container}
        activeOpacity={0.8}
        onPress={() => setOpen(true)}>
        <Text
          width={null}
          color={colors.lighBlue}
          typography={fontStyles.input}
          text={moment(date).format('MMM DD, YYYY')}
        />
      </TouchableOpacity>
      <RnDatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Row>
  );
};

export default DatePicker;
