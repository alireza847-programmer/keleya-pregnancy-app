import React from 'react';
import renderer from 'react-test-renderer';
import {test, expect, jest} from '@jest/globals';
import Button from 'components/uiElements/button';

test('renders correctly', () => {
  const tree = renderer
    .create(<Button onPress={() => {}} text="Title" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
