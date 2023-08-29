import {Notification} from 'assets/svgs';
import Button from 'components/uiElements/button';
import Column from 'components/uiElements/column';
import WalkThroughLayout from 'layouts/walkThrough';
import React from 'react';
import {colors} from 'themes/colors';
import style from './style';

const Success = () => {
  return (
    <WalkThroughLayout
      headerIcon={
        <Notification fill={colors.warmGrey} width={90} height={90} />
      }
      headerTitle="success.title"
      backgroundImage={require('assets/pngs/success.png')}>
      <Column style={style.buttons}>
        <Button
          text={'success.buttons.secondary'}
          mode="TEXT"
          onPress={() => {}}
        />
        <Button
          marginTopRatio={3}
          text={'success.buttons.primary'}
          onPress={() => {}}
        />
      </Column>
    </WalkThroughLayout>
  );
};
export default Success;
