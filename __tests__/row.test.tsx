import React from 'react';
import renderer from 'react-test-renderer';
import {test, expect, jest} from '@jest/globals';
import Row from 'components/uiElements/row';

test('renders correctly', () => {
  const tree = renderer.create(<Row />).toJSON();
  expect(tree).toMatchSnapshot();
});
