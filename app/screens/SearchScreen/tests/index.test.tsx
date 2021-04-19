import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchScreen, {COUNTRY_LOCAL_STORAGE_KEY} from '../index';

const COUNTRY_NAME = 'Serbia';
const COUNTRY_DETAILS =
  '{"name":"Serbia","native":"Србија","phone":"381","continent":"EU","capital":"Belgrade","currency":"RSD","languages":["sr"],"emoji":"🇷🇸","emojiU":"U+1F1F7 U+1F1F8"}';

// Describing a test suite
describe('<SearchScreen />', () => {
  it('Displays selected country', async () => {
    // Rendering Button component using react-native-test-renderer.
    const screen = await render(<SearchScreen />);

    // Grabbing our input to perform actions on it.
    const inputTestID = 'countriesAutocompleteInput';
    const textInput = screen.getByTestId(inputTestID);

    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on focus & changeText event
     */
    fireEvent(textInput, 'focus');
    fireEvent.changeText(textInput, COUNTRY_NAME);

    // Grabbing our input to perform actions on it.
    const listItemTestID = `listItem-${COUNTRY_NAME}`;
    const firstListItem = screen.getByTestId(listItemTestID);
    fireEvent.press(firstListItem);

    const selectedCountryName = screen.getByTestId('selectedItemName');
    expect(selectedCountryName).toBeTruthy();
    expect(selectedCountryName.children).toContain(COUNTRY_NAME);
  });

  it('Stores selected country in local storage', async () => {
    // Rendering Button component using react-native-test-renderer.
    const screen = await render(<SearchScreen />);

    // Grabbing our input to perform actions on it.
    const inputTestID = 'countriesAutocompleteInput';
    const textInput = screen.getByTestId(inputTestID);

    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on focus & changeText event
     */
    fireEvent(textInput, 'focus');
    fireEvent.changeText(textInput, COUNTRY_NAME);

    // Grabbing our input to perform actions on it.
    const listItemTestID = `listItem-${COUNTRY_NAME}`;
    const firstListItem = screen.getByTestId(listItemTestID);
    fireEvent.press(firstListItem);

    // Asserting token storage in local storage.
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      COUNTRY_LOCAL_STORAGE_KEY,
      COUNTRY_DETAILS,
    );
  });

  it('Removes selected country from local storage', async () => {
    // Rendering Button component using react-native-test-renderer.
    const screen = await render(<SearchScreen />);

    // Grabbing our input to perform actions on it.
    const inputTestID = 'countriesAutocompleteInput';
    const textInput = screen.getByTestId(inputTestID);

    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on focus & changeText event
     */
    fireEvent(textInput, 'focus');
    fireEvent.changeText(textInput, COUNTRY_NAME);

    // Grabbing our input to perform actions on it.
    const listItemTestID = `listItem-${COUNTRY_NAME}`;
    const firstListItem = screen.getByTestId(listItemTestID);
    fireEvent.press(firstListItem);

    const selectedItem = screen.getByTestId('selectedItem');
    fireEvent.press(selectedItem);

    // Asserting token storage in local storage.
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(
      COUNTRY_LOCAL_STORAGE_KEY,
    );
  });
});
