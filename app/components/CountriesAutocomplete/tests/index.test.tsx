import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import CountriesAutocomplete from '../index';

const COUNTRY_NAME = 'Serbia';

// Describing a test suite
describe('<CountriesAutocomplete />', () => {
  // Describing our test
  it('Displays Searched Item', async () => {
    // Mocking onPress method so we can check if its called or not
    const onSelect = jest.fn();

    // Rendering Button component using RNTL.
    const autocomplete = await render(
      <CountriesAutocomplete onSelect={onSelect} />,
    );

    // Grabbing our input to perform actions on it.
    const inputTestID = 'countriesAutocompleteInput';
    const textInput = autocomplete.getByTestId(inputTestID);

    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on changeText event
     */
    fireEvent(textInput, 'focus');
    fireEvent.changeText(textInput, COUNTRY_NAME);
    expect(textInput.props.value).toBe(COUNTRY_NAME);

    // Grabbing our input to perform actions on it.
    const listItemTestID = `listItem-${COUNTRY_NAME}`;
    const firstListItem = autocomplete.getByTestId(listItemTestID);
    expect(firstListItem).toBeTruthy();
  });

  it('onSelect is called when item is pressed', async () => {
    // Mocking onPress method so we can check if its called or not
    const onSelect = jest.fn();

    // Rendering Button component using react-native-test-renderer.
    const {getByTestId} = await render(
      <CountriesAutocomplete onSelect={onSelect} />,
    );

    // Grabbing our input to perform actions on it.
    const inputTestID = 'countriesAutocompleteInput';
    const textInput = getByTestId(inputTestID);

    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on focus & changeText event
     */
    fireEvent(textInput, 'focus');
    fireEvent.changeText(textInput, COUNTRY_NAME);

    // Grabbing our input to perform actions on it.
    const listItemTestID = `listItem-${COUNTRY_NAME}`;
    const firstListItem = getByTestId(listItemTestID);
    fireEvent.press(firstListItem);

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
