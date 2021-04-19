/**
 *
 * Search Screen
 *
 */

import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Country} from 'countries-list';

import TouchFeedback from 'theme/TouchFeedback';

import {SearchScreenProps} from './types';
import style from './style';
import LocalStorage from 'platform/LocalStorage';
import CountriesAutocomplete from 'components/CountriesAutocomplete';
import IconButton from 'theme/Button/IconButton';

export const COUNTRY_LOCAL_STORAGE_KEY = 'country';

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [selectedItem, setSelectedItem] = useState<Country>();

  const checkSelectedCountry = useCallback(async () => {
    const localStorageResponse = await LocalStorage.getItem(
      COUNTRY_LOCAL_STORAGE_KEY,
    );
    if (localStorageResponse) {
      setSelectedItem(localStorageResponse);
    }
  }, []);

  useEffect(() => {
    checkSelectedCountry();
  }, [checkSelectedCountry]);

  const onSelect = useCallback((item: Country | undefined) => {
    setSelectedItem(item);
    if (item) {
      LocalStorage.setItem(COUNTRY_LOCAL_STORAGE_KEY, item);
    } else {
      LocalStorage.removeItem(COUNTRY_LOCAL_STORAGE_KEY);
    }
  }, []);

  return (
    <View style={style.screen} testID="searchScreen">
      <Text style={style.heading}>Select Country</Text>
      {selectedItem ? (
        <TouchFeedback
          style={style.selectedItemContainer}
          testID="selectedItem"
          onPress={() => onSelect(undefined)}>
          <Text
            style={style.selectedItemName}
            accessibilityLabel={selectedItem.name}
            testID="selectedItemName">
            {selectedItem.emoji} {selectedItem.phone} {selectedItem.name}
          </Text>
          <View style={style.selectedItemCancelButton}>
            <IconButton
              icon={{name: 'x'}}
              testID="selectedItemCancelButton"
              onPress={() => onSelect(undefined)}
            />
          </View>
        </TouchFeedback>
      ) : (
        <CountriesAutocomplete onSelect={onSelect} />
      )}
    </View>
  );
};

export default SearchScreen;
