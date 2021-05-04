/**
 *
 * CountriesAutocomplete
 *
 */

import sortBy from 'lodash/sortBy';

import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {countries, Country} from 'countries-list';

import Input from 'theme/Input';
import useAutocomplete from 'theme/Autocomplete';

import ListItem from './ListItem';
import style from './style';

interface ICountriesAutocompleteProps {
  onSelect: (item: Country) => void;
  testID?: string;
}

const countriesList: Country[] = Object.keys(countries).map(
  key => countries[key],
);

const CountriesAutocomplete: React.FC<ICountriesAutocompleteProps> = props => {
  const autocomplete = useAutocomplete({
    data: countriesList,
    filterKey: 'name',
  });

  return (
    <>
      <View
        style={style.autocompleteContainer}
        testID={props.testID || 'countriesAutocomplete'}>
        <Input
          {...autocomplete.inputProps}
          placeholder="Search Countries"
          clearButtonMode="never"
          style={style.input}
          autoFocus
          testID="countriesAutocompleteInput"
        />
      </View>
      {autocomplete.focus && autocomplete.data ? (
        <FlatList
          testID="countriesAutocompleteList"
          style={style.listContainer}
          data={sortBy(autocomplete.data, 'name').slice(0, 5)}
          bounces={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          keyExtractor={({name}) => name}
          renderItem={({item}: {item: Country; index: number}) => (
            <ListItem
              onPress={() => {
                props.onSelect(item);
                autocomplete.clear();
              }}
              data={item}
              testID={`listItem-${item.name}`}
            />
          )}
          ListEmptyComponent={
            autocomplete.value ? (
              <Text>No result for {autocomplete.value}.</Text>
            ) : null
          }
        />
      ) : null}
    </>
  );
};

export default CountriesAutocomplete;
