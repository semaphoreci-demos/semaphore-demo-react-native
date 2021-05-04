import renderer from 'react-test-renderer';
// import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import App from '../App';

jest.useFakeTimers();

describe('jest snapshot tests', () => {
  it('renders correctly', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
