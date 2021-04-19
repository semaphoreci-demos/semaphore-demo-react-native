import React from 'react';
import { Text, View } from 'react-native';

import { SearchScreenProps } from './types';
import style from './style';

function SearchScreen(props: SearchScreenProps): React.ReactChild {
  return (
    <View style={style.screen} testID="SearchScreen">
      <Text>Hello World</Text>
    </View>
  );
}

export default SearchScreen;
