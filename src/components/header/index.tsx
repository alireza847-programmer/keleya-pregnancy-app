import Row from 'components/uiElements/row';
import React from 'react';
import {HeaderProps} from 'types/components/header';
import style from './style';
import {ArrowBack} from 'assets/svgs';
import {wp} from 'utils/dimension';
import {TouchableOpacity} from 'react-native';
import {useAppNavigation} from 'hooks/navigation';

const Header = (props: HeaderProps) => {
  const navigation = useAppNavigation();
  const onBack = () => navigation.goBack();
  return (
    <Row width={wp(90)} style={style.row}>
      <TouchableOpacity onPress={onBack}>
        <ArrowBack width={wp(5)} height={wp(5)} style={style.back} />
      </TouchableOpacity>
    </Row>
  );
};
export default Header;
